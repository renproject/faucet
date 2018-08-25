import * as React from "react";

import { Link } from "react-router-dom";


interface HeaderProps {
}

class Header extends React.Component<HeaderProps> {
    public render() {
        return (
            <header className="Header">
                <Link to="/"><h1 className="Header-title">Internal Faucet</h1></Link>
            </header>
        );
    }
}

export default Header;
