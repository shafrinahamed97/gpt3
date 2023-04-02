import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assests/logo.svg';



const Navbar = () => {
    return (
        <div className="gpt3-navbar">
            <div className="gpt3-navbar-links">
                <div className="gpt3-navbar-links-logo">
                    <img src={logo} alt="logo" srcset="" />
                </div>
                <div className="gpt3-navbar-links-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3?</a></p>
                    <p><a href="#possibility">OPen AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3-navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;