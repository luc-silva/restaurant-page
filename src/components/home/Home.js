import React, { Component } from "react";
import {Reservation }from "./Reservation";
import {ReservationForm} from "./ReservationForm";

export const Home = () => {
    return (
        <section id="home">
            <div id="home-background">
                <div id="home-welcome">
                    <h2>Welcome to the Low Carbs Clinic!</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur ipsum fuga quia cum quaerat, exercitationem,
                    unde tempore doloribus nemo provident quibusdam pariatur
                    velit perspiciatis assumenda eum, iusto ut quae totam!
                </div>
            </div>
            <Reservation />
            <ReservationForm />
        </section>
    );
};
