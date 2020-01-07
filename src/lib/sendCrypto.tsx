import * as React from "react";

import { OrderedMap } from "immutable";
import CryptoAccount from "send-crypto";
import BigNumber from "bignumber.js";

import { Message, MessageType } from "../components/Faucet";
import { ReactComponent as iconBCH } from "../img/bch.svg";
import { ReactComponent as iconBTC } from "../img/btc.svg";
import { ReactComponent as iconDAI } from "../img/dai.svg";
import { ReactComponent as iconETH } from "../img/eth.svg";
import { ReactComponent as iconREN } from "../img/ren.svg";
import { ReactComponent as iconZEC } from "../img/zec.svg";

export enum Token {
    ETH = "ETH",
    REN = "REN",
    DAI = "DAI",
    BTC = "BTC",
    ZEC = "ZEC",
    BCH = "BCH",
}

const getCryptoAccountToken = (token: Token) => {
    switch (token) {
        case Token.ETH:
        case Token.BTC:
        case Token.ZEC:
        case Token.BCH:
            return token;
        case Token.REN:
            return { type: "ERC20", address: "0x2CD647668494c1B15743AB283A0f980d90a87394" };
        case Token.DAI:
            return { type: "ERC20", address: "0xC4375B7De8af5a38a93548eb8453a498222C4fF2" };
    }
}

const getExplorerLink = (token: Token, transactionHash: string) => {
    switch (token) {
        case Token.ETH:
        case Token.REN:
        case Token.DAI:
            return `https://kovan.etherscan.io/tx/${transactionHash}`;
        case Token.BTC:
            return `https://chain.so/tx/BTCTEST/${transactionHash}`;
        case Token.ZEC:
            return `https://chain.so/tx/ZECTEST/${transactionHash}`;
        case Token.BCH:
            return `https://explorer.bitcoin.com/tbch/tx/${transactionHash}`;
    }
}

export const TokenIcons = OrderedMap<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>()
    .set(Token.ETH, iconETH)
    .set(Token.REN, iconREN)
    .set(Token.DAI, iconDAI)
    .set(Token.BTC, iconBTC)
    .set(Token.ZEC, iconZEC)
    .set(Token.BCH, iconBCH);

export const sendTokens = async (
    cryptoAccount: CryptoAccount,
    token: Token,
    recipient: string,
    amount: string,
    addMessage: (msg: Message) => void,
): Promise<void> => {
    if (isNaN(parseInt(amount))) {
        throw new Error(`Invalid amount ${amount}`);
    }
    try {
        const txHash: string = await new Promise((resolve, reject) => {
            cryptoAccount.send(recipient, amount, getCryptoAccountToken(token)).on("transactionHash", resolve).catch(reject);
        });
        addMessage({
            type: MessageType.INFO,
            key: token,
            message: <span>Sending {amount} {token} (<a href={getExplorerLink(token, txHash)}>Explorer Link</a>)</span>,
        });
    } catch (error) {
        console.error(error);
        if (error.message && error.message.match("newBlockHeaders ")) {
            return;
        }
        addMessage({
            type: MessageType.ERROR,
            key: token,
            message: (
                <span>Error sending {token}: {error.message}</span>
            ),
        });
    }
};

export const balanceOf = (cryptoAccount: CryptoAccount, token: Token): Promise<BigNumber> => cryptoAccount.balanceOf<BigNumber>(getCryptoAccountToken(token), { bn: BigNumber });

export const extractError = (error: any): string => {
    if (typeof error === "object") {
        if (error.response) { return extractError(error.response); }
        if (error.data) { return extractError(error.data); }
        if (error.error) { return extractError(error.error); }
        if (error.message) { return extractError(error.message); }
        if (error.statusText) { return extractError(error.statusText); }
        try {
            return JSON.stringify(error);
        } catch (error) {
            // Ignore JSON error
        }
    }
    return String(error);
};
