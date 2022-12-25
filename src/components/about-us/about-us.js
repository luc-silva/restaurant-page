import React, { Component } from "react";
import AboutUsContainer from "./about-us-container";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="about-us">
                <AboutUsContainer />
                <div id="about-us-img"></div>
            </section>
        );
    }
}

export default AboutUs;
