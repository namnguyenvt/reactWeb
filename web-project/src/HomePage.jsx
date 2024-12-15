import './App.css';
import React, { useState } from 'react';

const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="navBar">
            <div className="logo">Cotti Coffee</div>
            <button className="menuToggle" onClick={toggleMenu}>&#9776;</button>
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}

export default HomePage;