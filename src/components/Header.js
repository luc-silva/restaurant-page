import React, { Component } from "react";
import HeaderLinkPanel from "./HeaderLinkPanel";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <h1>Dr. Low Carb</h1>
                <nav>
                    <HeaderLinkPanel />
                    <span id="delivery-btn">DELIVERY & RESERVATION</span>
                </nav>
            </header>
        );
    }
}

export default Header;
