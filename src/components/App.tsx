import * as React from "react";

import "../styles/App.scss";
import Faucet from "./Faucet";
import Unlock from "./Unlock";

const App = () => {
    const [privateKey, setPrivateKey] = React.useState<string | null>(null);

    return (
        <div className="app">
            {privateKey === null ? <Unlock unlockCallback={setPrivateKey} /> : <Faucet privateKey={privateKey} />}
        </div>
    );
};

export default App;
