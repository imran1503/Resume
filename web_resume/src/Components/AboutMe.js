import React from "react";
import '../Components/AboutMe.css'

function aboutMe(){
    return(
        <div className="aboutMe">
            <div>
                <hr class="separator" />
            </div>
            <div className="titleRow" >
                <h1>About Me</h1>
            </div>

            <div className="descRow" class="flexbox-container_DescRow">
                <p>
                    <strong>
                    Hello there! I am Imran Latif.
                    Within the scope of programming, I enjoy working with back end development, quality assurance as well as and I work with create efficent databases and algorithms.
                    I'm interested in all junior software engineering roles. I have been using Open Source technologies for a while network.
                    As I transition into the professional sphere, I bring a potent combination of technical prowess, resilience, and a proactive approach to learning, making me an ideal candidate for roles that demand versatility and innovation.<br/>
                    <br/>During my time at Carleton University, where I completed my degree in Software Engineering amid the challenges posed by the COVID era, I honed a diverse set of skills: <br/>
                    </strong>
                    &emsp;❖ Academic Excellence: Showcased strong theoretical foundation through successful completion of the Software Engineering degree.<br/>
                    &emsp;❖ Programming Skills: Proficent in Java and Python, with a solid understanding of algorithmic complexities and modern software design principles.<br/>
                    &emsp;❖ Adaptability: Thrived in the challenges of remote learning during COVID-19, honing adaptability and problem-solving skills.<br/>
                    &emsp;❖ Open-Source Contributions: Actively engaged in impactful open-source projects, collaborating with diverse teams to deliver tangible results.<br/>
                    &emsp;❖ Web Technologies: Explored and mastered web development technologies, contributing to open-source initiatives focused on enhancing user experiences.<br/>
                    &emsp;❖ Proactive Learner: Committed to continuous learning, staying ahead of emerging technologies to remain at the forefront of the dynamic tech landscape.<br/>
                    <br/>
                </p>

                <img className="descRowImg" src={process.env.PUBLIC_URL + '/images/IL-Profile.png'} alt='portrait alternate'/>

            </div>

        </div>
    )
}

export default aboutMe;