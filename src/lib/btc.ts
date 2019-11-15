import Axios from "axios";
import {
    Address as BAddress, Networks as BNetworks, PrivateKey as BPrivateKey, Script as BScript,
    Transaction as BTransaction,
} from "bitcore-lib";
import BigNumber from "bignumber.js";
import { getBitcoinUTXOs as getBTCUTXOs } from "@renproject/ren";

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

export const chainSo = "https://chain.so/api/v2";

export enum ChainSoNetwork {
    BTC = "BTCTEST",
}

type utxoFn = (address: string, confirmations: number) => Promise<UTXO[]>;

export const privateToAddress = (Address: typeof BAddress, network: typeof BNetworks.testnet) => (privateKeyIn: string) => {
    const privateKey = new BPrivateKey(privateKeyIn, network);
    const address = (Address as any).fromPublicKeyHash((privateKey.publicKey as any)._getID(), network).toString()
    // address = privateKey.toAddress().toString();
    return { privateKey, address };
}

export const sumBalance = (utxoFn: utxoFn, Address: typeof BAddress, network: typeof BNetworks.testnet) => async (privateKey: string): Promise<BigNumber> => {
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
    Transaction: typeof BTransaction,
    Address: typeof BAddress,
    Script: typeof BScript,
    network: typeof BNetworks.testnet,
    utxoFn: utxoFn,
    submitSTX: (transaction: BTransaction) => Promise<string>
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

const getBitcoinUTXOs: utxoFn = getBTCUTXOs("testnet");
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
