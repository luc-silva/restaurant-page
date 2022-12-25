import React, { Component } from "react";
import DeliveryForm from "./delivery-form";

class Dishes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="delivery-section">
                <div id="section-picture"></div>
                <DeliveryForm />
            </section>
        );
    }
}

export default Dishes;
