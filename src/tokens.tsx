import { OrderedMap } from "immutable";
import React from "react";

import { ReactComponent as iconBCH } from "./img/bch.svg";
import { ReactComponent as iconBTC } from "./img/btc.svg";
import { ReactComponent as iconDAI } from "./img/dai.svg";
import { ReactComponent as iconETH } from "./img/eth.svg";
import iconFIL from "./img/fil.png";
import { ReactComponent as iconREN } from "./img/ren.svg";
import { ReactComponent as iconRenBCH } from "./img/renBCH.svg";
import { ReactComponent as iconRenBTC } from "./img/renBTC.svg";
import { ReactComponent as iconRenZEC } from "./img/renZEC.svg";
import { ReactComponent as iconZEC } from "./img/zec.svg";
import { ReactComponent as iconLUNA } from "./img/luna.svg";

export interface TokenDetails {
    // The name of the asset/token.
    name: string;
    // An explorer link for a transaction.
    explorer: (txHash: string) => string;
    // The parameter passed to `send-crypto` to manage the asset.
    // tslint:disable-next-line: no-any
    sendCrypto?: any;
    // A square icon.
    icon?: React.FC;
    // Whether to show the address in the faucet's top-right corner.
    showAddress?: boolean;
    // Reduce the token's opacity in the drop-down.
    disabled?: boolean;
}

const etherscan = (txHash: string) => `https://kovan.etherscan.io/tx/${txHash}`;
const ERC20 = (address: string) => ({
    type: "ERC20",
    address,
});

export const Tokens = OrderedMap<string, TokenDetails>()
    .set("BTC", {
        name: "BTC",
        explorer: (txHash) => `https://chain.so/tx/BTCTEST/${txHash}`,
        icon: iconBTC,
        showAddress: true,
    })
    .set("ZEC", {
        name: "ZEC",
        explorer: (txHash) => `https://chain.so/tx/ZECTEST/${txHash}`,
        icon: iconZEC,
        showAddress: true,
    })
    .set("FIL", {
        name: "FIL",
        explorer: (txHash) => `https://filfox.info/en/message/${txHash}`,
        icon: (props) => (
            <img {...props} role="presentation" alt="" src={iconFIL} />
        ),
        showAddress: true,
    })
    .set("LUNA", {
        name: "LUNA",
        explorer: (txHash) =>
            `https://finder.terra.money/tequila-0004/tx/${txHash}`,
        icon: iconLUNA,
        showAddress: true,
    })
    .set("ETH", {
        name: "ETH",
        explorer: etherscan,
        icon: iconETH,
        showAddress: true,
    })
    .set("REN", {
        name: "REN",
        sendCrypto: ERC20("0x2CD647668494c1B15743AB283A0f980d90a87394"),
        explorer: etherscan,
        icon: iconREN,
    })
    .set("DAI", {
        name: "DAI",
        sendCrypto: ERC20("0xC4375B7De8af5a38a93548eb8453a498222C4fF2"),
        explorer: etherscan,
        icon: iconDAI,
    })
    .set("testBTC", {
        name: "testBTC",
        sendCrypto: ERC20("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"),
        explorer: etherscan,
        icon: iconRenBTC,
    })
    .set("testBCH", {
        name: "testBCH",
        sendCrypto: ERC20("0x618dC53e856b1A601119F2Fed5F1E873bCf7Bd6e"),
        explorer: etherscan,
        icon: iconRenBCH,
    })
    .set("testZEC", {
        name: "testZEC",
        sendCrypto: ERC20("0x42805DA220DF1f8a33C16B0DF9CE876B9d416610"),
        explorer: etherscan,
        icon: iconRenZEC,
    })
    // Disabled ////////////////////////////////////////////////////////////////
    .set("BCH", {
        name: "BCH",
        explorer: (txHash) => `https://explorer.bitcoin.com/tbch/tx/${txHash}`,
        icon: iconBCH,
        showAddress: true,
        disabled: true,
    });
