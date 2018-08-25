import * as React from "react";

import { List, OrderedMap } from "immutable";

import BigNumber from "bignumber.js";
import Web3 from "web3";
import { DEFAULT_BALANCES, getWeb3, IMAGES, sendTokens, updateBalances } from "../lib/web3";
import Loading from "./Loading";

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

    sendETH: boolean;
    sendREN: boolean;
    sendTOK: boolean;
    disabled: boolean;

    messages: List<Message>;

    balances: OrderedMap<string, BigNumber>;
    balancesLoading: boolean;

    web3: Web3;
}

interface FaucetProps {
    PRIVATE_KEY: string;
    ADDRESS: string;
}

class Faucet extends React.Component<FaucetProps, FaucetState> {
    private timeout: NodeJS.Timer;

    constructor(props: FaucetProps, context: object) {
        super(props, context);
        this.state = {
            recipient: "",
            sendETH: true,
            sendREN: true,
            sendTOK: true,
            disabled: false,

            messages: List(),

            balances: DEFAULT_BALANCES,
            balancesLoading: true,

            web3: getWeb3(props.PRIVATE_KEY),
        };
    }

    public async componentDidMount() {
        const { ADDRESS } = this.props;
        const { web3 } = this.state;
        const loop = async () => {
            this.setState({ balancesLoading: true });
            this.setState({ balances: await updateBalances(web3, ADDRESS) });
            this.setState({ balancesLoading: false });
            clearTimeout(this.timeout);
            this.timeout = setTimeout(loop, 30 * 1000);
        };
        loop();
    }

    public componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    public render() {
        const { recipient, sendETH, sendREN, sendTOK, messages, disabled, balances, balancesLoading } = this.state;

        return (
            <>
                <div className="Faucet">
                    <div className="Faucet-balances">
                        {balancesLoading ? <div className="Faucet-balances-loading"><Loading /></div> : null}
                        {balances.map((value: BigNumber, key: string) => {
                            return <p key={key}><img className="Faucet-balances-icon" src={IMAGES.get(key)} />{value.toFixed()} {key}</p>;
                        }).toArray()}
                    </div>
                    <div className="Faucet-options">
                        <p><input type="checkbox" className="checkbox" name="sendETH" checked={sendETH} onChange={this.handleCheck} />Transfer ETH</p>
                        <p><input type="checkbox" className="checkbox" name="sendREN" checked={sendREN} onChange={this.handleCheck} />Transfer REN</p>
                        <p><input type="checkbox" className="checkbox" name="sendTOK" checked={sendTOK} onChange={this.handleCheck} />Transfer Tokens</p>
                    </div>
                    <form className="Faucet-form" onSubmit={this.handleFaucet}>
                        <input
                            placeholder="Recipient address"
                            type="text"
                            value={recipient}
                            name="recipient"
                            onChange={this.handleInput}
                            disabled={disabled || !(sendETH || sendREN || sendTOK)}
                        />
                    </form>
                    {messages.map((msg: Message) => {
                        return <div key={msg.key} className={`message message-${msg.type}`}>
                            <p>{msg.message}</p>
                        </div>;
                    })}
                </div>
            </>
        );
    }

    public addMessage = (msg: Message) => {
        const messages = this.state.messages;
        this.setState({ disabled: false, messages: messages.push(msg) });
    }

    private handleCheck = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.setState((state) => ({ ...state, [element.name]: !this.state[element.name] }));
    }

    private handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.setState((state) => ({ ...state, [element.name]: element.value }));
    }

    private handleFaucet = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { ADDRESS } = this.props;
        const { sendETH, sendREN, sendTOK, recipient, web3 } = this.state;
        console.log(ADDRESS);
        this.setState({ disabled: true, messages: List() });
        try {
            await sendTokens(ADDRESS, web3, sendETH, sendREN, sendTOK, recipient, this.addMessage);
        } catch (err) {
            console.error(err);
            this.addMessage({
                key: "general",
                type: MessageType.ERROR,
                message: err.message,
            });
        }
    }
}

export default Faucet;
