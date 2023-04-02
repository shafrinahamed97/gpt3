import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="gpt3-navbar">
            <div className="gpt3-navbar-links">
                <div className="gpt3-navbar-links-logo">
                    <img src={logo} alt="logo" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;