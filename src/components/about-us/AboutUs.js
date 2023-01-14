import React, { Component } from "react";
import { LocationItem } from "./LocationItem";

import styles from "./AboutUs.module.css";

export const AboutUs = () => {
    const unitedStatesLocations = [
        {
            city: "Binghamton",
            state: "New York",
            streetAddress: "4746, Cliffside Drive",
        },
        {
            city: "Englewood",
            state: "Ohio",
            streetAddress: "2042, Crim Lane",
        },
        {
            city: "Sacramento",
            state: "California",
            streetAddress: "1365, Woodland Terrace",
        },
    ];

    const europeLocations = [
        {
            city: "Matterdale, Eden",
            state: "England, United Kingdom",
            streetAddress: "Mell Fell House, A592",
        },
        {
            city: "Knotts, Pendle",
            state: "England, United Kingdom",
            streetAddress: "Higher Knotts Farm, Knotts Lane",
        },
    ];

    const southAmericaLocations = [
        {
            city: "Foz do Iguaçu",
            state: "Paraná, Brazil",
            streetAddress: "Bloco 15 - Região Norte, Vila C",
        },
    ];

    return (
        <section className={styles["about-us"]}>
            <div className={styles["about-us-img"]}>
                <div className={styles["about-us-intro"]}>
                    <h3>WHO WE ARE</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur
                    </p>
                </div>
            </div>
            <div className={styles["location-container"]}>
                <div className={styles["location-container-title"]}>
                    <h3>HOW TO FIND US</h3>
                    You can find us almost everywhere!
                </div>
                <div className={styles["location"]}>
                    <div className={styles["location-region"]}>
                        <h4>United States</h4>
                        <ul>
                            {unitedStatesLocations.map(
                                ({ city, state, streetAddress }, key) => {
                                    return (
                                        <LocationItem
                                            city={city}
                                            state={state}
                                            streetAddress={streetAddress}
                                            key={key}
                                        />
                                    );
                                }
                            )}
                        </ul>
                    </div>
                    <div className={styles["location-region"]}>
                        <h4>Europe</h4>
                        <ul>
                            {europeLocations.map(
                                ({ city, state, streetAddress }, key) => {
                                    return (
                                        <LocationItem
                                            city={city}
                                            state={state}
                                            streetAddress={streetAddress}
                                            key={key}
                                        />
                                    );
                                }
                            )}
                        </ul>
                    </div>
                    <div className={styles["location-region"]}>
                        <h4>South America</h4>
                        <ul>
                            {southAmericaLocations.map(
                                ({ city, state, streetAddress }, key) => {
                                    return (
                                        <LocationItem
                                            city={city}
                                            state={state}
                                            streetAddress={streetAddress}
                                            key={key}
                                        />
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
