import * as React from "react";

import Web3 from "web3";

import { List, OrderedMap } from "immutable";

import * as ethereumjsWallet from "ethereumjs-wallet";
import WalletSubprovider from "ethereumjs-wallet/provider-engine";
import ProviderEngine from "web3-provider-engine";
import FetchSubprovider from "web3-provider-engine/subproviders/fetch";
import NonceSubprovider from "web3-provider-engine/subproviders/nonce-tracker";

import BigNumber from "bignumber.js";

import { Contract } from "web3/types";
import { Message, MessageType } from "../components/Faucet";

export enum Token {
    ETH = "ETH",
    REN = "REN",
    DGX = "DGX",
    TUSD = "TUSD",
    OMG = "OMG",
    ZRX = "ZRX",
}

export const TOKENS = OrderedMap<string, { code: Token, digits: number, address: string, amount: number, image: any }>()
    .set(Token.ETH, { code: Token.ETH, digits: 18, address: "", amount: 2, image: require("../img/eth.svg") })
    .set(Token.REN, { code: Token.REN, digits: 18, address: "0x2CD647668494c1B15743AB283A0f980d90a87394", amount: 100000, image: require("../img/ren.svg") })
    .set(Token.DGX, { code: Token.DGX, digits: 9, address: "0x932F4580B261e9781A6c3c102133C8fDd4503DFc", amount: 20, image: require("../img/dgx.png") })
    .set(Token.TUSD, { code: Token.TUSD, digits: 18, address: "0x525389752ffe6487d33EF53FBcD4E5D3AD7937a0", amount: 100, image: require("../img/tusd.png") })
    .set(Token.OMG, { code: Token.OMG, digits: 18, address: "0x66497ba75dD127b46316d806c077B06395918064", amount: 100, image: require("../img/omg.png") })
    .set(Token.ZRX, { code: Token.ZRX, digits: 18, address: "0x6EB628dCeFA95802899aD3A9EE0C7650Ac63d543", amount: 400, image: require("../img/zrx.png") });

const standardTokenABI = require("./abi/StandardToken.json").abi;

export const getWeb3 = (privateKey: string) => {
    const wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));

    const walletProvider = new WalletSubprovider(wallet, {});
    const engine = new ProviderEngine();
    engine.addProvider(walletProvider);
    engine.addProvider(new NonceSubprovider());
    engine.addProvider(new FetchSubprovider({ rpcUrl: "https://kovan.infura.io/8ZCgtqu4tkIIRHh9hFZj" }));
    engine.start();
    return new Web3(engine);
};

// export const getWeb3 = async (): Promise<Web3> => {
//     if (window.web3 !== undefined) {
//         const web3 = new Web3(window.web3.currentProvider);
//         const accounts = await web3.eth.getAccounts();
//         web3.eth.defaultAccount = accounts[0];
//         return web3;
//     }
//     throw new Error("no web3");
//     // return getWeb3();
// };

export const getERC20Contract = (web3: Web3, address: string): Contract => {
    // const nodePoolContract = contract({
    //     abi: standardTokenABI,
    // });

    // nodePoolContract.setProvider(web3.currentProvider);

    // const instance: StandardTokenContract = await nodePoolContract.at(address);
    // return instance;

    return new web3.eth.Contract(standardTokenABI, address);
};

export const sendTokens = async (
    account: string, web3: Web3,
    sendETH: boolean, sendREN: boolean, sendTOK: boolean,
    recipient: string, addMessage: (msg: Message) => void
): Promise<void> => {
    let nonce = await web3.eth.getTransactionCount(account, "pending");

    if (sendETH) {
        web3.eth.sendTransaction({
            gasPrice: web3.utils.toHex(1000000000),
            from: account,
            to: recipient,
            value: 2000000000000000000,
            nonce: web3.utils.toHex(nonce)
        }).on("transactionHash", (transactionHash: string) => {
            addMessage({
                type: MessageType.INFO,
                key: Token.ETH,
                message: <span>Sending 2 ETH (<a href={`https://kovan.etherscan.io/tx/${transactionHash}`}>Etherscan Link</a>)</span>,
            });
        }).on("error", (err: Error) => {
            console.error(err);
            if (err.message.match("newBlockHeaders ")) {
                return;
            }
            addMessage({
                type: MessageType.ERROR,
                key: Token.ETH,
                message: <span>Error sending 2 ETH: {err.message}</span>,
            });
        });
        nonce++;
    }

    let toSend = List<string>();

    if (sendREN) {
        toSend = toSend
            .push(Token.REN);
    }

    if (sendTOK) {
        toSend = toSend
            .push(Token.DGX)
            .push(Token.TUSD)
            .push(Token.OMG)
            .push(Token.ZRX);
    }
    for (const tokenSymbol of toSend.toArray()) {
        const tokenDetails = TOKENS.get(tokenSymbol);

        const erc20 = await getERC20Contract(web3, tokenDetails.address);

        const value = new BigNumber(tokenDetails.amount).multipliedBy(new BigNumber(10).pow(tokenDetails.digits));
        erc20.methods.transfer(recipient, value).send({
            nonce: web3.utils.toHex(nonce),
            gasPrice: web3.utils.toHex(1000000000),
            from: account,
        }).on("transactionHash", (tx: string) => {
            console.log(tx);
            addMessage({
                type: MessageType.INFO,
                key: tokenSymbol,
                message: <span>Sending {tokenDetails.amount} {tokenSymbol} (<a href={`https://kovan.etherscan.io/tx/${tx}`}>Etherscan Link</a>)</span>,
            });
        }).on("error", (err: Error) => {
            console.error(err);
            if (err.message.match("newBlockHeaders ")) {
                return;
            }
            addMessage({
                type: MessageType.ERROR,
                key: tokenSymbol,
                message: <span>Error sending {tokenDetails.amount} {tokenSymbol}: {err.message}</span>,
            });
        });
        nonce++;
    }
};


export const DEFAULT_BALANCES = OrderedMap<string, BigNumber>()
    .set(Token.ETH, new BigNumber(0))
    .set(Token.REN, new BigNumber(0))
    .set(Token.DGX, new BigNumber(0))
    .set(Token.TUSD, new BigNumber(0))
    .set(Token.OMG, new BigNumber(0))
    .set(Token.ZRX, new BigNumber(0));

export const updateBalances = async (web3: Web3, account: string): Promise<OrderedMap<string, BigNumber>> => {

    let balances = DEFAULT_BALANCES;

    for (const token of TOKENS.toArray()) {
        if (token.code === "ETH") {
            balances = balances.set(token.code, new BigNumber(await web3.eth.getBalance(account)).div(new BigNumber(10).pow(token.digits)));
        } else {
            const erc20 = await getERC20Contract(web3, token.address);
            balances = balances.set(token.code, new BigNumber(await erc20.methods.balanceOf(account).call()).div(new BigNumber(10).pow(token.digits)));
        }
    }

    return balances;
};
