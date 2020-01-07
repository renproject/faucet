import * as React from "react";

import { HashRouter, Route } from "react-router-dom";

import "../styles/App.scss";
import Faucet from "./Faucet";
import Unlock from "./Unlock";

const App = () => {
    const [privateKey, setPrivateKey] = React.useState<string | null>(null);

    const main = () =>
        privateKey === null ?
            <Unlock unlockCallback={setPrivateKey} /> :
            <>
                <Faucet privateKey={privateKey} />
            </>;

    return (
        <div className="App">
            <HashRouter>
                <div className="app">
                    <Route path="/blacklisted" render={() => <Unlock blacklist={true} />} />
                    <Route path="/" exact render={main} />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
