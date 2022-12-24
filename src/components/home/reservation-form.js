import React, { Component } from "react";

class ReservationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact-reservation">
                <input type=" email" placeholder="Email" />
                <em> We'll contact you when your reservation is prepared!</em>
            </div>
        );
    }
}

export default ReservationForm;
