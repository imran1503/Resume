import React from 'react';
import './Timeline.css'
import { Button } from './Button';

function Timeline(){
    return(
        <div className='body'>
            <div className='Timeline'>
                <p><br/><br/><br/></p> {/* Provides spacing above first text box*/}
                 {/* INSULPLANT -----------------------------------------------------*/}
                <div className='container right-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/vfl2.png'} alt='In' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-cloud"></i>&nbsp;VALORANT FANTASY LEAGUE</h2>
                        <small>March 2025 - January 31 2025</small>
                        <p>
                            Contributed to a high-profile open-source project by rapidly resolving critical front-end issues using Docker, React TypeScript, and Tailwind CSS.
                            Collaborated closely with maintainers to refactor legacy code for modern JavaScript/TypeScript practices, develop reusable UI components,
                            and implement robust unit and integration tests. 
                            These changes improved application stability, reduced code duplication, and ensured new features passed stringent CI/CD pipelines without regressions.
                            <br/><br/>
                            &emsp;❖ Resolved major UI-breaking bugs within a week, restoring full functionality. <br/>
                            &emsp;❖ Reduced duplicated code across modules by 35% through reusable component design.<br/>
                            &emsp;❖ Improved API error handling, eliminating multiple recurring user-facing issues.<br/>
                            &emsp;❖ Added comprehensive automated tests, preventing regressions in future releases.<br/>
                            &emsp;❖ Enhanced performance of a large table by implementing efficient pagination, lowering load times by 4+ seconds.<br/>

                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} 
                            MyLink={
                                "https://www.valorantfantasyleague.net/"
                            }
                        >
                            Valorant Fantasy League Home&nbsp; <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                {/* INSULPLANT -----------------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/InsulplantSmallLogo.png'} alt='In' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>&nbsp;INSULPLANT</h2>
                        <small>June 3 2024 - January 31 2025</small>
                        <p>
                            During my time at InsulPlant, I worked independently under the supervision of a senior developer.
                            I assisted the senior developer debug and research solutions to complex issues. 
                            My primary objective throughout my contract was to create a complete test suite for the existing code base.
                            After completing testing for the backend logic I moved to discovering and refactoring unefficent code segments.
                            For example, I spent time refactoring the code to increase the readability and maintainability of the code in future. 
                            <br/><br/>
                            &emsp;❖ Increased the percentage of the codebase tested and documeted from 5% to 90%. <br/>
                            &emsp;❖ Utilized white box unit tests to verify the validity of all of the backend logic functions.  <br/>
                            &emsp;❖ Assisted in the creation and optimization of a large table view containing hundreds of rows of data.  <br/>
                            &emsp;❖ Created and tested new features. <br/>
                            &emsp;❖ Worked in a team to develop solutions to complex problems. <br/>
                            &emsp;❖ Contributed to the deployment process before release. <br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} 
                            MyLink={
                                "https://insulplant.com/"
                            }
                        >
                            InsulPlant Home&nbsp;<i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                {/* THE BEAT REVIVAL TEAM ------------------------------------------*/}
                <div className='container right-container '>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-cloud"></i>&nbsp;THE BEAT REVIVAL PROJECT</h2>
                        <small>December 2023 - Present</small>
                        <p>
                            <strong>OPEN SOURCE PROJECT</strong><br/>
                            This project aims to bring back the online functionality of Mirror's Edge: Catalyst through the reverse engineering of EA/DICE's server software.<br/>
                            A fan driven project to restore online services to the game Mirrors Edge Catalyst from EA.<br/><br/>
                            &emsp;❖ Collected network packets while the game was running in before the servers were closed.<br/>
                            &emsp;❖ Editing and browsing network packets to understand how to replicate features on our own servers.<br/>
                            &emsp;❖ Planning a server to properly simulate the old functionality to work with EA’s Blaze authentication server.<br/>

                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://beatrevival.me/"
                            }
                        >
                            Information Page Here!&nbsp; <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* DECRYPTION -----------------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/GameJamLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>&nbsp;DECRYPTION </h2>
                        <small>January 2024 - Febuary 2024</small>
                        <p>
                            <strong>OPEN SOURCE GAME JAM</strong><br/>
                            Developing a compelling game jam prototype, highlighting adaptability, integration of gameplay mechanics and quick learning.<br/><br/>
                            &emsp;❖ Completed within a 2-week sprint.<br/>
                            &emsp;❖ Developed in the Godot engine using GDScript.<br/>
                            &emsp;❖ Researched existing technologies to implement in our game.<br/>
                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://artemis1503.itch.io/decryption"
                            }
                        >
                            Link to Game Page!&nbsp; <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* UNDERGRADUATE PROJECT ------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box undergraduateProject'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON UNIVERSITY </h2>
                        <small>September 2022 - April 2023</small>
                        <p>
                            <strong>UNDERGRADUATE PROJECT: Yellow means go Faster!</strong><br/>
                            &emsp;Self-driving cars are seen as the wave of the future, with the potential to completely change how people travel.
                            One of the primary reasons for the necessity of self-driving vehicles is their ability to improve traffic safety.
                            Self-driving vehicles have the potential to reduce the number of accidents caused by driver error, which is a significant cause of accidents.
                            Because of advanced sensors and artificial intelligence, self-driving vehicles can identify and avoid potential road hazards, making driving much safer for everyone.
                            <br/>
                            <br/>
                            &emsp;The suggested solution for implementing a smart protocol for autonomous vehicle intersection control.
                            That would begin with selecting a simulation platform to develop and test the system on, such as the Carla simulator.
                            The following stage would be to become acquainted with the platform and practice obtaining sensor data from the Lidar and Camera.
                            The data from the lidar and cameras would then be processed so that the vehicle could comprehend its surroundings.

                        </p>
                        <span className='rightSpanArrow'></span>

                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/imran1503/IntersectionControl"
                            }
                        >
                            Link To Github Repo&nbsp; <i class="fa-solid fa-link"></i>
                        </Button>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://docs.google.com/document/d/1djqvHnNwfuqXeH-11RAcCkqxSg5SVFWxBtAyhrOvDdo/edit?usp=sharing"
                            }
                        >
                            Link To Final Report &nbsp;<i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* Tiptop Tailors--------------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/TTLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>&nbsp;TIPTOP TAILORS </h2>
                        <small>November 2021 - January 2023</small>
                        <p>
                        Served customers in a bustling retail environment by providing attentive assistance and facilitating sales transactions, resulting in increased customer satisfaction and sales revenue.
                        Applied strong communication and problem-solving skills to efficiently manage inventory and promptly resolve customer inquiries, contributing to streamlined store operations and positive customer experiences.<br/><br/>
                            ❖ Maintained inventory records.<br/>
                            ❖ Opened and closed the store.<br/>
                            ❖ Interacted with customers by answering their questions and addressing their needs, showing my ability to prioritize customer satisfaction.</p>
                        <span className='leftSpanArrow'></span>

                    </div>
                </div>

                {/* Laurier Optical-------------------------------------------------*/}
                <div className='container right-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/LOLogo.jfif'} alt='mec' />

                    <div className='text-box'>

                        <h2><i class="fa-solid fa-briefcase"></i>&nbsp;LAURIER OPTICAL</h2>
                        <small>August 2022 - October 2022</small>
                        <p>
                        Worked with the optometrist to admit patients to them after performing precursory checks, and then sell them a pair of prescription glasses after their appointment.<br/><br/>
                        ❖ Offered valuable insights to patients regarding beneficial modifications to available glasses, tailored to their lifestyle requirements.<br/>
                        ❖ Conducted repairs for walk-in cases for their glasses.<br/>
                        ❖ Assumed responsibility for closing the store at the end of business hours.<br/>
                        ❖ Demonstrated meticulous attention to detail by managing and organizing daily paper files for the optometrist.<br/>
                        </p>
                        <span className='rightSpanArrow'></span>


                    </div>
                </div>

                {/* MINI MONKEY SURVEY----------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON UNIVERSITY </h2>
                        <small>January 2022 - April 2022</small>
                        <p>
                            <strong>SCHOOL PROJECT: Mini Monkey Survey</strong><br/>
                            Collaborated with a team to create a web application where users can create, answer, and analyse survey data.<br/><br/>
                            ❖	Used Heroku for application deployment and monitoring, to efficiently troubleshoot the application.<br/>
                            ❖	Used popular technologies such as React, NodeJS and MongoDB.<br/>
                            ❖	Created the backend histogram statistics page based on the answers provided. <br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/EveningStarlight/SYSC_4806_Project"
                            }
                        >
                            Link To Github Repo&nbsp;<i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* ELEVATOR PROJECT------------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON UNIVERSITY </h2>
                        <small>January 2021 - April 2021</small>
                        <p>
                            <strong>SCHOOL PROJECT: Real Time Elevator</strong><br/>
                            Led a team in designing and developing a real-time elevator system in Java.<br/><br/>
                            ❖	Designed the real-time elevator system, including architectural decisions, data structures, and component interactions.<br/>
                            ❖	Reorganized and delegated assignments to compensate for reduced labor.<br/>
                            ❖	Created the UML diagrams, and scheduling meetings.<br/>

                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/imran1503/SYSC-3303-Elevator-Simulator"
                            }
                        >
                             Click for Github Repo!&nbsp; <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* FIRST ROBOTICS--------------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MMRLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>&nbsp;NASA FIRST ROBOTICS / MM ROBINSON HIGH SCHOOL </h2>
                        <small>2013 - 2017</small>
                        <p>
                            <strong>SCHOOL COURSE: FIRST Robotics Team 2200</strong><br/>
                            This extracurricular program had a goal of designing then creating a robot to compete in a game within 6 weeks. Led team in designing robot’s 3D models based on stringent rulesets.<br/><br/>
                            ❖ Leader of the design team in grade 12.<br/>
                            ❖ Worked with Autodesk Inventor to 3D model our parts and create drawings to create the parts.<br/>
                            ❖ Created CNC machine design drawings to create complicated parts.<br/>
                            ❖ Team received the creativity award, industrial design award and engineering excellence award in 2017.<br/>
                            ❖ Presented the designs to the entire team and other FIRST officials.<br/>
                            ❖ Collaborated with cross-functional teams to align on the robot's design, ensuring consistency and accuracy.<br/>
                            ❖ Liaised with machinists to guarantee parts were manufactured according to design specifications.<br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={"https://mmrambotics.com/seasons/"}
                        >
                             Click for more info! &nbsp;<i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;