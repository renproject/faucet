import * as React from "react";

import Select from "react-select";
import { List, OrderedMap } from "immutable";
import { Redirect } from "react-router";
import BigNumber from "bignumber.js";
import Web3 from "web3";
import AutosizeInput from "react-input-autosize";
import { symbol } from "prop-types";

import { checkAddress } from "../lib/blacklist";
import { getWeb3, sendTokens, Token, TokenDetails, TOKENS } from "../lib/web3";
import Loading from "./Loading";
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
    // TOKENS: TOKENS | null;

    recipient: string;
    value: string;
    selectedToken: string | null | undefined,

    messages: List<Message>;

    balances: OrderedMap<string, BigNumber>;
    balancesLoading: boolean;

    web3: Web3;

    blacklisted: boolean;

    submitting: boolean;
}

interface SelectOption {
    value: Token,
    label: string,
}

interface FaucetProps {
    PRIVATE_KEY: string;
    ADDRESS: string;
}

export const TokenOptions = new Map<string, { symbol: string; }>()
    .set("ETH", { symbol: "ETH", })
    .set("DAI", { symbol: "DAI", })
    .set("REN", { symbol: "REN", })
    .set("BTC", { symbol: "BTC", })
    ;

class Faucet extends React.Component<FaucetProps, FaucetState> {
    private timeout: NodeJS.Timer | undefined;

    constructor(props: FaucetProps, context: object) {
        super(props, context);
        this.state = {
            // TOKENS: null,

            recipient: "",
            value: "",
            selectedToken: undefined,

            messages: List(),

            balances: OrderedMap<string, BigNumber>(),
            balancesLoading: true,

            web3: getWeb3(props.PRIVATE_KEY),

            blacklisted: false,

            submitting: false,
        };
    }

    public async componentDidMount() {
        const { ADDRESS } = this.props;
        const { web3 } = this.state;

        // const TOKENS = await getTokens();
        // this.setState({ TOKENS });

        const loop = async () => {
            this.setState({ balancesLoading: true });

            for (const token of TOKENS.toArray()) {
                this.setState({ balances: this.state.balances.set(token.code, await token.getBalance(web3, ADDRESS, token)) });
            }

            this.setState({ balancesLoading: false });
            if (this.timeout) { clearTimeout(this.timeout); }
            this.timeout = setTimeout(loop, 30 * 1000);
        };
        loop();
    }

    public componentWillUnmount() {
        if (this.timeout) { clearTimeout(this.timeout); }
    }

    public render() {
        const { recipient, messages, balances, blacklisted, submitting } = this.state;

        if (blacklisted) {
            return <Redirect push to="/blacklisted" />;
        }

        return <>
            <form className="big-text" onSubmit={this.handleFaucet}>
                I want to receive
                    <br />
                <input disabled={submitting} className="dashed input" name="value" onChange={this.handleInput}></input>{" "}
                {/*<input className="dashed input select-token"></input>*/}
                <SelectToken
                    token={this.state.selectedToken}
                    allTokens={TOKENS.map((details, symbol) => ({ label: symbol!, image: details!.image, value: symbol!, balance: balances.get(symbol!, new BigNumber(0)) })).toMap()}
                    onChange={this.handleSelect}
                    disabled={submitting}
                />
                <br />
                at the address
                    <br />
                <AutosizeInput disabled={submitting} className="input dashed-address" value={recipient} name="recipient" onChange={this.handleInput} />
                {/*<span contentEditable={true} className="dashed dashed-address"></span>*/}
                <input disabled={submitting} type="submit" style={{ position: "absolute", left: "-9999px" }} />

                {messages.map((msg: Message | undefined) => {
                    if (!msg) {
                        return <></>;
                    }
                    return <div key={msg.key} className={`message message-${msg.type}`}>
                        {msg.message}
                    </div>;
                })}
            </form>
        </>;
    }

    public addMessage = (msg: Message) => {
        const messages = this.state.messages;
        this.setState({ messages: messages.push(msg) });
    }

    private handleCheck = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.setState((state) => ({ ...state, [element.name]: !this.state[element.name] }));
    }

    private handleSelect = (selectedToken: string): void => {
        this.setState({ selectedToken });
    };

    private handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.setState((state) => ({ ...state, [element.name]: element.value }));
    }

    private handleFaucet = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { ADDRESS } = this.props;
        const { recipient, web3, selectedToken, value, submitting } = this.state;
        if (!selectedToken || recipient === "" || value === "" || submitting) {
            return;
        }
        try {
            checkAddress(recipient);
        } catch (err) {
            this.setState({ blacklisted: true });
            return;
        }
        this.setState({ submitting: true, messages: List() });
        console.log(`Setting submitting to true!`);
        try {
            await sendTokens(ADDRESS, web3, selectedToken as Token, recipient, value, this.addMessage);
        } catch (err) {
            console.error(err);
            this.addMessage({
                key: "general",
                type: MessageType.ERROR,
                message: err.message,
            });
        }
        console.log(`Setting submitting to false!`);
        this.setState({ submitting: false });
    }
}

export default Faucet;
