import BigNumber from "bignumber.js";
import React from "react";
import CryptoAccount from "send-crypto";

import { Message, MessageType } from "../components/Faucet";
import { TokenDetails } from "../tokens";

export const sendTokens = async (
    cryptoAccount: CryptoAccount,
    token: TokenDetails,
    recipient: string,
    amount: string,
    params: string,
    addMessage: (msg: Message) => void,
): Promise<void> => {
    if (isNaN(parseInt(amount, 10))) {
        throw new Error(`Invalid amount ${amount}`);
    }
    try {
        const txHash: string = await new Promise((resolve, reject) => {
            cryptoAccount
                .send(recipient, amount, token.sendCrypto || token.name, {
                    params: params === "" ? undefined : params,
                })
                .on("transactionHash", resolve)
                .catch(reject);
        });
        addMessage({
            type: MessageType.INFO,
            key: token.name,
            message: (
                <span>
                    Sending {amount} {token.name} (
                    <a href={token.explorer(txHash)}>Explorer Link</a>)
                </span>
            ),
        });
    } catch (error) {
        console.error(error);
        if (error.message && error.message.match("newBlockHeaders ")) {
            return;
        }
        addMessage({
            type: MessageType.ERROR,
            key: token.name,
            message: (
                <span>
                    Error sending {token.name}: {error.message}
                </span>
            ),
        });
    }
};

export const getAddress = async (
    cryptoAccount: CryptoAccount,
    token: TokenDetails,
): Promise<string> => cryptoAccount.address(token.sendCrypto || token.name);

export const balanceOf = async (
    cryptoAccount: CryptoAccount,
    token: TokenDetails,
): Promise<BigNumber> =>
    cryptoAccount.balanceOf<BigNumber>(token.sendCrypto || token.name, {
        bn: BigNumber,
    });

// tslint:disable-next-line: no-any
export const extractError = (error: any): string => {
    if (typeof error === "object") {
        if (error.response) {
            return extractError(error.response);
        }
        if (error.data) {
            return extractError(error.data);
        }
        if (error.error) {
            return extractError(error.error);
        }
        if (error.message) {
            return extractError(error.message);
        }
        if (error.statusText) {
            return extractError(error.statusText);
        }
        try {
            return JSON.stringify(error);
        } catch (error) {
            // Ignore JSON error
        }
    }
    return String(error);
};
