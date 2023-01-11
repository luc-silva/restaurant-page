import React, { Component } from "react";
import { Link } from "react-router-dom";

export const HeaderLinkPanel = () => {
    return (
        <ul>
            <li id="home-btn"><Link to="/">HOME</Link></li>
            <li id="menu-btn"><Link to="/dishes">DISHES</Link></li>
            <li id="about-btn"><Link to="/about-us">ABOUT US</Link></li>
        </ul>
    );
};
