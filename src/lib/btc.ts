import Axios from "axios";
import {
    Address as BAddress, Networks as BNetworks, Opcode as BOpcode, PrivateKey as BPrivateKey,
    Script as BScript, Transaction as BTransaction,
} from "bitcore-lib";
import {
    Address as ZAddress, Networks as ZNetworks, Opcode as ZOpcode, PrivateKey as ZPrivateKey,
    Script as ZScript, Transaction as ZTransaction,
} from "bitcore-lib-zcash";
import BigNumber from "bignumber.js";

/** COMMON ********************************************************************/

interface UTXO {
    txid: string; // hex string without 0x prefix
    value: number; // satoshis
    script_hex: string; // hex string without 0x prefix
    output_no: number;
}

interface UTXO2 {
    status: any,
    txid: string,
    value: number,
    vout: number,
}

const chainSo = "https://chain.so/api/v2";

enum ChainSoNetwork {
    BTC = "BTCTEST",
    ZEC = "ZECTEST",
}

type utxoFn = (address: string, confirmations: number) => Promise<UTXO[]>;
const getUTXOs = (endpoint: string, network: string): utxoFn => async (address: string, confirmations: number): Promise<UTXO[]> => {
    try {
        const resp = await Axios.get<{ data: { txs: UTXO[] } }>(`${endpoint}/get_tx_unspent/${network}/${address}/${confirmations}`);
        // tslint:disable-next-line:no-any
        const data = (resp.data);

        // Convert value to Satoshi
        for (const [, tx] of Object.entries(data.data.txs)) {
            // tslint:disable-next-line:no-any
            (tx as any).value = new BigNumber((tx as any).value).multipliedBy(10 ** 8).toNumber(); // TODO: Use BN
        }
        return data.data.txs;
    } catch (error) {
        console.error(error);
        const response = await Axios.get<UTXO2[]>(`https://blockstream.info/testnet/api/address/${address}/utxo`);
        let utxos = [];

        for (const utxo of response.data) {
            // const response = await Axios.get<UTXO2[]>(`https://blockstream.info/testnet/api/tx/${utxo.txid}`);
            // console.log(response);
            utxos.push({
                txid: utxo.txid,
                value: utxo.value,
                script_hex: "76a914b0c08e3b7da084d7dbe9431e9e49fb61fb3b64d788ac",
                output_no: utxo.vout,
            });
        }

        return utxos;
    }
};

export const privateToAddress = (Address: typeof BAddress | typeof ZAddress, network: typeof BNetworks.testnet | ZNetworks.Network) => (privateKeyIn: string) => {
    const privateKey = new BPrivateKey(privateKeyIn, network);
    const address = (Address as any).fromPublicKeyHash((privateKey.publicKey as any)._getID(), network).toString()
    // address = privateKey.toAddress().toString();
    return { privateKey, address };
}

export const sumBalance = (utxoFn: utxoFn, Address: typeof BAddress | typeof ZAddress, network: typeof BNetworks.testnet | ZNetworks.Network) => async (privateKey: string): Promise<BigNumber> => {
    const { address } = privateToAddress(Address, network)(privateKey);
    const utxos = await utxoFn(address, 0);
    return utxos.map(item => item.value).reduce((prev, next) => prev.plus(next), new BigNumber(0)).dividedBy(10 ** 8);
}

interface ChainSoSTX {
    "status": "success";
    "data": {
        "network": string;
        "txid": string; // Hex without 0x
    }
}

export const transfer = (
    Transaction: typeof BTransaction | typeof ZTransaction,
    Address: typeof BAddress | typeof ZAddress,
    Script: typeof BScript | typeof ZScript,
    network: typeof BNetworks.testnet | ZNetworks.Network,
    utxoFn: utxoFn,
    submitSTX: (transaction: BTransaction | ZTransaction) => Promise<string>
) =>
    async (privateKeyIn: string, toAddress: string, amount: BigNumber) => {
        const { address, privateKey } = privateToAddress(Address, network)(privateKeyIn);

        const utxos = await utxoFn(address, 0);
        const bitcoreUTXOs: any[] = [];
        let utxoAmount = 0;
        for (const utxo of utxos) {
            if (new BigNumber(utxoAmount).gte(amount.plus(10000))) {
                break;
            }
            const bitcoreUTXO = new Transaction.UnspentOutput({
                txId: utxo.txid,
                outputIndex: utxo.output_no,
                address: new Address(address),
                script: new Script(utxo.script_hex),
                satoshis: utxo.value,
            });
            bitcoreUTXOs.push(bitcoreUTXO);
            utxoAmount += utxo.value;
        }

        if (new BigNumber(utxoAmount).lt(amount.plus(10000))) {
            throw new Error(`Faucet has insufficient funds for amount plus transfer fees`);
        }

        const transaction = new Transaction().from(bitcoreUTXOs).to(toAddress, amount.toNumber()).fee(10000).change(new Address(address)).sign(privateKey);

        try {
            return await submitSTX(transaction);
        } catch (error) {
            console.log(transaction.toString());
            throw error;
        }
    }

/** BTC ***********************************************************************/

const getBitcoinUTXOs = getUTXOs(chainSo, ChainSoNetwork.BTC);
export const privateToBTCAddress = privateToAddress(BAddress, BNetworks.testnet);
export const sumBTCBalance = sumBalance(getBitcoinUTXOs, BAddress, BNetworks.testnet);
const submitBTCSTX = async (transaction: BTransaction) => {
    try {
        const response = await Axios.post<string>("https://blockstream.info/testnet/api/tx", transaction.toString());
        return response.data;
    } catch (error) {
        const response = await Axios.post<ChainSoSTX>(`${chainSo}/send_tx/${ChainSoNetwork.BTC}`, { tx_hex: transaction.toString() });
        return response.data.data.txid;
    }
}
export const transferBTC = transfer(BTransaction, BAddress, BScript, BNetworks.testnet, getBitcoinUTXOs, submitBTCSTX);

/** ZEC ***********************************************************************/

const getZcashUTXOs = getUTXOs(chainSo, ChainSoNetwork.ZEC);
export const privateToZECAddress = privateToAddress(ZAddress, ZNetworks.testnet);
export const sumZECBalance = sumBalance(getZcashUTXOs, ZAddress, ZNetworks.testnet);

const submitZECSTX = async (transaction: ZTransaction) => {
    const response = await Axios.post<ChainSoSTX>(`${chainSo}/send_tx/${ChainSoNetwork.ZEC}`, { tx_hex: transaction.toString() });
    return response.data.data.txid;
}

export const transferZEC = transfer(ZTransaction, ZAddress, ZScript, ZNetworks.testnet, getZcashUTXOs, submitZECSTX);