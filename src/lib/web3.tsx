import * as ethereumjsWallet from "ethereumjs-wallet";
import * as React from "react";

import Web3 from "web3";
import { List, OrderedMap } from "immutable";
import WalletSubprovider from "ethereumjs-wallet/provider-engine";
import ProviderEngine from "web3-provider-engine";
import FetchSubprovider from "web3-provider-engine/subproviders/fetch";
import NonceSubprovider from "web3-provider-engine/subproviders/nonce-tracker";
import BigNumber from "bignumber.js";

// import { Contract } from "web3/types";
import { Message, MessageType } from "../components/Faucet";
import { ReactComponent as iconBCH } from "../img/bch.svg";
import { ReactComponent as iconBTC } from "../img/btc.svg";
import { ReactComponent as iconDAI } from "../img/dai.svg";
import { ReactComponent as iconETH } from "../img/eth.svg";
import { ReactComponent as iconREN } from "../img/ren.svg";
import { ReactComponent as iconZEC } from "../img/zec.svg";
import { sumBCHBalance, transferBCH } from "./bch";
import { sumBTCBalance, transferBTC } from "./btc";
import { sumZECBalance, transferZEC } from "./zec";

export enum Token {
    ETH = "ETH",
    REN = "REN",
    DAI = "DAI",
    BTC = "BTC",
    ZEC = "ZEC",
    BCH = "BCH",
}

export interface TokenDetails {
    code: Token;
    digits: number;
    address: string;
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    getBalance: (web3: Web3, account: string, privateKey: string, token: TokenDetails) => Promise<BigNumber>,
    transfer: (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string) => Promise<void>,
}

const getETHBalance = async (web3: Web3, account: string, privateKey: string, token: TokenDetails): Promise<BigNumber> => {
    return new BigNumber(await web3.eth.getBalance(account)).div(new BigNumber(10).pow(token.digits));
}

const getBTCBalance = async (web3: Web3, account: string, privateKey: string, token: TokenDetails): Promise<BigNumber> => {
    return sumBTCBalance(privateKey);
}

const getZECBalance = async (web3: Web3, account: string, privateKey: string, token: TokenDetails): Promise<BigNumber> => {
    return sumZECBalance(privateKey);
}

const getBCHBalance = async (web3: Web3, account: string, privateKey: string, token: TokenDetails): Promise<BigNumber> => {
    return sumBCHBalance(privateKey);
}

const getERC20Balance = async (web3: Web3, account: string, privateKey: string, token: TokenDetails) => {
    const erc20 = await getERC20Contract(web3, token.address);
    return new BigNumber(await erc20.methods.balanceOf(account).call()).div(new BigNumber(10).pow(token.digits));
}


const standardTokenABI = require("./abi/StandardToken.json").abi;

export const getERC20Contract = (web3: Web3, address: string): any => new web3.eth.Contract(standardTokenABI, address);

const onTransactionHash = (addMessage: (msg: Message) => void, value: string, token: string) => (transactionHash: string) => {
    addMessage({
        type: MessageType.INFO,
        key: Token.ETH,
        message: <span>Sending {value} {token} (<a href={`https://kovan.etherscan.io/tx/${transactionHash}`}>Etherscan Link</a>)</span>,
    });
}

const onError = (addMessage: (msg: Message) => void, token: string) => (err: Error) => {
    console.error(err);
    if (err.message && err.message.match("newBlockHeaders ")) {
        return;
    }
    addMessage({
        type: MessageType.ERROR,
        key: token,
        message: <span>Error sending {token}: {err.message}</span>,
    });
}

const shiftValue = (token: Token, amount: string): BigNumber => {
    const tokenDetails = TOKENS.get(token)!;
    return new BigNumber(amount).multipliedBy(new BigNumber(10).pow(tokenDetails.digits));
}

const sendETH = async (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string): Promise<void> => {
    try {
        const hash = await new Promise<string>((resolve, reject) => {
            web3.eth.sendTransaction({
                from,
                to: recipient,
                value: shiftValue(token, amount),
            })
                .on("transactionHash", resolve)
                .on("error", reject);
        });
        onTransactionHash(addMessage, amount, Token.ETH)(hash);
    } catch (error) {
        onError(addMessage, Token.ETH)(error);
    }
}

