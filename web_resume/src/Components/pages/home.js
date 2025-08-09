import '../../App.css'
import HeroSection from '../HeroSection'
import AboutMe from '../AboutMe'
import React from 'react';
import ContactForm from '../ContactUs';
import "../ContactUs.css";
import "./home.css";
import Carousel from '../Carousel';



function Home(){
    return(
        <div className='home'>
            <div className='HeroSection-Home'>
                <HeroSection/>
            </div>
            <div className='AboutMeContactSection'>
                  <AboutMe/>
                
            </div>
            <div className='CarouselSection'>
                <Carousel/>
            </div> 
            <div></div>
        </div>
        
    );
}

export default Home;