import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/home/home";

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Home />
            </div>
        );
    }
}

export default App;
