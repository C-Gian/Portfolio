import React from "react";
import "./Homepage.css";
import { HackingEffect } from "./HackingEffect/HackingEffect";
import { ParticlesBackground } from "./ParticlesBackground";

export const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-center-container">
        <h1 className="home-title">Hello, I'm C-Gian</h1>
        <div className="home-hack-text">
          <h1 className="home-title">I'm a</h1>
          <HackingEffect></HackingEffect>
        </div>
        <h1 className="home-subtitle">Scroll Down</h1>
      </div>
      <ParticlesBackground></ParticlesBackground>
    </div>
  );
};
