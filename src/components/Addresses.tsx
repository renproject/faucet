import * as React from "react";

import CryptoAccount from "send-crypto";

const { version } = require("../../package.json");

export const Addresses = ({ cryptoAccount }: { cryptoAccount: CryptoAccount }) => {
    const [ETHAddress, setETHAddress] = React.useState<string | null>(null);
    const [BTCAddress, setBTCAddress] = React.useState<string | null>(null);
    const [ZECAddress, setZECAddress] = React.useState<string | null>(null);
    const [BCHAddress, setBCHAddress] = React.useState<string | null>(null);

    React.useEffect(() => {
        (async () => {
            cryptoAccount.address("ETH").then(setETHAddress).catch(console.error);
            cryptoAccount.address("BTC").then(setBTCAddress).catch(console.error);
            cryptoAccount.address("ZEC").then(setZECAddress).catch(console.error);
            cryptoAccount.address("BCH").then(setBCHAddress).catch(console.error);
        })().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [showingAddresses, setShowingAddresses] = React.useState(false);

    const showAddresses = React.useCallback(() => {
        setShowingAddresses(!showingAddresses);
    }, [showingAddresses]);

    return <div className="show-addresses" >
        {showingAddresses ?
            <span style={{ position: "absolute", top: "20px", right: "20px" }}>
                <p>Version {version}</p>
                <p><span>ETH address:</span> <div>{ETHAddress || ""}</div></p>
                <p><span>BTC address:</span> <div>{BTCAddress || ""}</div></p>
                <p><span>ZEC address:</span> <div>{ZECAddress || ""}</div></p>
                <p><span>BCH address:</span> <div>{BCHAddress || ""}</div></p>
            </span> :
            <span onClick={showAddresses} role="button" className="show-addresses-button" style={{ cursor: "pointer", position: "absolute", top: "20px", right: "20px" }}>
                Show addresses
            </span>
        }
    </div>;
};
