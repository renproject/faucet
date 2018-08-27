import * as React from "react";

import Web3 from "web3";

import { List, OrderedMap } from "immutable";

import * as ethereumjsWallet from "ethereumjs-wallet";
import WalletSubprovider from "ethereumjs-wallet/provider-engine";
import ProviderEngine from "web3-provider-engine";
import FetchSubprovider from "web3-provider-engine/subproviders/fetch";
import NonceSubprovider from "web3-provider-engine/subproviders/nonce-tracker";


import BigNumber from "bignumber.js";
import { BN } from "bn.js";

import { Contract } from "web3/types";
import { Message, MessageType } from "../components/Faucet";

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
            value: 1300000000000000000,
            nonce: web3.utils.toHex(nonce)
        }).on("transactionHash", (transactionHash: string) => {
            addMessage({
                type: MessageType.INFO,
                key: "eth",
                message: <span>Sending 1.3 ETH (<a href={`https://kovan.etherscan.io/tx/${transactionHash}`}>Etherscan Link</a>)</span>,
            });
        }).on("error", (err: Error) => {
            console.error(err);
            if (err.message.match("newBlockHeaders ")) {
                return;
            }
            addMessage({
                type: MessageType.ERROR,
                key: "eth",
                message: <span>Error sending 1.3 ETH: {err.message}</span>,
            });
        });
        nonce++;
    }

    let toSend = List<[string, string, BN]>();

    if (sendREN) {
        toSend = toSend
            .push(["REN", "0x6f429121a3bd3e6c1c17edbc676eec44cf117faf", new BN("1B87506A3E7B0D400000", "hex")]);
    }

    if (sendTOK) {
        toSend = toSend
            .push(["DGX", "0x0798297a11cefef7479e40e67839fee3c025691e", new BN("6FC23AC00", "hex")])
            .push(["ABC", "0xc65d2e9c8924d4848935f4f22e3deca78c5217e5", new BN("AA87BEE538000", "hex")])
            .push(["XYZ", "0x5753addcd942b495b7297cbfc240a24ba7058274", new BN("1043561A8829300000", "hex")]);
    }
    for (const params of toSend.toArray()) {
        const erc20 = await getERC20Contract(web3, params[1]);

        erc20.methods.transfer(recipient, params[2]).send({
            nonce: web3.utils.toHex(nonce),
            gasPrice: web3.utils.toHex(1000000000),
            from: account,
        }).on("transactionHash", (tx: string) => {
            console.log(tx);
            addMessage({
                type: MessageType.INFO,
                key: params[0],
                message: <span>Sending {TRANSFERS.get(params[0])} {params[0]} (<a href={`https://kovan.etherscan.io/tx/${tx}`}>Etherscan Link</a>)</span>,
            });
        }).on("error", (err: Error) => {
            console.error(err);
            if (err.message.match("newBlockHeaders ")) {
                return;
            }
            addMessage({
                type: MessageType.ERROR,
                key: params[0],
                message: <span>Error sending {TRANSFERS.get(params[0])} {params[0]}: {err.message}</span>,
            });
        });
        nonce++;
    }
};


export const DEFAULT_BALANCES = OrderedMap<string, BigNumber>()
    .set("ETH", new BigNumber(0))
    .set("REN", new BigNumber(0))
    .set("DGX", new BigNumber(0))
    .set("ABC", new BigNumber(0))
    .set("XYZ", new BigNumber(0));

export const IMAGES = OrderedMap<string, any>()
    .set("ETH", require("../img/eth.svg"))
    .set("REN", require("../img/ren.svg"))
    .set("DGX", require("../img/dgx.png"))
    .set("ABC", require("../img/abc.svg"))
    .set("XYZ", require("../img/xyz.svg"));


export const TRANSFERS = OrderedMap<string, BigNumber>()
    .set("ETH", new BigNumber(1.3))
    .set("REN", new BigNumber(130000))
    .set("DGX", new BigNumber(30))
    .set("ABC", new BigNumber(3000))
    .set("XYZ", new BigNumber(300));

export const updateBalances = async (web3: Web3, account: string): Promise<OrderedMap<string, BigNumber>> => {

    let balances = DEFAULT_BALANCES;

    balances = balances.set("ETH", new BigNumber(await web3.eth.getBalance(account)).div(new BigNumber(10).pow(18)));

    const tokens = List<[string, number, string]>()
        .push(["REN", 18, "0x6f429121a3bd3e6c1c17edbc676eec44cf117faf"])
        .push(["DGX", 9, "0x0798297a11cefef7479e40e67839fee3c025691e"])
        .push(["ABC", 12, "0xc65d2e9c8924d4848935f4f22e3deca78c5217e5"])
        .push(["XYZ", 18, "0x5753addcd942b495b7297cbfc240a24ba7058274"]);

    for (const token of tokens.toArray()) {
        const erc20 = await getERC20Contract(web3, token[2]);
        balances = balances.set(token[0], new BigNumber(await erc20.methods.balanceOf(account).call()).div(new BigNumber(10).pow(token[1])));
    }

    return balances;
};