const sendZEC = async (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string): Promise<void> => {
    try {
        const txHash = await transferZEC(privateKey, recipient, shiftValue(token, amount));
        addMessage({
            type: MessageType.INFO,
            key: Token.ZEC,
            message: <span>Sending {amount} {token} (<a href={`https://chain.so/tx/ZECTEST/${txHash}`}>Explorer link</a>)</span>,
        });
    } catch (error) {
        onError(addMessage, Token.ZEC)(error);
    }
}

const sendBCH = async (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string): Promise<void> => {
    try {
        const txHash = await transferBCH(privateKey, recipient, shiftValue(token, amount));
        addMessage({
            type: MessageType.INFO,
            key: Token.BCH,
            message: <span>Sending {amount} {token} (<a href={`https://explorer.bitcoin.com/tbch/tx/${txHash}`}>Explorer link</a>)</span>,
        });
    } catch (error) {
        onError(addMessage, Token.BCH)(error);
    }
}

const sendBTC = async (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string): Promise<void> => {
    try {
        const txHash = await transferBTC(privateKey, recipient, shiftValue(token, amount));
        console.log(txHash);
        addMessage({
            type: MessageType.INFO,
            key: Token.BTC,
            // message: <span>Sending {amount} {token} (<a href={`https://tbtc.bitaps.com/${txHash}`}>Explorer link</a>)</span>,
            message: <span>Sending {amount} {token} (<a href={`https://chain.so/tx/BTCTEST/${txHash}`}>Explorer link</a>)</span>,
        });
    } catch (error) {
        onError(addMessage, Token.BTC)(error);
    }
}

const sendERC20Token = async (token: Token, web3: Web3, privateKey: string, recipient: string, amount: string, addMessage: (msg: Message) => void, from: string) => {
    const tokenDetails = TOKENS.get(token)!;
    try {
        const erc20 = await getERC20Contract(web3, tokenDetails.address);
        const hash = await new Promise<string>((resolve, reject) => {
            erc20.methods.transfer(recipient, shiftValue(token, amount).toFixed()).send({
                from,
            })
                .on("transactionHash", resolve)
                .on("error", reject);
        });
        onTransactionHash(addMessage, amount, token)(hash);
    } catch (error) {
        onError(addMessage, token)(error);
    }
}

export const TOKENS = OrderedMap<string, TokenDetails>()
    .set(Token.ETH, { code: Token.ETH, digits: 18, address: "", image: iconETH, getBalance: getETHBalance, transfer: sendETH, })
    .set(Token.REN, { code: Token.REN, digits: 18, address: "0x2CD647668494c1B15743AB283A0f980d90a87394", image: iconREN, getBalance: getERC20Balance, transfer: sendERC20Token })
    .set(Token.DAI, { code: Token.DAI, digits: 18, address: "0xc4375b7de8af5a38a93548eb8453a498222c4ff2", image: iconDAI, getBalance: getERC20Balance, transfer: sendERC20Token })
    .set(Token.BTC, { code: Token.BTC, digits: 8, address: "", image: iconBTC, getBalance: getBTCBalance, transfer: sendBTC })
    .set(Token.ZEC, { code: Token.ZEC, digits: 8, address: "", image: iconZEC, getBalance: getZECBalance, transfer: sendZEC })
    .set(Token.BCH, { code: Token.BCH, digits: 8, address: "", image: iconBCH, getBalance: getBCHBalance, transfer: sendBCH })
    ;

export const sendTokens = async (
    account: string, web3: Web3, privateKey: string, token: Token,
    recipient: string, amount: string, addMessage: (msg: Message) => void
): Promise<void> => {
    await TOKENS.get(token)!.transfer(token, web3, privateKey, recipient, amount, addMessage, account);
};

export const getWeb3 = (privateKey: string) => {
    const wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));

    const walletProvider = new WalletSubprovider(wallet, {});
    const engine = new ProviderEngine();
    engine.addProvider(walletProvider);
    engine.addProvider(new NonceSubprovider());
    engine.addProvider(new FetchSubprovider({ rpcUrl: process.env.REACT_APP_ETHEREUM_NODE }));
    engine.start();
    return new Web3(engine);
};
