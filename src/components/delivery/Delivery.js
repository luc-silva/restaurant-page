import React, { Component } from "react";

import { DeliveryForm } from "./DeliveryForm";

import styles from './Delivery.module.css'

export const Delivery = () => {
    return (
        <section className={styles["delivery-section"]}>
            <div className={styles["section-picture"]}></div>
            <DeliveryForm />
        </section>
    );
};


