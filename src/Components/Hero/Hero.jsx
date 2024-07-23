import React from "react";
import "./Hero.css";
import profile_img from "../../assets/ranjeet.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I am Rj,</span> React developer based in <span>India</span>
      </h1>
      <p>
        I am a passionate React developer with a solid foundation in web
        development. Always eager to learn and stay updated with industry
        trends, I’m excited to contribute my skills to a team and tackle new
        challenges.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};
export default Hero;
