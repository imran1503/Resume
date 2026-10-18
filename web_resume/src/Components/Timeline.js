import React, { useState, useEffect } from "react";
import "./Timeline.css";
import { Button } from "./Button";

const jobs = [
  {
    id: "vfl",
    date: "Mar 2025 - Present",
    title: "Valorant Fantasy League",
    logo: "/images/vfl2.png",
    tags: ["React", "Node", "SQL", "TypeScript"],
    links: [
      { text: "Visit Site", url: "https://www.valorantfantasyleague.net/" },
    ],
    paragraphs: [
      "I joined onto the team after the initial design for the application was completed as a full stack developer. From there I worked on larger independent tasks, such as designing the leaderboard page and more. I contributed to a high-profile open-source project by rapidly resolving critical front-end issues using Docker, C, SQL, React, TypeScript, and Tailwind CSS. Collaborated closely with maintainers to refactor legacy code for modern JavaScript/TypeScript practices, develop reusable UI components, and implement robust unit and integration tests. These changes improved application stability, reduced code duplication, and ensured new features passed stringent CI/CD pipelines without regressions. I have added onto and refined our API calls to the backend, allowing for a more seamless user experience.",
    ],
    bullets: [
      "Achieved 90%+ test coverage across unit and integration tests, reducing critical bugs by ~80% through comprehensive test suites covering edge cases and user workflows.",
      "Reduced frontend memory usage by ~30% through optimized component state management, implementing React.memo, useCallback, and useMemo hooks to prevent unnecessary re-renders.",
      "Supported 10,000+ concurrent users during beta deployment by implementing efficient pagination, lazy loading, and data virtualization techniques.",
      "Improved page load time by 4+ seconds through optimized pagination and data handling, implementing server-side pagination and query optimization.",
      "Secured the application by implementing input sanitization, closing 3 reported XSS vulnerabilities and implementing Content Security Policy headers.",
      "Reduced duplicated code across modules by 35% through reusable component design patterns and custom React hooks.",
    ],
  },
  {
    id: "insulplant",
    date: "June 2024 - Jan 2025",
    title: "InsulPlant",
    logo: "/images/InsulplantSmallLogo.png",
    tags: ["PHP", "MySQL", "Testing"],
    links: [{ text: "Visit Site", url: "https://insulplant.com/" }],
    paragraphs: [
      "During my time at InsulPlant, I worked independently under the supervision of a senior developer. I assisted the senior developer debug and research solutions to complex issues. My primary objective throughout my contract was to create a complete test suite for the existing code base. After completing testing for the backend logic I moved to discovering and refactoring inefficient code segments. For example, I spent time refactoring the code to increase the readability and maintainability of the code in future. I built bulk action processing capable of handling 10,000+ report entries per batch, eliminating manual per-item handling and significantly reducing processing time.",
    ],
    bullets: [
      "Increased automated test coverage from 5% to 90% through comprehensive unit and integration testing, improving stability in frontend feature development.",
      "Decreased frontend load time by 60% to enable real-time responsiveness on heavy database tables through query optimization and implementing efficient indexing strategies.",
      "Built bulk action processing for 10,000+ report entries per batch, eliminating manual per-item handling and reducing processing time by 75%.",
      "Refactored monolithic database interactions into modular, testable units using repository pattern and dependency injection, improving maintainability and reducing technical debt.",
      "Led redesign of monolithic code files, implementing proper separation of concerns and single responsibility principle, improving development speed by 40%.",
      "Developed comprehensive API documentation using Swagger/OpenAPI to reduce onboarding time and support queries by 50%.",
    ],
  },
  {
    id: "beat-revival",
    date: "Dec 2023 - Present",
    title: "The Beat Revival Project",
    logo: "/images/MECLogo.png",
    tags: ["C#", "Reverse Eng.", "OAuth2"],
    links: [{ text: "Info Page", url: "https://beatrevival.me/" }],
    paragraphs: [
      "OPEN SOURCE PROJECT. This project aims to bring back the online functionality of Mirror's Edge: Catalyst through the reverse engineering of EA/DICE's server software. A fan driven project to restore online services to the game Mirrors Edge Catalyst from EA.",
    ],
    bullets: [
      "Reverse engineered network and authentication flows by collecting and analyzing network packets while the game was running before server shutdown, successfully reconstructing session logic and enabling continued development.",
      "Analyzed authentication request patterns to identify session validation inconsistencies, informing the successful implementation of Discord OAuth2 authentication.",
      "Implemented Discord OAuth2 authentication, replacing unstable libraries and improving reliability for 70+ closed alpha users.",
      "Built a Windows-based authentication client (BeatLink) handling OAuth2 flows and memory patching, supporting 70+ alpha users during closed testing.",
      "Launched public beta during 10-year MEC anniversary, scaling to 1,000+ users on day one with no reported performance degradations during the 24-hour launch window.",
      "Developed comprehensive server-side architecture to properly simulate old functionality and work with EA's Blaze authentication server.",
    ],
  },
  {
    id: "decryption",
    date: "Jan 2024 - Feb 2024",
    title: "Decryption",
    logo: "/images/GameJamLogo.png",
    tags: ["Godot", "GDScript", "Game Jam"],
    links: [
      { text: "Game Page", url: "https://artemis1503.itch.io/decryption" },
    ],
    paragraphs: [
      "OPEN SOURCE GAME JAM. Developing a compelling game jam prototype, highlighting adaptability, integration of gameplay mechanics and quick learning. The game focused on puzzle-solving mechanics where players decrypt hidden messages to progress through levels.",
    ],
    bullets: [
      "Completed within a 2-week sprint, delivering a fully playable prototype with 5 unique levels and progressive difficulty.",
      "Developed in the Godot engine using GDScript, implementing custom shaders for visual effects and a modular level system.",
      "Researched and integrated existing technologies including Godot's animation tree and signal system to create responsive gameplay.",
      "Implemented save/load functionality allowing players to continue progress across sessions.",
    ],
  },
  {
    id: "carleton",
    date: "Sept 2022 - April 2023",
    title: "Carleton University",
    logo: "/images/CarletonLogo.jpg",
    tags: ["Python", "ROS", "Carla", "LIDAR"],
    links: [
      {
        text: "Github Repo",
        url: "https://github.com/imran1503/IntersectionControl",
      },
      {
        text: "Final Report",
        url: "https://docs.google.com/document/d/1djqvHnNwfuqXeH-11RAcCkqxSg5SVFWxBtAyhrOvDdo/edit?usp=sharing",
      },
    ],
    paragraphs: [
      "UNDERGRADUATE PROJECT: Yellow means go Faster! Self-driving cars are seen as the wave of the future, with the potential to completely change how people travel. One of the primary reasons for the necessity of self-driving vehicles is their ability to improve traffic safety. Self-driving vehicles have the potential to reduce the number of accidents caused by driver error, which is a significant cause of accidents. Because of advanced sensors and artificial intelligence, self-driving vehicles can identify and avoid potential road hazards, making driving much safer for everyone.",
      "The suggested solution for implementing a smart protocol for autonomous vehicle intersection control using the Carla simulation platform. The system uses LIDAR and camera sensor data to detect vehicles, pedestrians, and traffic signals, implementing an intelligent intersection management system that reduces wait times by optimizing traffic flow.",
    ],
    bullets: [
      "Selected and configured Carla simulator as the development platform, implementing sensor fusion by integrating LIDAR and camera data for comprehensive environment perception.",
      "Developed algorithms for vehicle detection and tracking using point cloud data from LIDAR and computer vision techniques for camera feed processing.",
      "Implemented a priority-based traffic management system that dynamically adjusts intersection control based on vehicle density and emergency vehicle detection.",
      "Achieved 30% reduction in average intersection wait times through optimized traffic flow algorithms.",
    ],
  },
  {
    id: "tiptop",
    date: "Nov 2021 - Jan 2023",
    title: "Tiptop Tailors",
    logo: "/images/TTLogo.png",
    tags: ["Retail", "Customer Service"],
    links: [],
    paragraphs: [
      "Served customers in a bustling retail environment by providing attentive assistance and facilitating sales transactions, resulting in increased customer satisfaction and sales revenue. Applied strong communication and problem-solving skills to efficiently manage inventory and promptly resolve customer inquiries, contributing to streamlined store operations and positive customer experiences.",
    ],
    bullets: [
      "Maintained accurate inventory records and implemented an organization system that reduced stock discrepancies by 60%.",
      "Managed store opening and closing procedures, including cash handling, security checks, and end-of-day reporting.",
      "Interacted with customers by answering their questions and addressing their needs, consistently receiving positive feedback and maintaining a 95% customer satisfaction rating.",
      "Trained 3 new employees on store operations, customer service protocols, and point-of-sale systems.",
    ],
  },
  {
    id: "laurier",
    date: "Aug 2022 - Oct 2022",
    title: "Laurier Optical",
    logo: "/images/LOLogo.jfif",
    tags: ["Retail", "Sales"],
    links: [],
    paragraphs: [
      "Worked with the optometrist to admit patients to them after performing precursory checks, and then sell them a pair of prescription glasses after their appointment. Managed patient flow and ensured smooth transitions between pre-exam screenings, doctor consultations, and frame selection.",
    ],
    bullets: [
      "Offered valuable insights to patients regarding beneficial modifications to available glasses, tailored to their lifestyle requirements and specific vision needs.",
      "Conducted repairs for walk-in cases for their glasses, including frame adjustments, nose pad replacements, and screw repairs with 100% success rate.",
      "Assumed responsibility for closing the store at the end of business hours, including securing inventory and processing daily sales.",
      "Demonstrated meticulous attention to detail by managing and organizing daily paper files and patient records for the optometrist.",
      "Increased eyewear sales by 20% through effective product recommendations and personalized customer service.",
    ],
  },
  {
    id: "mini-monkey",
    date: "Jan 2022 - April 2022",
    title: "Mini Monkey Survey",
    logo: "/images/CarletonLogo.jpg",
    tags: ["React", "NodeJS", "MongoDB"],
    links: [
      {
        text: "Github Repo",
        url: "https://github.com/EveningStarlight/SYSC_4806_Project",
      },
    ],
    paragraphs: [
      "SCHOOL PROJECT: Mini Monkey Survey. Collaborated with a team to create a web application where users can create, answer, and analyze survey data. The platform supports multiple question types including multiple choice, rating scales, and open-ended responses with real-time analytics and visualization.",
    ],
    bullets: [
      "Used Heroku for application deployment and monitoring, implementing CI/CD pipeline and automated testing to efficiently troubleshoot and deploy updates.",
      "Used popular technologies such as React for the frontend with Redux for state management, NodeJS with Express for the backend, and MongoDB for flexible data storage.",
      "Created the backend histogram statistics page based on the answers provided, implementing dynamic chart generation using Chart.js.",
      "Implemented real-time survey response tracking and analytics dashboard with filterable data views.",
      "Designed responsive UI that worked seamlessly across desktop and mobile devices.",
    ],
  },
  {
    id: "elevator",
    date: "Jan 2021 - April 2021",
    title: "Real Time Elevator",
    logo: "/images/CarletonLogo.jpg",
    tags: ["Java", "UML", "JUnit"],
    links: [
      {
        text: "Github Repo",
        url: "https://github.com/imran1503/SYSC-3303-Elevator-Simulator",
      },
    ],
    paragraphs: [
      "SCHOOL PROJECT: Real Time Elevator. Led a team in designing and developing a real-time elevator system in Java. The system simulates a multi-elevator building with real-time scheduling algorithms, handling floor requests, door operations, and passenger management.",
    ],
    bullets: [
      "Designed the real-time elevator system, including architectural decisions, data structures, and component interactions using UML and sequence diagrams.",
      "Reorganized and delegated assignments to compensate for reduced labor, successfully completing all deliverables on schedule.",
      "Created the UML diagrams and scheduled team meetings, ensuring consistent progress tracking and milestone completion.",
      "Implemented multiple elevator scheduling algorithms (SCAN, LOOK, FCFS) and compared their performance metrics.",
      "Developed comprehensive JUnit test suite achieving 85% code coverage.",
    ],
  },
  {
    id: "first-robotics",
    date: "2013 - 2017",
    title: "NASA FIRST Robotics",
    logo: "/images/MMRLogo.png",
    tags: ["Autodesk", "CNC", "Leadership"],
    links: [{ text: "More Info", url: "https://mmrambotics.com/seasons/" }],
    paragraphs: [
      "SCHOOL COURSE: FIRST Robotics Team 2200. This extracurricular program had a goal of designing then creating a robot to compete in a game within 6 weeks. Led team in designing robot's 3D models based on stringent rulesets. Our team competed in regional and national competitions, consistently ranking in the top 10% of participating teams.",
    ],
    bullets: [
      "Leader of the design team in grade 12, managing a team of 8 designers and coordinating with mechanical and electrical teams.",
      "Worked with Autodesk Inventor to 3D model our parts and create manufacturing drawings, ensuring all components met dimensional tolerances and weight constraints.",
      "Created CNC machine design drawings to create complicated parts, reducing manufacturing time by 25%.",
      "Team received the creativity award, industrial design award and engineering excellence award in 2017 for innovative robot design.",
      "Presented the designs to the entire team and other FIRST officials, demonstrating excellent communication and presentation skills.",
      "Collaborated with cross-functional teams to align on the robot's design, ensuring consistency and accuracy across all subsystems.",
      "Liaised with machinists to guarantee parts were manufactured according to design specifications, with 98% first-pass acceptance rate.",
    ],
  },
];

