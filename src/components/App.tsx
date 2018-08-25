import * as React from "react";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import Faucet from "./Faucet";
import Unlock from "./Unlock";

import "../styles/App.css";

const history = createBrowserHistory();

interface AppProps {

}

interface AppState {
    ADDRESS: string | null;
    PRIVATE_KEY: string | null;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            ADDRESS: null,
            PRIVATE_KEY: null,
        };
    }

    public render() {
        const { ADDRESS, PRIVATE_KEY } = this.state;
        // tslint:disable:jsx-no-lambda
        return (
            <div className="App">
                <Router history={history}>
                    <div className="app">
                        {PRIVATE_KEY === null || ADDRESS === null ?
                            <Unlock unlockCallback={this.unlockCallback} /> :
                            <Faucet ADDRESS={ADDRESS} PRIVATE_KEY={PRIVATE_KEY} />
                        }
                        {/* <Route path="/" exact render={() => <Faucet ADDRESS={ADDRESS} PRIVATE_KEY={PRIVATE_KEY} />} /> */}
                    </div>
                </Router>
            </div>
        );
        // tslint:enable:jsx-no-lambda
    }

    public unlockCallback = (ADDRESS: string, PRIVATE_KEY: string) => {
        this.setState({ ADDRESS, PRIVATE_KEY });
    }
}

export default App;
