import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <h1>Dr. Low Carb</h1>
                <nav>
                    {/* inserir Component */}
                    <ul>
                        <li id="home-btn"> HOME </li>
                        <li id="menu-btn"> DISHES </li>
                        <li id="about-btn"> ABOUT US </li>
                    </ul>
                    <span id="delivery-btn">DELIVERY & RESERVATION</span>
                </nav>
            </header>
        );
    }
}

export default Header;
