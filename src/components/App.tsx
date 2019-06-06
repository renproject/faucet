import * as React from "react";

import axios from "axios";
import { HashRouter, Route } from "react-router-dom";

import "../styles/App.css";
import { ReactComponent as Home } from "../styles/home.svg";
import Faucet from "./Faucet";
import Unlock from "./Unlock";

const commitHash = require("../commitHash.json");

interface AppProps {

}

interface AppState {
    ADDRESS: string | null;
    PRIVATE_KEY: string | null;
    outOfDate: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            ADDRESS: null,
            PRIVATE_KEY: null,
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
        const { ADDRESS, PRIVATE_KEY, outOfDate } = this.state;

        const main = () =>
            PRIVATE_KEY === null || ADDRESS === null ?
                <Unlock blacklist={false} unlockCallback={this.unlockCallback} /> :
                <>
                    {outOfDate ? <OutOfDate /> : null}
                    <Faucet ADDRESS={ADDRESS} PRIVATE_KEY={PRIVATE_KEY} />
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

    public unlockCallback = (ADDRESS: string, PRIVATE_KEY: string) => {
        this.setState({ ADDRESS, PRIVATE_KEY });
    }
}

class OutOfDate extends React.Component {
    public render = () => <div className="outOfDate">This page is out of date. Force refresh the window to update the page (Ctrl-Shift-R or Cmd-Shift-R).</div>;
}

export default App;
