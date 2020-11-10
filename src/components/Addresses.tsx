import * as React from "react";

import { OrderedMap } from "immutable";
import CryptoAccount from "send-crypto";

import { addressSectionTokens } from "../lib/sendCrypto";

const { version } = require("../../package.json");

export const Addresses = ({
    cryptoAccount,
}: {
    cryptoAccount: CryptoAccount;
}) => {
    const [addresses, setAddresses] = React.useState(
        OrderedMap<string, string>(),
    );

    React.useEffect(() => {
        (async () => {
            for (const token of addressSectionTokens) {
                cryptoAccount
                    .address(token)
                    .then((address) => {
                        setAddresses((currentAddresses) =>
                            currentAddresses.set(token, address),
                        );
                    })
                    .catch(console.error);
            }
        })().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [showingAddresses, setShowingAddresses] = React.useState(false);

    const showAddresses = React.useCallback(() => {
        setShowingAddresses(!showingAddresses);
    }, [showingAddresses]);

    return (
        <div className="show-addresses">
            {showingAddresses ? (
                <span
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                >
                    <p>Version {version}</p>
                    {addressSectionTokens.map((token) => (
                        <p>
                            <span>{token} address:</span>{" "}
                            <div>{addresses.get(token) || ""}</div>
                        </p>
                    ))}
                </span>
            ) : (
                <span
                    onClick={showAddresses}
                    role="button"
                    className="show-addresses-button"
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                    }}
                >
                    Show addresses
                </span>
            )}
        </div>
    );
};
