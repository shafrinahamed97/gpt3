import React from 'react';
import './Header.css';
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';

const Header = () => {
    return (
        <div className='gpt3-header section-padding' id='home'>
            <div className='gpt3-header-content'>
                <h1 className='gradient-text'>Let's Build Something amazing with GPT-3 Open AI</h1>
                <p>Artificial Intelligence is the simulation of the human process by machines (computer system)
                    . These processes include the learning, reasoning, and self-correction. We need Artificial Intelligence (AI)
                    because the work that we need to do is increasing day-to-day. So it's a good idea to automate the routine work.
                </p>
                <div className="gpt-3-header-content-input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>
                <div className='gpt3-header-content-people'>
                    <img src={people} alt="people" srcset="" />
                    <p>1,600 people requested access a visit in last 24 hours</p>

                </div>
                <div className='gpt3-header-image'>
                    <img src={ai} alt="ai" srcset="" />

                </div>
            </div>

        </div>
    );
};

export default Header;