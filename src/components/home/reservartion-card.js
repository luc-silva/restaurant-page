import React, { Component } from "react";

class ReservationCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="reservation-card">
                <img src={this.props.option.imgSrc} className="card-image" />
                <div class="card-description">
                    <h3>{this.props.option.title}</h3>
                    <p>{this.props.option.description}</p>
                </div>
            </div>
        );
    }
}

export default ReservationCard;
