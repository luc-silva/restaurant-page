import React, { Component } from "react";
//import image from '../../img/lunch.jpg'

export const ReservationCard = ({ imgSrc, title, description }) => {
   let image = require("../../img/" + `${imgSrc}`)
    return (
        <div className="reservation-card">
            <img src={image} className="card-image" />
            <div className="card-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
