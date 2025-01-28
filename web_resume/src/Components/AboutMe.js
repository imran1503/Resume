import React from "react";
import '../Components/AboutMe.css'


function aboutMe(){
    return(
        <div className="aboutMe">
            <div>
                <hr class="separator" />
            </div>
            <div className="flex-container">
                
                <div ></div>
                    <img className="profileImage" src="/Resume/images/IL-Profile.png" alt="Profile Photo" />
            
                <div className="AboutMeText">
                    <p>
                        Imran Latif is an aspiring software engineer who has gained experience through one professional role and a few personal projects.
                        Imran is driven by curiosity, hard work, and a desire to contribute to meaningful, innovative solutions to complex problems.
                        Contact me below if you would like to discuss future opportunities! 
                    </p>
                </div>

            </div>
       
        </div>
    )
}

export default aboutMe;