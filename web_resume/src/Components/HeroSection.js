import React from 'react';
import './Button.css'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button.js';

function HeroSection(){
    return(
        <div className='hero-container'>
            <div className="banner-text">
                <h1 className='headline'>Hi, </h1>
                  <h1 className='headline'> I'm Imran </h1> 
                <h3 className='subheadline'>
                    Excited full stack developer in the making! 
                </h3>
                <h3 className='subheadline'>   Welcome to my portfolio site </h3>
                
                <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn--medium'} MyLink={
                    "https://drive.google.com/file/d/1vO3p3PZfHaGAeXfI8Syg4Mcw7mXZJYD-/view?usp=drive_link"
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" style={{ width: '1.2rem', height: '1.2rem', marginRight: '8px', verticalAlign: 'middle' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V18a2.25 2.25 0 002.25 2.25h13.5A2.25
                        2.25 0 0021 18v-1.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5
                        4.5V3" />
                    </svg>
                    Download my Resume!
                </Button>
            </div>
        </div>
    );
}
export default HeroSection;
