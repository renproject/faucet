import * as React from "react";

import localforage from "localforage";
import { AES, enc, SHA256 } from "crypto-js";

import { Loading } from "./Loading";
import { ReactComponent as Lock } from "./Lock.svg";

interface UnlockProps {
    unlockCallback?: (privateKey: string) => void;
}

// Private key encrypted using AES
const cipher = process.env.REACT_APP_PRIVATE_KEY_CIPHER || "";

const Unlock = ({ unlockCallback }: UnlockProps) => {
    let [password, setPassword] = React.useState("");
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);

    const updatePassword = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        password = element.value
        setPassword(password);
    }

    const handleUnlock = React.useCallback((event?: React.FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }

        setLoading(true);
        setError(null);

        setTimeout(() => {
            checkPassword(password)
                .then(() => setLoading(false))
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }, 100);
    }, [password]);

    const checkPassword = React.useCallback(async (password: string) => {
        const originalPassword = password;

        let passwordHash = password;
        // This doesn't improve the encryption security, but slows down password
        // attempts in the front-end.
        for (let i = 0; i < 100000; i++) {
            passwordHash = SHA256(passwordHash) as unknown as string;
        }
        passwordHash = passwordHash.toString();

        // Decrypt
        let privateKey: string;
        try {
            privateKey = AES.decrypt(cipher.toString(), passwordHash).toString(enc.Utf8);
            if (privateKey === "") {
                throw new Error("Access Denied");
            }
        } catch (err) {
            console.error(err);
            setError("Access Denied");
            return;
        }

        localforage.setItem("faucet-password", originalPassword);

        if (unlockCallback) {
            unlockCallback(privateKey);
        } else {
            return;
        }
    }, [unlockCallback]);

    React.useEffect(() => {
        (async () => {
            const storedPassword = await localforage.getItem<string>("faucet-password");
            if (storedPassword) {
                password = storedPassword;
                setPassword(password);
                setTimeout(handleUnlock, 100);
            }
        })().catch(console.error)
    }, []);

    return (
        <>
            <div className="Unlock">
                <Lock className="logo" />
                <form onSubmit={handleUnlock}>
                    <input
                        className="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={updatePassword}
                    />
                </form>
            </div>
            <div className="Unlock--after">
                {loading ? <div className="error"><Loading /></div> : null}
                {error !== null ? <div className="error">{error}</div> : null}
            </div>
        </>
    );
}

export default Unlock;
