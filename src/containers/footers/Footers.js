import React from 'react';
import gpt3logo from '../../assests/logo.svg';
import './Footers.css';

const Footers = () => {
    return (
        <div className="gpt3-footer section-padding">
            <div className="gpt3-footer-heading">
                <h1 className="gradient-text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3-footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3-footer-links">
                <div className="gpt3-footer-links-logo">
                    <img src={gpt3logo} alt="gpt3_logo" />
                    <p>Shafrin Ahamed<br /> All Rights Reserved</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Developed by </h4>
                    <p>Shafrin Ahamed</p>
                    <p>+8801872437708</p>
                    <p>shakibbabu36@gmail.com</p>
                </div>
            </div>

            <div className="gpt3-footer-copyright">
                <p>@2023 GPT-3. Developed By Shafrin Ahamed.</p>
            </div>
        </div>
    );
};

export default Footers;