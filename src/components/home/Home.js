import React, { Component } from "react";
import { ReservationCard } from "./ReservationCard";

import styles from "./Home.module.css";

export const Home = () => {
    let options = [
        {
            imgSrc: "oneseattable.jpg",
            title: "Alone",
            description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
        },
        {
            imgSrc: "twoseattable.jpg",
            title: "Two seats",
            description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
        },
        {
            imgSrc: "fourseattable.jpg",
            title: "Four seats",
            description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
        },
        {
            imgSrc: "specialtable.jpg",
            title: "Alone Again",
            description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
        },
    ];

    return (
        <section className="homepage">
            <div className={styles["home-background"]}>
                <div className={styles["home-welcome"]}>
                    <h2>Welcome to the Low Carbs Clinic!</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur ipsum fuga quia cum quaerat, exercitationem,
                    unde tempore doloribus nemo provident quibusdam pariatur
                    velit perspiciatis assumenda eum, iusto ut quae totam!
                </div>
            </div>
            <div className={styles["reservation"]}>
                <h2>Choose a seat and make your reservation: </h2>
                <div className={styles["reservation-card-container"]}>
                    {options.map(({ imgSrc, title, description }, index) => (
                        <ReservationCard
                            key={index}
                            title={title}
                            imgSrc={imgSrc}
                            description={description}
                        />
                    ))}
                </div>
            </div>
            <div className={styles["contact-reservation"]}>
                <input type=" email" placeholder="Email" />
                <em> We'll contact you when your reservation is prepared!</em>
            </div>
        </section>
    );
};
