import React from 'react';
import './WhatGPT.css';
import Feature from '../../components/feature/Feature';

const WhatGPT = () => {
    return (
        <div className='gpt3-whatgpt3 section-margin id-wgpt3'>

            <div className="gpt3-whatgpt3-feature">
                <Feature title="What is 3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."></Feature>
            </div>

            <div className="gpt3-whatgpt3-heading">
                <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>

            <div className="gpt3-whatgpt3-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."></Feature>
                <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"></Feature>
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"></Feature>
            </div>

        </div >
    );
};

export default WhatGPT;