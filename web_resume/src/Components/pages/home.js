import '../../App.css'
import HeroSection from '../HeroSection'
import AboutMe from '../AboutMe'
import React from 'react';
import ContactForm from '../ContactUs';
import "../ContactUs.css";
import "./home.css";



function Home(){
    return(
        <div className='home'>
            <div className='HeroSection-Home'>
                <HeroSection/>
            </div>
            <div className='AboutMeContactSection'>
                  <AboutMe/>
                  <ContactForm/>
            </div>
            {/* <div className='CarouselSection'>
             
            </div> */}
            <div></div>
        </div>
        
    );
}

export default Home;