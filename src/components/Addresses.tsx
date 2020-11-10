import * as React from "react";

import { OrderedMap } from "immutable";
import CryptoAccount from "send-crypto";

import { getAddress } from "../lib/sendCrypto";
import { Tokens } from "../tokens";

const { version } = require("../../package.json");

const TokensForAddressBox = Tokens.filter(
    (tokenDetails) => tokenDetails.showAddress,
);

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
            TokensForAddressBox.forEach((token) => {
                getAddress(cryptoAccount, token)
                    .then((address) => {
                        setAddresses((currentAddresses) =>
                            currentAddresses.set(token.name, address),
                        );
                    })
                    .catch(console.error);
            });
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
                    {TokensForAddressBox.map((token) => (
                        <p>
                            <span>{token.name} address:</span>{" "}
                            <div>{addresses.get(token.name) || ""}</div>
                        </p>
                    )).valueSeq()}
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
