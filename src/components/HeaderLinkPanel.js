import React, { Component } from "react";

class HeaderLinkPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li id="home-btn"> HOME </li>
                <li id="menu-btn"> DISHES </li>
                <li id="about-btn"> ABOUT US </li>
            </ul>
        );
    }
}

export default HeaderLinkPanel;
