import React, { Component } from "react";

export const ReservationCard = ({imgSrc, title, description}) => {
    return (
        <div className="reservation-card">
            <img src={imgSrc} className="card-image" />
            <div className="card-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

