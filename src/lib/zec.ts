// tslint:disable: no-console

import * as bitcoin from "bitgo-utxo-lib";

import axios from "axios";
import chalk from "chalk";
import BigNumber from "bignumber.js";
import { getZcashUTXOs } from "@renproject/ren";

// import { sumBalance } from "./btc";

/** ZEC ***********************************************************************/

const getZECUTXOs = getZcashUTXOs("testnet");
const importZECPrivateKey = (privateKeyIn: string) => {
    return bitcoin.ECPair.fromPrivateKeyBuffer(Buffer.from(privateKeyIn, "hex"), bitcoin.networks.zcashTest);
}
export const privateToZECAddress = (privateKeyIn: string) => { // privateToAddress(ZAddress, ZNetworks.testnet);
    return { address: importZECPrivateKey(privateKeyIn).getAddress() };
}

export const sumZECBalance = async (privateKey: string): Promise<BigNumber> => {
    const address = bitcoin.ECPair.fromPrivateKeyBuffer(Buffer.from(privateKey, "hex"), bitcoin.networks.zcashTest).getAddress();
    const utxos = await getZECUTXOs(address, 0);
    return utxos.map(item => item.value).reduce((prev, next) => prev.plus(next), new BigNumber(0)).dividedBy(10 ** 8);
}

export const sendRawTransaction = async (txHex: string, mercuryURL: string, chainSO: string): Promise<string> => {
    try {
        const response = await axios.post<{ error: string | null, id: null, result: string }>(
            mercuryURL,
            { jsonrpc: "2.0", method: "sendrawtransaction", params: [txHex] },
            { timeout: 5000 }
        );
        if (response.data.error) {
            throw new Error(response.data.error);
        }
        return response.data.result;
    } catch (error) {
        console.log(`Unable to submit to Mercury (${(error.response && error.response.data && error.response.data.error && error.response.data.error.message) || error}). Trying chain.so...`);
        try {
            console.log(txHex);
            await axios.post(`https://chain.so/api/v2/send_tx/${chainSO}`, { tx_hex: txHex }, { timeout: 5000 });
            return "";
        } catch (chainError) {
            console.error(`chain.so returned error ${chainError.message}`);
            console.log(`\n\n\nPlease check your balance balance!\n`);
            if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
                error.message = `${error.message}: ${error.response.data.error.message}`;
            }
            throw error;
        }
    }
};

// export const privateToZECAddress = (rawPrivateKey: string): string => {
//     return bitcoin.ECPair.fromWIF(rawPrivateKey, bitcoin.networks.zcashTest).getAddress();
// }

export const transferZEC = async (rawPrivateKey: string, gatewayAddress: string, amountSatoshis: BigNumber): Promise<string> => {
    console.log(`Please deposit ${amountSatoshis.div(new BigNumber(10).pow(8)).toFixed()} ZEC to ${gatewayAddress}`);

    // const privateKey = privateToZECAddress(rawPrivateKey).privateKey.toWIF();

    const account = importZECPrivateKey(rawPrivateKey);

    // const alice = bitcoin.ECPair.fromPrivateKeyBuffer(Buffer.from(keyHex, "hex"), );
    // const account = bitcoin.ECPair.fromWIF(privateKey, bitcoin.networks.zcashTest);

    const utxos = await getZECUTXOs(account.getAddress().toString(), 0);

    const fees = new BigNumber(10000);

    const tx = new bitcoin.TransactionBuilder(bitcoin.networks.zcashTest);
    tx.setVersion(bitcoin.Transaction.ZCASH_SAPLING_VERSION);  // 4
    tx.setVersionGroupId(parseInt("0x892F2085", 16));

    // Add up balance
    const availableSatoshis = utxos.reduce((sum, utxo) => sum.plus(utxo.value), new BigNumber(0));

    if (availableSatoshis.lt(amountSatoshis.plus(fees))) {
        throw new Error("Insufficient balance to broadcast transaction");
    }

    const change = availableSatoshis.minus(amountSatoshis).minus(fees);

    // Add all inputs
    utxos.map(utxo => {
        tx.addInput(utxo.txid, utxo.output_no);
    });

    // Add outputs
    tx.addOutput(gatewayAddress, amountSatoshis.toNumber());
    if (change.gt(0)) { tx.addOutput(account.getAddress(), change.toNumber()); }

    try {
        console.log(`${chalk.magenta(`[INFO]`)} ${account.getAddress()} has ${chalk.magenta(`${change.div(new BigNumber(10).pow(8)).toFixed()}`)} tZEC remaining`);
    } catch (error) {
        console.error(error);
    }

    try {
        // Sign inputs
        utxos.map((utxo, i) => {
            // console.log(i, account, bitcoin.Transaction.SIGHASH_SINGLE, utxo.value);
            try {
                console.log("i", i);
                console.log("account", account);
                console.log("bitcoin.Transaction.SIGHASH_SINGLE", bitcoin.Transaction.SIGHASH_SINGLE);
                console.log("utxo.value", utxo.value);
                tx.sign(i, account, "", bitcoin.Transaction.SIGHASH_SINGLE, utxo.value);
            } catch (error) {
                console.error(error);
                throw error;
            }
        });

        let built;
        try {
            built = tx.build();
        } catch (error) {
            console.error(error);
            throw error;
        }

        return await sendRawTransaction(built.toHex(), "http://139.59.217.120:5000/zec/testnet", "ZECTEST");
    } catch (error) {
        console.error(error);
        throw error;
    }
};
