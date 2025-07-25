import React from "react";

import "./Hero.css";
import profileImage from "../../assets/images/profile_aura.svg";

const Hero = () => {
  return (
    <div id="home"  className="hero">
        <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
            <img src={profileImage} alt="Aura Sasi" />
        <h2><span>I'm Aura Sasi</span>, web and mobile developer </h2>
        <p className="hero-description">
            I create beautiful and functional web and mobile applications. Explore my projects and get to know more about my work.
        </p>
        </div>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with Me
            </div>
            <div className="hero-resume">
                View My Project
            </div>
      </div>
    </div>
  );
};

export default Hero;