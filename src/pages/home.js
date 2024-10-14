import '../../App.css'
import HeroSection from '../HeroSection'
import AboutMe from '../AboutMe'
import React from 'react';
import ContactForm from '../ContactUs';
import "../ContactUs.css";
import ContactMeHeroSection from '../ContactMeHeroSection';
function Home(){

    return(
        <div>

            <div className='HeroSection-Home'>

                <HeroSection/>
                <AboutMe/>
            </div>
            <div className='ContactFormSection'>
                <ContactForm/>
            </div>
        </div>

    );


}

export default Home;