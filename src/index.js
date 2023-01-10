import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { Header } from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
