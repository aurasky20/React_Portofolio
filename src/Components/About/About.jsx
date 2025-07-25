import React from "react";

import "./About.css";
import projects from "../../assets/projects/all.svg";

const About = () => {
  return (
    <section id="about" >
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={bg_title} alt="Batu" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={projects} alt="projects_image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        Hello! I'm Aura Sasi, a passionate web and mobile developer with a keen eye for design and functionality. I specialize in creating beautiful, user-friendly applications that not only look great but also perform seamlessly across devices.
                    </p>
                    <p>
                        With a background in both front-end and back-end development, I enjoy the challenge of bringing ideas to life through code. My goal is to build applications that enhance user experience and solve real-world problems.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"78%"}} /></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"30%"}} /></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Blade</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
    </section>
    
  );
};

export default About;
