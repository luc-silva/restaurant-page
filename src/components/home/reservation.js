import React, { Component } from "react";
import ReservationCard from "./reservartion-card";

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.options = [
            {
                imgSrc: "../src/img/oneseattable.jpg",
                title: "Alone",
                description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
            },
            {
                imgSrc: "../src/img/twoseattable.jpg",
                title: "Two seats",
                description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
            },
            {
                imgSrc: "../src/img/fourseattable.jpg",
                title: "Four seats",
                description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
            },
            {
                imgSrc: "../src/img/specialtable.jpg",
                title: "Alone Again",
                description: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab voluptas, repellendus,
            dolorum iste aliquam reiciendis dolore amet
            cupiditate magnam inventore accusantium saepe
            animi exercitationem? Molestiae excepturi
            deleniti natus quasi nulla?`,
            },
        ];
    }

    render() {
        return (
            <div id="reservation">
                <h2>Choose a seat and make your reservation: </h2>
                {this.options.map((item, index) => {
                    <ReservationCard key={index} option={item} />;
                })}
            </div>
        );
    }
}

export default Reservation;
