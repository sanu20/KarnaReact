import React from 'react';
import {a}from 'react-router-dom';
import './style.css';


const Header = (props) => {
    return (
        <div>
            <header className="header">
                <nav className="headerMenu">
                    <a href="/">Home</a>
                    <a href="frontend">FrontEnd</a>
                    <a href="about-us">AboutUs</a>
                    <a href="contact-us">ContactUs</a>
                </nav>
                <div>
                    social media
                </div>
            </header>
        </div>
    )
}

export default Header;
