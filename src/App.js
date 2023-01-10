import React, { Component } from "react";

import { Home } from "./components/home/Home";
import { Delivery } from "./components/delivery/Delivery";
import { AboutUs } from "./components/about-us/AboutUs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";

const App = () => {
    return (
        <Router id="app">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/dishes" element={<Dishes/>}/> */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/delivery" element={<Delivery />} />
            </Routes>
        </Router>
    );
};

export default App;
