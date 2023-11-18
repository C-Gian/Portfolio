import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      init={init}
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 65, // Number of Particles (count)
            density: {
              enable: true,
              value_area: 300, // Area where particles will be distributed
            },
          },

          color: {
            value: ["#fe3e57", "#51a1e9"],
          },
          shape: {
            type: "triangle", // Shape type
          },
          opacity: {
            value: 0.8, // Base opacity of particles
            random: true,
            anum: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, // Base size of particles
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.5,
              sync: false,
            },
          },

          // Connecting lines
          line_linked: {
            enable: true,
            distance: 45, // Maximum distance between linked particles
            color: "random",
            opacity: 0.4,
            width: 1,
          },

          // Particle movement
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior when particles move out of the canvas
            bounce: false,
          },
        },
        // Interactivity settings
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true, // Enable hover interactivity
              mode: "grab",
            },
            onclick: {
              enable: true, // Enable for click
              mode: "push", // Push particles on click
            },
            resize: true, // Resize particles animation on window resize
          },
        },

        // Detect retina displays
        retina_detect: true,
      }}
    ></Particles>
  );
};
