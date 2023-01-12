import React, { Component } from "react";
import {ReservationCard }from "./ReservationCard";

export const Reservation = () => {
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
        <div id="reservation">
            <h2>Choose a seat and make your reservation: </h2>
            <div id="reservation-card-container">
                {options.map(({imgSrc, title, description}, index) => (
                    <ReservationCard
                        key={index}
                        title={title}
                        imgSrc={imgSrc}
                        description={description}
                    />
                ))}
            </div>
        </div>
    );
};

