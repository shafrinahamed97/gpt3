import React from 'react';
import './Posibility.css';
import possibility from '../../assests/possibility.png';

const Posibility = () => {
    return (
        <div className='gpt3-possibility section-padding' id='posibility'>
            <div className="gpt3-posibility-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3-possibility-content">
                <h4>Request Early Access to Get Started </h4>
                <h1 className='gradient-text'>The possibilities are beyond your imagination </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Posibility;