import React from 'react';
import './Timeline.css'
import { Button } from './Button';

function Timeline(){
    return(
        <div className='body'>
            <div className='Timeline'>
                <p><br/><br/><br/></p>

                {/* THE BEAT REVIVAL TEAM ------------------------------------------*/}
                <div className='container left-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>THE BEAT REVIVAL PROJECT</h2>
                        <small>December 2023 - Present</small>
                        <p>
                            <strong>OPEN SOURCE PROJECT</strong><br/>
                            This project aims to bring back the online functionality of Mirror's Edge: Catalyst through the reverse engineering of EA/DICE's server software.<br/>
                            A fan driven project to restore online services to the game Mirrors Edge Catalyst from EA.<br/><br/>
                            &emsp;❖ Collected network packets while the game was running in before the servers were closed.<br/>
                            &emsp;❖ Editing and browsing network packets to understand how to replicate features on our own servers.<br/>
                            &emsp;❖ Planning a server to properly simulate the old functionality to work with EA’s Blaze authentication server.<br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://beatrevival.me/"
                            }
                        >
                            Information Page Here! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* DECRYPTION -----------------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/GameJamLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>DECRYPTION </h2>
                        <small>January 2024 - Febuary 2024</small>
                        <p>
                            <strong>OPEN SOURCE GAME JAM</strong><br/>
                            Developing a compelling game jam prototype, highlighting adaptability, integration of gameplay mechanics and quick learning.<br/><br/>
                            &emsp;❖ Completed within a 2-week sprint.<br/>
                            &emsp;❖ Developed in the Godot engine using GDScript.<br/>
                            &emsp;❖ Researched existing technologies to implement in our game.<br/>
                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://artemis1503.itch.io/decryption"
                            }
                        >
                            Link to Game Page! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* UNDERGRADUATE PROJECT ------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box undergraduateProject'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>CARLETON UNIVERSITY </h2>
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
                        <span className='leftSpanArrow'></span>

                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/imran1503/IntersectionControl"
                            }
                        >
                            Link To Github Repo <i class="fa-solid fa-link"></i>
                        </Button>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://docs.google.com/document/d/1djqvHnNwfuqXeH-11RAcCkqxSg5SVFWxBtAyhrOvDdo/edit?usp=sharing"
                            }
                        >
                            Link To Final Report <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* Tiptop Tailors--------------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/TTLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-briefcase"></i>TIPTOP TAILORS </h2>
                        <small>November 2021 - January 2023</small>
                        <p>
                        Served customers in a bustling retail environment by providing attentive assistance and facilitating sales transactions, resulting in increased customer satisfaction and sales revenue.
                        Applied strong communication and problem-solving skills to efficiently manage inventory and promptly resolve customer inquiries, contributing to streamlined store operations and positive customer experiences.<br/><br/>
                            ❖ Maintained inventory records.<br/>
                            ❖ Opened and closed the store.<br/>
                            ❖ Interacted with customers by answering their questions and addressing their needs, showing my ability to prioritize customer satisfaction.</p>
                        <span className='rightSpanArrow'></span>

                    </div>
                </div>

                {/* Laurier Optical-------------------------------------------------*/}
                <div className='container left-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/LOLogo.jfif'} alt='mec' />

                    <div className='text-box'>

                        <h2><i class="fa-solid fa-briefcase"></i>LAURIER OPTICAL</h2>
                        <small>August 2022 - October 2022</small>
                        <p>
                        Worked with the optometrist to admit patients to them after performing precursory checks, and then sell them a pair of prescription glasses after their appointment.<br/><br/>
                        ❖ Offered valuable insights to patients regarding beneficial modifications to available glasses, tailored to their lifestyle requirements.<br/>
                        ❖ Conducted repairs for walk-in cases for their glasses.<br/>
                        ❖ Assumed responsibility for closing the store at the end of business hours.<br/>
                        ❖ Demonstrated meticulous attention to detail by managing and organizing daily paper files for the optometrist.<br/>
                        </p>
                        <span className='leftSpanArrow'></span>


                    </div>
                </div>

                {/* MINI MONKEY SURVEY----------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>CARLETON UNIVERSITY </h2>
                        <small>January 2022 - April 2022</small>
                        <p>
                            <strong>SCHOOL PROJECT: Mini Monkey Survey</strong><br/>
                            Collaborated with a team to create a web application where users can create, answer, and analyse survey data.<br/><br/>
                            ❖	Used Heroku for application deployment and monitoring, to efficiently troubleshoot the application.<br/>
                            ❖	Used popular technologies such as React, NodeJS and MongoDB.<br/>
                            ❖	Created the backend histogram statistics page based on the answers provided. <br/>

                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/EveningStarlight/SYSC_4806_Project"
                            }
                        >
                            Link To Github Repo<i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* ELEVATOR PROJECT------------------------------------------------*/}
                <div className='container left-container'>
                    <img src={process.env.PUBLIC_URL + '/images/CarletonLogo.jpg'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>CARLETON UNIVERSITY </h2>
                        <small>January 2021 - April 2021</small>
                        <p>
                            <strong>SCHOOL PROJECT: Real Time Elevator</strong><br/>
                            Led a team in designing and developing a real-time elevator system in Java.<br/><br/>
                            ❖	Designed the real-time elevator system, including architectural decisions, data structures, and component interactions.<br/>
                            ❖	Reorganized and delegated assignments to compensate for reduced labor.<br/>
                            ❖	Created the UML diagrams, and scheduling meetings.<br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://github.com/imran1503/SYSC-3303-Elevator-Simulator"
                            }
                        >
                             Click for Github Repo! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>

                {/* FIRST ROBOTICS--------------------------------------------------*/}
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MMRLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2><i class="fa-solid fa-graduation-cap"></i>NASA FIRST ROBOTICS / MM ROBINSON HIGH SCHOOL </h2>
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
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={"https://mmrambotics.com/seasons/"}
                        >
                             Click for more info! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;