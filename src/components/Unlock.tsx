import * as React from "react";

import { AES, enc, SHA256 } from "crypto-js";
import { privateToAddress } from "ethereumjs-util";
import Loading from "./Loading";

const Lock = require("./Lock.svg");

interface UnlockState {
    password: string;
    error: string | null;
    loading: boolean;
}

interface UnlockProps {
    unlockCallback: (ADDRESS: string, PRIVATE_KEY: string) => void;
}

class Unlock extends React.Component<UnlockProps, UnlockState> {

    constructor(props: UnlockProps, context: object) {
        super(props, context);
        this.state = {
            password: "",
            error: null,
            loading: false,
        };
    }

    public render() {
        const { password, error, loading } = this.state;

        return (
            <>
                <div className="Unlock">
                    <img className="logo" src={Lock} />
                    <form onSubmit={this.handleUnlock}>
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            name="password"
                            onChange={this.handleInput}
                        />
                    </form>
                    {loading ? <div className="error"><Loading /></div> : null}
                    {error !== null ? <div className="error">{error}</div> : null}
                </div>
            </>
        );
    }

    private handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.setState((state) => ({ ...state, error: null, [element.name]: element.value }));
    }

    private handleUnlock = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState({ loading: true });

        setTimeout(() => {
            this.checkPassword()
                .then(() => this.setState({ loading: false }))
                .catch((err) => {
                    console.error(err);
                    this.setState({ loading: false });
                });
        }, 100);
    }

    private checkPassword = async () => {

        const { unlockCallback } = this.props;
        let { password }: any = this.state;

        // This doesn't improve the encryption security, but it makes it a bit
        // less straight forward to brute force compared to using the password
        // itself or the hash of the password.
        for (let i = 0; i < 100000; i++) {
            password = SHA256(password);
        }
        password = password.toString();

        this.setState({ error: null });

        // Private key encrypted using 2ROT13, AES and 2ROT13 again (for that
        // little bit extra security)
        const cipher = "U2FsdGVkX1/PGUV1b36/ApLDIgbIZLQSzslJXbP1Y9A/sNCC/jGUOdRO96BtHnpsUWduwisI6vml66mwcOAMlpcX0JQOwFjaxdMDgpWLPD+MB3J0CwS2Pwn+VZVNm9Ld";

        // Decrypt
        let privateKey: string;
        try {
            privateKey = AES.decrypt(cipher.toString(), password).toString(enc.Utf8);
            if (privateKey === "") {
                throw new Error("Invalid password");
            }
        } catch (err) {
            console.log(err);
            this.setState({ error: "Invalid password" });
            return;
        }

        const address = new Buffer(privateToAddress(new Buffer(privateKey, "hex"))).toString("hex");

        console.log(`Kovan Faucet address: ${address}`);

        unlockCallback(address, privateKey);
    }
}

export const rot13 = (clear: string): string => {
    const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm0987654321";
    const index = (x: string) => input.indexOf(x);
    const translate = (x: string) => index(x) > -1 ? output[index(x)] : x;
    return clear.split("").map(translate).join("");
};

export default Unlock;
