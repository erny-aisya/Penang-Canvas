import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src={process.env.PUBLIC_URL + "/images/penangCanvasLogo.jpg"} // Correct path for public folder
                    alt="Penang Canvas Logo"
                    className="logo"
                />
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tourist-spots">Tourist Spots</Link>
                    </li>
                    <li>
                        <Link to="/food-beverages">Foods & Beverages</Link>
                    </li>
                    <li>
                        <Link to="/#hotels">Hotels</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
