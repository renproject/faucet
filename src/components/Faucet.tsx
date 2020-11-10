import * as React from "react";

import BigNumber from "bignumber.js";
import { List, OrderedMap } from "immutable";
import AutosizeInput from "react-input-autosize";
import CryptoAccount from "send-crypto";

import { balanceOf, extractError, sendTokens } from "../lib/sendCrypto";
import { Tokens } from "../tokens";
import { Addresses } from "./Addresses";
import { SelectToken } from "./selectToken/SelectToken";

export enum MessageType {
    ERROR = "error",
    INFO = "info",
}

export interface Message {
    key: string;
    type: MessageType;
    message: JSX.Element;
}

interface FaucetState {
    recipient: string;
    params: string;
    value: string;
    selectedToken: string | null | undefined;

    messages: List<Message>;

    balances: OrderedMap<string, BigNumber>;
    balancesLoading: boolean;

    cryptoAccount: CryptoAccount;

    submitting: boolean;
    showingAddresses: boolean;
}

interface FaucetProps {
    privateKey: string;
}

class Faucet extends React.Component<FaucetProps, FaucetState> {
    private timeout: NodeJS.Timer | undefined;

    constructor(props: FaucetProps, context: object) {
        super(props, context);

        this.state = {
            recipient: "",
            params: "",
            value: "",
            selectedToken: undefined,

            messages: List(),

            balances: OrderedMap<string, BigNumber>(),
            balancesLoading: true,

            cryptoAccount: new CryptoAccount(props.privateKey, {
                network: "kovan",
                apiAddress: process.env.REACT_APP_FILECOIN_TESTNET_URL,
                token: process.env.REACT_APP_FILECOIN_TESTNET_TOKEN,
            }),

            submitting: false,
            showingAddresses: false,
        };
    }

    public async componentDidMount() {
        const { cryptoAccount } = this.state;

        const loop = async () => {
            this.setState({ balancesLoading: true });

            await Promise.all(
                Tokens.map(async (tokenDetails) => {
                    try {
                        const balance = await balanceOf(
                            cryptoAccount,
                            tokenDetails,
                        );
                        this.setState((state) => ({
                            ...state,
                            balances: state.balances.set(
                                tokenDetails.name,
                                balance,
                            ),
                        }));
                    } catch (error) {
                        console.error(error);
                    }
                }),
            );

            this.setState({ balancesLoading: false });
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(loop, 30 * 1000);
        };
        loop().catch(console.error);
    }

    public componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    public render() {
        const {
            recipient,
            params,
            messages,
            balances,
            submitting,
            cryptoAccount,
        } = this.state;

        return (
            <>
                <Addresses cryptoAccount={cryptoAccount} />
                <form className="big-text" onSubmit={this.handleFaucet}>
                    I want to receive
                    <br />
                    <input
                        disabled={submitting}
                        className="dashed input"
                        name="value"
                        onChange={this.handleInput}
                    ></input>{" "}
                    {/*<input className="dashed input select-token"></input>*/}
                    <SelectToken
                        token={this.state.selectedToken}
                        allTokens={Tokens.map((tokenDetails, name) => ({
                            label: tokenDetails.name,
                            image:
                                tokenDetails.icon ||
                                (() => <img role="presentation" alt="" />),
                            value: name,
                            disabled: tokenDetails.disabled,
                            balance: balances.get(
                                tokenDetails.name,
                                new BigNumber(0),
                            ),
                        }))}
                        onChange={this.handleSelect}
                        disabled={submitting}
                    />
                    <br />
                    at the address
                    <br />
                    <AutosizeInput
                        disabled={submitting}
                        className="input dashed-address"
                        value={recipient}
                        name="recipient"
                        onChange={this.handleInput}
                    />
                    {this.state.selectedToken === "FIL" ? (
                        <>
                            <br />
                            with params
                            <br />
                            <AutosizeInput
                                disabled={submitting}
                                className="input dashed-address"
                                value={params}
                                name="params"
                                onChange={this.handleInput}
                                placeholder="base64 (optional)"
                            />
                        </>
                    ) : null}
                    {/*<span contentEditable={true} className="dashed dashed-address"></span>*/}
                    <input
                        disabled={submitting}
                        type="submit"
                        style={{ position: "absolute", left: "-9999px" }}
                    />
                    {messages.map((msg: Message | undefined) => {
                        if (!msg) {
                            return <></>;
                        }
                        return (
                            <div
                                key={msg.key}
                                className={`message message-${msg.type}`}
                            >
                                {msg.message}
                            </div>
                        );
                    })}
                </form>
            </>
        );
    }

    public showAddresses = () => {
        this.setState({ showingAddresses: true });
    };

    public addMessage = (msg: Message) => {
        const messages = this.state.messages;
        this.setState({ messages: messages.push(msg) });
    };

    private readonly handleSelect = (selectedToken: string): void => {
        // Reset messages.
        if (selectedToken !== this.state.selectedToken) {
            this.setState({ messages: List() });
        }
        this.setState({ selectedToken });
    };

    private readonly handleInput = (
        event: React.FormEvent<HTMLInputElement>,
    ): void => {
        const element = event.target as HTMLInputElement;
        this.setState((state) => ({ ...state, [element.name]: element.value }));
    };

    private readonly handleFaucet = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        const {
            recipient,
            params,
            cryptoAccount,
            selectedToken,
            value,
            submitting,
        } = this.state;
        if (!selectedToken || recipient === "" || value === "" || submitting) {
            return;
        }

        this.setState({ submitting: true, messages: List() });
        const tokenDetails = Tokens.get(selectedToken);
        if (!tokenDetails) {
            throw new Error(
                `Unable to find token details for ${selectedToken}`,
            );
        }
        try {
            await sendTokens(
                cryptoAccount,
                tokenDetails,
                recipient,
                value,
                params,
                this.addMessage,
            );
        } catch (err) {
            console.error(err);
            this.addMessage({
                key: "general",
                type: MessageType.ERROR,
                message: <>{extractError(err)}</>,
            });
        }
        this.setState({ submitting: false });
    };
}

export default Faucet;
