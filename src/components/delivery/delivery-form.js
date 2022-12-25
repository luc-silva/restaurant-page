import React, { Component } from "react";

class DeliveryForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="delivery-container">
                <div id="delivery-input">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Address" />
                    <button>Request free low carb suply!</button>
                </div>
                <div id="delivery-text">
                    <h2>Request free stuff right now!</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Necessitatibus nulla aspernatur, quasi, temporibus
                        assumenda accusamus magnam placeat pariatur, nihil eius
                        veritatis adipisci. Sit sint est inventore culpa nostrum
                        quidem sapiente!
                    </p>
                </div>
            </div>
        );
    }
}

export default DeliveryForm;
