import React, { Component } from "react";
import {HeaderLinkPanel} from "./HeaderLinkPanel";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Dr. Low Carb</h1>
            <nav>
                <HeaderLinkPanel />
                <span id="delivery-btn"><Link to="/delivery">DELIVERY & RESERVATION</Link></span>
            </nav>
        </header>
    );
};
