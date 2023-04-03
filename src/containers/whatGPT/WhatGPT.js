import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT.css';

const WhatGPT = () => {
    return (
        <div className='gpt3-whatgpt3 section-margin' id='whpt3'>
            <div className="gpt3-whatgpt3-feature">
                <Feature>

                </Feature>
            </div>
            <div className="gpt3-whatgpt3-header">
                <h1 className='gradient-text'>The posibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3-whatgpt3-container">
                <Feature></Feature>
                <Feature></Feature>
                <Feature></Feature>
            </div>
        </div>
    );
};

export default WhatGPT;