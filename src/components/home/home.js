import React, { Component } from "react";
import Greetings from "./greetings";
import Reservation from "./reservation";
import ReservationForm from "./reservation-form";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="home">
                <Greetings />
                <Reservation />
                <ReservationForm />
            </section>
        );
    }
}

export default Home;
