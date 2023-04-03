import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './Brands.css';
const Brands = () => {
    return (
        <div className='gpt3-brand section-padding'>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" srcset="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>

        </div>
    );
};

export default Brands;