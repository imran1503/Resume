import React from 'react';
import './Button.css'
import './ContactMeHeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button.js';

function ContactMeHeroSection(){
    return(
        <div className='ContactMe-hero-container'>
            {/* if you want a video: <video src='' autoPlay loop muted/> */}
            <div className="banner-text">

                <h3 className='subheadline'>
                    <strong>Contact Me</strong>
                </h3>
                <p>Need to message me? Feel free to fill out the form below or message me over on linkedin.</p>

            </div>
        </div>
    );
}
export default ContactMeHeroSection;
