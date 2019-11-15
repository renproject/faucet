// tslint:disable: no-console

import * as bitcoin from "bitgo-utxo-lib";

import { toCashAddress, toLegacyAddress } from "bchaddrjs";
import axios from "axios";
import chalk from "chalk";
import BigNumber from "bignumber.js";
import RenSDK, { getBCashUTXOs } from "@renproject/ren";

// import { sumBalance } from "./btc";

/** BCH ***********************************************************************/

const getBCHUTXOs = getBCashUTXOs("testnet");
const importBCHPrivateKey = (privateKeyIn: string) => {
    return bitcoin.ECPair.fromPrivateKeyBuffer(Buffer.from(privateKeyIn, "hex"), bitcoin.networks.bitcoincashTestnet);
}
export const privateToBCHAddress = (privateKeyIn: string) => { // privateToAddress(ZAddress, ZNetworks.testnet);
    return { address: toCashAddress(importBCHPrivateKey(privateKeyIn).getAddress()) };
}

export const sumBCHBalance = async (privateKey: string): Promise<BigNumber> => {
    const address = privateToBCHAddress(privateKey).address;
    const utxos = await getBCHUTXOs(address, 0);
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

// export const privateToBCHAddress = (rawPrivateKey: string): string => {
//     return bitcoin.ECPair.fromWIF(rawPrivateKey, bitcoin.networks.bitcoincashTestnet).getAddress();
// }

export const transferBCH = async (rawPrivateKey: string, gatewayAddress: string, amountSatoshis: BigNumber): Promise<string> => {
    console.log(`Please deposit ${amountSatoshis.div(new BigNumber(10).pow(8)).toFixed()} BCH to ${gatewayAddress}`);

    // const privateKey = privateToBCHAddress(rawPrivateKey).privateKey.toWIF();

    const account = importBCHPrivateKey(rawPrivateKey);

    // const alice = bitcoin.ECPair.fromPrivateKeyBuffer(Buffer.from(keyHex, "hex"), );
    // const account = bitcoin.ECPair.fromWIF(privateKey, bitcoin.networks.bitcoincashTestnet);

    const utxos = await getBCHUTXOs(account.getAddress(), 0);

    const fees = new BigNumber(10000);

    const tx = new bitcoin.TransactionBuilder(bitcoin.networks.bitcoincashTestnet);

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
    tx.addOutput(toLegacyAddress(gatewayAddress), amountSatoshis.toNumber());
    if (change.gt(0)) { tx.addOutput(account.getAddress(), change.toNumber()); }

    try {
        console.log(`${chalk.magenta(`[INFO]`)} ${account.getAddress()} has ${chalk.magenta(`${change.div(new BigNumber(10).pow(8)).toFixed()}`)} tBCH remaining`);
    } catch (error) {
        console.error(error);
    }

    try {
        // Sign inputs
        utxos.map((utxo, i) => {
            try {
                tx.sign(i, account, "", bitcoin.Transaction.SIGHASH_SINGLE | bitcoin.Transaction.SIGHASH_BITCOINCASHBIP143, utxo.value);
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

        return await sendRawTransaction(built.toHex(), "http://139.59.217.120:5000/bch/testnet", "BCHTEST");
    } catch (error) {
        console.error(error);
        throw error;
    }
};
