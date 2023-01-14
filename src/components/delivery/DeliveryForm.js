import React, { Component } from "react";

import styles from "./DeliveryForm.module.css"

export const DeliveryForm = () => {
    return (
        <div className={styles["delivery-container"]}>
            <div className={styles["delivery-input"]}>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Address" />
                <button>Request free low carb supply!</button>
            </div>
            <div className={styles["delivery-text"]}>
                <h2>Request free stuff right now!</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus nulla aspernatur, quasi, temporibus assumenda
                    accusamus magnam placeat pariatur, nihil eius veritatis
                    adipisci. Sit sint est inventore culpa nostrum quidem
                    sapiente!
                </p>
            </div>
        </div>
    );
};
