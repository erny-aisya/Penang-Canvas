import React from 'react';
import Home from './pages/Home';
import TouristSpots from './pages/TouristSpots';
import FoodBeverages from './pages/FoodBeverages';
import Hotels from './pages/Hotels';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tourist-spots" element={<TouristSpots />} />
                <Route path="/food-beverages" element={<FoodBeverages />} />
                <Route path="/hotels" element={<Hotels />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
