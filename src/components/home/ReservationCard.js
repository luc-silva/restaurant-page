import React, { Component } from "react";

import styles from "./ReservationCard.module.css"

export const ReservationCard = ({ imgSrc, title, description }) => {
   let image = require("../../img/" + `${imgSrc}`)
    return (
        <div className={styles["reservation-card"]}>
            <img src={image} className={styles["card-image"]} />
            <div className={styles["card-description"]}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
 