import * as React from "react";

import axios from "axios";
import { HashRouter, Route } from "react-router-dom";
import { privateToAddress } from "ethereumjs-util";

import { privateToBTCAddress, privateToZECAddress } from "../lib/btc";
import "../styles/App.scss";
import { ReactComponent as Home } from "../styles/home.svg";
import Faucet from "./Faucet";
import Unlock from "./Unlock";

const commitHash = require("../commitHash.json");

interface AppProps {

}

interface AppState {
    ethAddress: string | null;
    privateKey: string | null;
    outOfDate: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            ethAddress: null,
            privateKey: null,
            outOfDate: false,
        };
    }

    public async componentDidMount() {
        let using;
        let latest;
        try {
            using = commitHash.HASH;
            latest = (await axios.get(`./commitHash.json?v=${Math.random().toString(36).substring(7)}`)).data.HASH;
            console.log(`latest hash: ${latest}, using hash: ${using}`);
            if (using !== latest) {
                this.setState({ outOfDate: true });
            }
        } catch (err) {
            console.log(`Using commit hash ${using} but latest commit hash is ${latest}`);
            console.error(err);
        }
    }

    public render() {
        const { ethAddress: ethAddress, privateKey, outOfDate } = this.state;

        const main = () =>
            privateKey === null || ethAddress === null ?
                <Unlock unlockCallback={this.unlockCallback} /> :
                <>
                    {outOfDate ? <OutOfDate /> : null}
                    <Faucet ethAddress={ethAddress} privateKey={privateKey} />
                </>;

        // tslint:disable:jsx-no-lambda
        return (
            <div className="App">
                <HashRouter>
                    <div className="app">
                        <a style={{ position: "absolute", top: "20px", left: "20px" }} className="home-link" href="https://republicprotocol.github.io/tool-index/">
                            <Home style={{ height: "30px", width: "30px" }} />
                        </a>
                        <Route path="/blacklisted" render={() => <Unlock blacklist={true} />} />
                        <Route path="/" exact render={main} />
                    </div>
                </HashRouter>
            </div>
        );
        // tslint:enable:jsx-no-lambda
    }

    public unlockCallback = (privateKey: string) => {
        const ethAddress = privateToAddress(new Buffer(privateKey, "hex")).toString("hex");
        const { address: btcAddress } = privateToBTCAddress(privateKey);
        const { address: zecAddress } = privateToZECAddress(privateKey);
        console.log(`Faucet's Ethereum address: 0x${ethAddress}`);
        console.log(`Faucet's Bitcoin address: ${btcAddress}`);
        console.log(`Faucet's Zcash address: ${zecAddress}`);

        this.setState({ ethAddress, privateKey });
    }
}

class OutOfDate extends React.Component {
    public render = () => <div className="outOfDate">This page is out of date. Force refresh the window to update the page (Ctrl-Shift-R or Cmd-Shift-R).</div>;
}

export default App;
