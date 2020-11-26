import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { _catch_ } from "./components/ErrorBoundary";

ReactDOM.render(
    _catch_(<App />),
    document.getElementById("root") as HTMLElement,
);
