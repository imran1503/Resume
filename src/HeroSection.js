import React from 'react';
import './Button.css'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button.js';

function HeroSection(){
    return(
        <div className='hero-container'>
            {/* if you want a video: <video src='' autoPlay loop muted/> */}
            <div className="banner-text">
                <h1 className='headline'>IMRAN LATIF</h1>
                <h3 className='subheadline'>
                    <strong>Where passion meets proficiency in software engineering.</strong>
                </h3>

                <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn--medium'} MyLink={
                    "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                    }
                >
                    Download my Resume!
                </Button>
            </div>
        </div>
    );
}
export default HeroSection;
