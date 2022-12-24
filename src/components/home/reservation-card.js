import React, { Component } from "react";

class ReservationCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.option)
        return (
            <div className="reservation-card">
                <img src={this.props.imgSrc} className="card-image" />
                <div className="card-description">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ReservationCard;
