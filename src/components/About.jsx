import React from "react";
import eggImage from '../assets/images/desktop/image-transform.jpg'
import cupImage from '../assets/images/desktop/image-stand-out.jpg'

const About = () => {
  return <div id="about" className="about">
  <div className="about-first">
    <div className="text-about">
        <h1>Transform your <br /> brand</h1>
        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <h4>LEARN MORE</h4>
    </div>
    <div className="egg-section">
        <img src={eggImage} alt="" />
    </div>
  </div>
  <div className="about-second">
    <div className="cup-section">
        <img src={cupImage} alt="" />
    </div>
    <div className="text-about">
        <h1>Stand out to the right <br /> audience</h1>
        <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
        <h4>LEARN MORE</h4>
    </div>
  </div>
  </div>;
};

export default About;
