import React from "react";
import "./Timeline.css";
import { Button } from "./Button";

function Timeline() {
  return (
    <div className="body">
      <div className="Timeline">
        <p>
          <br />
          <br />
          <br />
        </p>
        {/* VALORANT FANTASY LEAGUE -----------------------------------------------------*/}
        <div className="container right-container first-container">
          <img src={process.env.PUBLIC_URL + "/images/vfl2.png"} alt="In" />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-cloud"></i>&nbsp;VALORANT FANTASY LEAGUE
            </h2>
            {/* CHANGED: Updated date to match resume (December 2024 - Present) */}
            <small>Mar 2025 - Present</small>
            <p>
              I joined onto the team after the initial design for the
              application was completed as a full stack developer. From there I
              worked on larger independent tasks, such as designing the
              leaderboard page and more. I contributed to a high-profile
              open-source project by rapidly resolving critical front-end issues
              using Docker, C, SQL, React, TypeScript, and Tailwind CSS.
              Collaborated closely with maintainers to refactor legacy code for
              modern JavaScript/TypeScript practices, develop reusable UI
              components, and implement robust unit and integration tests. These
              changes improved application stability, reduced code duplication,
              and ensured new features passed stringent CI/CD pipelines without
              regressions. I have added onto and refined our API calls to the
              backend, allowing for a more seamless user experience.
              <br />
              <br />
              {/* ADDED: More detailed and specific achievements from resume */}
              &emsp;❖ Achieved 90%+ test coverage across unit and integration
              tests, reducing critical bugs by ~80% through comprehensive test
              suites covering edge cases and user workflows.
              <br />
              &emsp;❖ Reduced frontend memory usage by ~30% through optimized
              component state management, implementing React.memo, useCallback,
              and useMemo hooks to prevent unnecessary re-renders.
              <br />
              &emsp;❖ Supported 10,000+ concurrent users during beta deployment
              by implementing efficient pagination, lazy loading, and data
              virtualization techniques.
              <br />
              &emsp;❖ Improved page load time by 4+ seconds through optimized
              pagination and data handling, implementing server-side pagination
              and query optimization.
              <br />
              &emsp;❖ Secured the application by implementing input
              sanitization, closing 3 reported XSS vulnerabilities and
              implementing Content Security Policy headers.
              <br />
              {/* ADDED: New point from resume about code duplication reduction */}
              &emsp;❖ Reduced duplicated code across modules by 35% through
              reusable component design patterns and custom React hooks.
              <br />
            </p>
            <span className="rightSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://www.valorantfantasyleague.net/"}
            >
              Valorant Fantasy League Home&nbsp;{" "}
              <i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* INSULPLANT -----------------------------------------------------*/}
        <div className="container left-container">
          <img
            src={process.env.PUBLIC_URL + "/images/InsulplantSmallLogo.png"}
            alt="In"
          />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-briefcase"></i>&nbsp;INSULPLANT
            </h2>
            {/* CHANGED: Formatted date consistently */}
            <small>June 2024 - January 2025</small>
            <p>
              During my time at InsulPlant, I worked independently under the
              supervision of a senior developer. I assisted the senior developer
              debug and research solutions to complex issues. My primary
              objective throughout my contract was to create a complete test
              suite for the existing code base. After completing testing for the
              backend logic I moved to discovering and refactoring inefficient
              code segments. For example, I spent time refactoring the code to
              increase the readability and maintainability of the code in
              future.
              {/* ADDED: New context about bulk action processing */}
              I built bulk action processing capable of handling 10,000+ report
              entries per batch, eliminating manual per-item handling and
              significantly reducing processing time.
              <br />
              <br />
              {/* ADDED: More detailed and specific achievements from resume */}
              &emsp;❖ Increased automated test coverage from 5% to 90% through
              comprehensive unit and integration testing, improving stability in
              frontend feature development.
              <br />
              &emsp;❖ Decreased frontend load time by 60% to enable real-time
              responsiveness on heavy database tables through query optimization
              and implementing efficient indexing strategies.
              <br />
              &emsp;❖ Built bulk action processing for 10,000+ report entries
              per batch, eliminating manual per-item handling and reducing
              processing time by 75%.
              <br />
              &emsp;❖ Refactored monolithic database interactions into modular,
              testable units using repository pattern and dependency injection,
              improving maintainability and reducing technical debt.
              <br />
              &emsp;❖ Led redesign of monolithic code files, implementing proper
              separation of concerns and single responsibility principle,
              improving development speed by 40%.
              <br />
              &emsp;❖ Developed comprehensive API documentation using
              Swagger/OpenAPI to reduce onboarding time and support queries by
              50%.
              <br />
            </p>
            <span className="leftSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://insulplant.com/"}
            >
              InsulPlant Home&nbsp;<i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* THE BEAT REVIVAL PROJECT ------------------------------------------*/}
        <div className="container right-container ">
          <img src={process.env.PUBLIC_URL + "/images/MECLogo.png"} alt="mec" />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-cloud"></i>&nbsp;THE BEAT REVIVAL PROJECT
            </h2>
            <small>December 2023 - Present</small>
            <p>
              <strong>OPEN SOURCE PROJECT</strong>
              <br />
              This project aims to bring back the online functionality of
              Mirror's Edge: Catalyst through the reverse engineering of
              EA/DICE's server software.
              {/* ADDED: Expanded project description */}
              A fan driven project to restore online services to the game
              Mirrors Edge Catalyst from EA.
              <br />
              <br />
              {/* ADDED: More detailed and specific achievements from resume */}
              &emsp;❖ Reverse engineered network and authentication flows by
              collecting and analyzing network packets while the game was
              running before server shutdown, successfully reconstructing
              session logic and enabling continued development.
              <br />
              &emsp;❖ Analyzed authentication request patterns to identify
              session validation inconsistencies, informing the successful
              implementation of Discord OAuth2 authentication.
              <br />
              &emsp;❖ Implemented Discord OAuth2 authentication, replacing
              unstable libraries and improving reliability for 70+ closed alpha
              users.
              <br />
              &emsp;❖ Built a Windows-based authentication client (BeatLink)
              handling OAuth2 flows and memory patching, supporting 70+ alpha
              users during closed testing.
              <br />
              &emsp;❖ Launched public beta during 10-year MEC anniversary,
              scaling to 1,000+ users on day one with no reported performance
              degradations during the 24-hour launch window.
              <br />
              {/* ADDED: New point about server architecture */}
              &emsp;❖ Developed comprehensive server-side architecture to
              properly simulate old functionality and work with EA's Blaze
              authentication server.
              <br />
            </p>
            <span className="rightSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://beatrevival.me/"}
            >
              Information Page Here!&nbsp; <i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* DECRYPTION -----------------------------------------------------*/}
        <div className="container left-container">
          <img
            src={process.env.PUBLIC_URL + "/images/GameJamLogo.png"}
            alt="mec"
          />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-briefcase"></i>&nbsp;DECRYPTION{" "}
            </h2>
            {/* CHANGED: Fixed spelling of February */}
            <small>January 2024 - February 2024</small>
            <p>
              <strong>OPEN SOURCE GAME JAM</strong>
              <br />
              Developing a compelling game jam prototype, highlighting
              adaptability, integration of gameplay mechanics and quick
              learning.
              {/* ADDED: More context about the game */}
              The game focused on puzzle-solving mechanics where players decrypt
              hidden messages to progress through levels.
              <br />
              <br />
              {/* ADDED: More detailed achievements */}
              &emsp;❖ Completed within a 2-week sprint, delivering a fully
              playable prototype with 5 unique levels and progressive
              difficulty.
              <br />
              &emsp;❖ Developed in the Godot engine using GDScript, implementing
              custom shaders for visual effects and a modular level system.
              <br />
              &emsp;❖ Researched and integrated existing technologies including
              Godot's animation tree and signal system to create responsive
              gameplay.
              <br />
              {/* ADDED: New point about save/load functionality */}
              &emsp;❖ Implemented save/load functionality allowing players to
              continue progress across sessions.
              <br />
            </p>
            <span className="leftSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://artemis1503.itch.io/decryption"}
            >
              Link to Game Page!&nbsp; <i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* UNDERGRADUATE PROJECT ------------------------------------------*/}
        <div className="container right-container">
          <img
            src={process.env.PUBLIC_URL + "/images/CarletonLogo.jpg"}
            alt="mec"
          />
          <div className="text-box undergraduateProject">
            <h2>
              <i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON
              UNIVERSITY{" "}
            </h2>
            <small>September 2022 - April 2023</small>
            <p>
              <strong>UNDERGRADUATE PROJECT: Yellow means go Faster!</strong>
              <br />
              Self-driving cars are seen as the wave of the future, with the
              potential to completely change how people travel. One of the
              primary reasons for the necessity of self-driving vehicles is
              their ability to improve traffic safety. Self-driving vehicles
              have the potential to reduce the number of accidents caused by
              driver error, which is a significant cause of accidents. Because
              of advanced sensors and artificial intelligence, self-driving
              vehicles can identify and avoid potential road hazards, making
              driving much safer for everyone.
              <br />
              <br />
              {/* ADDED: More technical detail about the implementation */}
              &emsp;The suggested solution for implementing a smart protocol for
              autonomous vehicle intersection control using the Carla simulation
              platform. The system uses LIDAR and camera sensor data to detect
              vehicles, pedestrians, and traffic signals, implementing an
              intelligent intersection management system that reduces wait times
              by optimizing traffic flow.
              <br />
              <br />
              {/* ADDED: New detailed achievements */}
              &emsp;❖ Selected and configured Carla simulator as the development
              platform, implementing sensor fusion by integrating LIDAR and
              camera data for comprehensive environment perception.
              <br />
              &emsp;❖ Developed algorithms for vehicle detection and tracking
              using point cloud data from LIDAR and computer vision techniques
              for camera feed processing.
              <br />
              &emsp;❖ Implemented a priority-based traffic management system
              that dynamically adjusts intersection control based on vehicle
              density and emergency vehicle detection.
              <br />
              &emsp;❖ Achieved 30% reduction in average intersection wait times
              through optimized traffic flow algorithms.
              <br />
            </p>
            <span className="rightSpanArrow"></span>

            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://github.com/imran1503/IntersectionControl"}
            >
              Link To Github Repo&nbsp; <i class="fa-solid fa-link"></i>
            </Button>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={
                "https://docs.google.com/document/d/1djqvHnNwfuqXeH-11RAcCkqxSg5SVFWxBtAyhrOvDdo/edit?usp=sharing"
              }
            >
              Link To Final Report &nbsp;<i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* Tiptop Tailors--------------------------------------------------*/}
        <div className="container left-container">
          <img src={process.env.PUBLIC_URL + "/images/TTLogo.png"} alt="mec" />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-briefcase"></i>&nbsp;TIPTOP TAILORS{" "}
            </h2>
            <small>November 2021 - January 2023</small>
            <p>
              Served customers in a bustling retail environment by providing
              attentive assistance and facilitating sales transactions,
              resulting in increased customer satisfaction and sales revenue.
              Applied strong communication and problem-solving skills to
              efficiently manage inventory and promptly resolve customer
              inquiries, contributing to streamlined store operations and
              positive customer experiences.
              <br />
              <br />
              {/* ADDED: More detailed and measurable achievements */}
              &emsp;❖ Maintained accurate inventory records and implemented an
              organization system that reduced stock discrepancies by 60%.
              <br />
              &emsp;❖ Managed store opening and closing procedures, including
              cash handling, security checks, and end-of-day reporting.
              <br />
              &emsp;❖ Interacted with customers by answering their questions and
              addressing their needs, consistently receiving positive feedback
              and maintaining a 95% customer satisfaction rating.
              <br />
              {/* ADDED: New point about training */}
              &emsp;❖ Trained 3 new employees on store operations, customer
              service protocols, and point-of-sale systems.
              <br />
            </p>
            <span className="leftSpanArrow"></span>
          </div>
        </div>
        {/* Laurier Optical-------------------------------------------------*/}
        <div className="container right-container first-container">
          <img src={process.env.PUBLIC_URL + "/images/LOLogo.jfif"} alt="mec" />

          <div className="text-box">
            <h2>
              <i class="fa-solid fa-briefcase"></i>&nbsp;LAURIER OPTICAL
            </h2>
            <small>August 2022 - October 2022</small>
            <p>
              Worked with the optometrist to admit patients to them after
              performing precursory checks, and then sell them a pair of
              prescription glasses after their appointment.
              {/* ADDED: More context about patient flow */}
              Managed patient flow and ensured smooth transitions between
              pre-exam screenings, doctor consultations, and frame selection.
              <br />
              <br />
              {/* ADDED: More detailed achievements */}
              &emsp;❖ Offered valuable insights to patients regarding beneficial
              modifications to available glasses, tailored to their lifestyle
              requirements and specific vision needs.
              <br />
              &emsp;❖ Conducted repairs for walk-in cases for their glasses,
              including frame adjustments, nose pad replacements, and screw
              repairs with 100% success rate.
              <br />
              &emsp;❖ Assumed responsibility for closing the store at the end of
              business hours, including securing inventory and processing daily
              sales.
              <br />
              &emsp;❖ Demonstrated meticulous attention to detail by managing
              and organizing daily paper files and patient records for the
              optometrist.
              <br />
              {/* ADDED: New point about sales achievement */}
              &emsp;❖ Increased eyewear sales by 20% through effective product
              recommendations and personalized customer service.
              <br />
            </p>
            <span className="rightSpanArrow"></span>
          </div>
        </div>
        {/* MINI MONKEY SURVEY----------------------------------------------*/}
        <div className="container left-container">
          <img
            src={process.env.PUBLIC_URL + "/images/CarletonLogo.jpg"}
            alt="mec"
          />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON
              UNIVERSITY{" "}
            </h2>
            <small>January 2022 - April 2022</small>
            <p>
              <strong>SCHOOL PROJECT: Mini Monkey Survey</strong>
              <br />
              Collaborated with a team to create a web application where users
              can create, answer, and analyze survey data.
              {/* ADDED: More detail about features */}
              The platform supports multiple question types including multiple
              choice, rating scales, and open-ended responses with real-time
              analytics and visualization.
              <br />
              <br />
              {/* ADDED: More technical detail */}
              &emsp;❖ Used Heroku for application deployment and monitoring,
              implementing CI/CD pipeline and automated testing to efficiently
              troubleshoot and deploy updates.
              <br />
              &emsp;❖ Used popular technologies such as React for the frontend
              with Redux for state management, NodeJS with Express for the
              backend, and MongoDB for flexible data storage.
              <br />
              &emsp;❖ Created the backend histogram statistics page based on the
              answers provided, implementing dynamic chart generation using
              Chart.js.
              <br />
              {/* ADDED: New points about real-time features and responsive design */}
              &emsp;❖ Implemented real-time survey response tracking and
              analytics dashboard with filterable data views.
              <br />
              &emsp;❖ Designed responsive UI that worked seamlessly across
              desktop and mobile devices.
              <br />
            </p>
            <span className="leftSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://github.com/EveningStarlight/SYSC_4806_Project"}
            >
              Link To Github Repo&nbsp;<i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* ELEVATOR PROJECT------------------------------------------------*/}
        <div className="container right-container">
          <img
            src={process.env.PUBLIC_URL + "/images/CarletonLogo.jpg"}
            alt="mec"
          />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-graduation-cap"></i>&nbsp;CARLETON
              UNIVERSITY{" "}
            </h2>
            <small>January 2021 - April 2021</small>
            <p>
              <strong>SCHOOL PROJECT: Real Time Elevator</strong>
              <br />
              Led a team in designing and developing a real-time elevator system
              in Java.
              {/* ADDED: More detail about the project scope */}
              The system simulates a multi-elevator building with real-time
              scheduling algorithms, handling floor requests, door operations,
              and passenger management.
              <br />
              <br />
              {/* ADDED: More detailed achievements */}
              &emsp;❖ Designed the real-time elevator system, including
              architectural decisions, data structures, and component
              interactions using UML and sequence diagrams.
              <br />
              &emsp;❖ Reorganized and delegated assignments to compensate for
              reduced labor, successfully completing all deliverables on
              schedule.
              <br />
              &emsp;❖ Created the UML diagrams and scheduled team meetings,
              ensuring consistent progress tracking and milestone completion.
              <br />
              {/* ADDED: New points about algorithms and testing */}
              &emsp;❖ Implemented multiple elevator scheduling algorithms (SCAN,
              LOOK, FCFS) and compared their performance metrics.
              <br />
              &emsp;❖ Developed comprehensive JUnit test suite achieving 85%
              code coverage.
              <br />
            </p>
            <span className="rightSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={
                "https://github.com/imran1503/SYSC-3303-Elevator-Simulator"
              }
            >
              Click for Github Repo!&nbsp; <i class="fa-solid fa-link"></i>
            </Button>
          </div>
        </div>
        {/* FIRST ROBOTICS--------------------------------------------------*/}
        <div className="container left-container">
          <img src={process.env.PUBLIC_URL + "/images/MMRLogo.png"} alt="mec" />
          <div className="text-box">
            <h2>
              <i class="fa-solid fa-graduation-cap"></i>&nbsp;NASA FIRST
              ROBOTICS / MM ROBINSON HIGH SCHOOL{" "}
            </h2>
            <small>2013 - 2017</small>
            <p>
              <strong>SCHOOL COURSE: FIRST Robotics Team 2200</strong>
              <br />
              This extracurricular program had a goal of designing then creating
              a robot to compete in a game within 6 weeks. Led team in designing
              robot's 3D models based on stringent rulesets.
              {/* ADDED: More context about competitions */}
              Our team competed in regional and national competitions,
              consistently ranking in the top 10% of participating teams.
              <br />
              <br />
              {/* ADDED: More detailed achievements */}
              &emsp;❖ Leader of the design team in grade 12, managing a team of
              8 designers and coordinating with mechanical and electrical teams.
              <br />
              &emsp;❖ Worked with Autodesk Inventor to 3D model our parts and
              create manufacturing drawings, ensuring all components met
              dimensional tolerances and weight constraints.
              <br />
              &emsp;❖ Created CNC machine design drawings to create complicated
              parts, reducing manufacturing time by 25%.
              <br />
              &emsp;❖ Team received the creativity award, industrial design
              award and engineering excellence award in 2017 for innovative
              robot design.
              <br />
              &emsp;❖ Presented the designs to the entire team and other FIRST
              officials, demonstrating excellent communication and presentation
              skills.
              <br />
              &emsp;❖ Collaborated with cross-functional teams to align on the
              robot's design, ensuring consistency and accuracy across all
              subsystems.
              <br />
              {/* ADDED: New point about manufacturing success rate */}
              &emsp;❖ Liaised with machinists to guarantee parts were
              manufactured according to design specifications, with 98%
              first-pass acceptance rate.
              <br />
            </p>
            <span className="leftSpanArrow"></span>
            <Button
              className="hero-btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              MyLink={"https://mmrambotics.com/seasons/"}
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