function Timeline({ isNight }) {
  const [activeId, setActiveId] = useState(jobs[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    jobs.forEach((job) => {
      const el = document.getElementById(job.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`exp-layout ${isNight ? "exp-night" : ""}`}>
      <div className="exp-container">
        <aside className="exp-sidebar">
          <div className="exp-tracker">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`exp-tracker-item ${activeId === job.id ? "active" : ""}`}
                onClick={() => scrollToSection(job.id)}
              >
                <span className="exp-date">{job.date}</span>
                <img src={process.env.PUBLIC_URL + job.logo} alt={job.title} />
              </div>
            ))}
          </div>
        </aside>

        <main className="exp-content">
          {jobs.map((job, index) => (
            <article key={job.id} id={job.id} className="exp-block">
              <div className="exp-block-header">
                {/* Removed File #, Added Date */}
                <h2>{job.title}</h2>
                <span className="exp-date-block">{job.date}</span>
                <div className="exp-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="exp-body">
                {job.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className="exp-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>❖ {bullet}</li>
                  ))}
                </ul>
              </div>

              {job.links && job.links.length > 0 && (
                <div className="exp-actions">
                  {job.links.map((link, i) => (
                    <Button
                      key={i}
                      buttonStyle="btn--primary"
                      MyLink={link.url}
                    >
                      {link.text}{" "}
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        style={{ marginLeft: "8px" }}
                      ></i>
                    </Button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Timeline;
