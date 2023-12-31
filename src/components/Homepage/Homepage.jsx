import React from "react";
import "./Homepage.css";
import { HackingEffect } from "./HackingEffect/HackingEffect";
import { ParticlesBackground } from "./ParticlesBackground";

export const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-center-container">
        <div className="home-center-texts">
          <h1 className="home-title">Hello World, I'm C-Gian.</h1>
          <div className="home-hack-text">
            <h1 className="home-title">I'm a</h1>
            <HackingEffect></HackingEffect>
          </div>
        </div>
      </div>
      <div className="home-arrow">
        <a href="#about"></a>
      </div>
      <ParticlesBackground type={"home"}></ParticlesBackground>
    </div>
  );
};
