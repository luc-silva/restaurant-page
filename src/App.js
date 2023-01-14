import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Dishes } from "./components/dishes/Dishes";
import { AboutUs } from "./components/about-us/AboutUs";
import { Delivery } from "./components/delivery/Delivery";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./components/notfound/NotFound";

const App = () => {
    return (
        <Router id="app">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
