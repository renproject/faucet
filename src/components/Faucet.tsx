import * as React from "react";

import { sendTokens } from "../lib/web3";

import { List } from "immutable";

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
}

interface FaucetProps {
    PRIVATE_KEY: string;
    ADDRESS: string;
}

class Faucet extends React.Component<FaucetProps, FaucetState> {

    constructor(props: FaucetProps, context: object) {
        super(props, context);
        this.state = {
            recipient: "",
            sendETH: true,
            sendREN: true,
            sendTOK: true,
            disabled: false,

            messages: List(),
        };
    }

    public async componentDidMount() {
        //
    }

    public render() {
        const { recipient, sendETH, sendREN, sendTOK, messages, disabled } = this.state;

        return (
            <>
                <div className="Faucet">
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
        const { ADDRESS, PRIVATE_KEY } = this.props;
        const { sendETH, sendREN, sendTOK, recipient } = this.state;
        console.log(ADDRESS);
        this.setState({ disabled: true, messages: List() });
        try {
            await sendTokens(ADDRESS, PRIVATE_KEY, sendETH, sendREN, sendTOK, recipient, this.addMessage);
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
