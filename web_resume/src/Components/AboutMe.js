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
                        Imran Latif is an aspiring software engineer who has gained experience through professional and personal projects.
                        Imran is driven by curiosity, hard work, and a desire to contribute to meaningful, innovative solutions to complex problems.
                        Imran has developed skills in full stack development, APIs, debugging, and quality assurance. 
                        Imran is committed to continuous learning and is excited to take on new challenges and refine their skills in the fast-paced world of software development.
                    </p>
                </div>

            </div>
       
        </div>
    )
}

export default aboutMe;