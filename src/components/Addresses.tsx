import * as React from "react";

import CryptoAccount from "send-crypto";

export const Addresses = ({ cryptoAccount }: { cryptoAccount: CryptoAccount }) => {
    const [ETHAddress, setETHAddress] = React.useState<string | null>(null);
    const [BTCAddress, setBTCAddress] = React.useState<string | null>(null);
    const [ZECAddress, setZECAddress] = React.useState<string | null>(null);
    const [BCHAddress, setBCHAddress] = React.useState<string | null>(null);

    React.useEffect(() => {
        (async () => {
            cryptoAccount.address("ETH").then(setETHAddress);
            cryptoAccount.address("BTC").then(setBTCAddress);
            cryptoAccount.address("ZEC").then(setZECAddress);
            cryptoAccount.address("BCH").then(setBCHAddress);
        })().catch(console.error);
    }, []);

    const [showingAddresses, setShowingAddresses] = React.useState(false);

    const showAddresses = React.useCallback(() => {
        setShowingAddresses(!showingAddresses);
    }, [showingAddresses]);

    return <div className="show-addresses" >
        {showingAddresses ?
            <span style={{ position: "absolute", top: "20px", right: "20px" }}>
                ETH address: {ETHAddress || ""}<br />
                BTC address: {BTCAddress || ""}<br />
                ZEC address: {ZECAddress || ""}<br />
                BCH address: {BCHAddress || ""}
            </span> :
            <span onClick={showAddresses} role="button" className="show-addresses-button" style={{ cursor: "pointer", position: "absolute", top: "20px", right: "20px" }}>
                Show addresses
            </span>
        }
    </div>;
}