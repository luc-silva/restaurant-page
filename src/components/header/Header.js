import React, { Component } from "react";
import {HeaderLinkPanel} from "./HeaderLinkPanel";
import { Link } from "react-router-dom";

import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header>
        <h1 className={styles["logo"]}>Dr. Low Carb</h1>
            <nav>
                <HeaderLinkPanel />
                <span className={styles["delivery-btn"]}><Link to="/delivery">DELIVERY</Link></span>
            </nav>
        </header>
    );
};
