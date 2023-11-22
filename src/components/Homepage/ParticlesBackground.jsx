import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = ({ type }) => {
  const [particlesKey, setParticlesKey] = useState(0); // Aggiungi uno stato per forzare il reinizializzazione

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Aggiungi l'ascolto dell'evento di ridimensionamento della finestra
  useEffect(() => {
    const handleResize = () => {
      // Aggiorna la chiave per forzare il reinizializzazione
      setParticlesKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const option =
    type == "home"
      ? {
          fpsLimit: 120,
          fullScreen: {
            enable: false,
            zIndex: 10,
          },
          background: {
            color: "#1a1a1a",
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
              anim: { enable: true, opacity_min: 0.2, speed: 1, sync: false },
            },
            size: {
              value: 3, // Base size of particles
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },

            // Connecting lines
            line_linked: {
              enable: true,
              distance: 95, // Maximum distance between linked particles
              color: "random",
              opacity: 0.4,
              width: 1,
            },

            // Particle movement
            move: {
              enable: true,
              speed: 0.5,
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
          responsive: [
            {
              breakpoint: 2000,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
            },
            {
              breakpoint: 1200,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
            },
            {
              breakpoint: 400,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
            },
          ],
          // Detect retina displays
          retina_detect: true,
        }
      : {
          fpsLimit: 120,
          fullScreen: {
            enable: true,
            zIndex: 20,
          },
          particles: {
            number: {
              value: 50, // Number of Particles (count)
              density: {
                enable: true,
                value_area: 300, // Area where particles will be distributed
              },
            },

            color: {
              value: ["#fe3e57", "#51a1e9"],
            },
            shape: {
              type: "circle", // Shape type
            },
            opacity: {
              value: 0.5, // Base opacity of particles
              random: true,
              anim: { enable: true, opacity_min: 0.2, speed: 1, sync: false },
            },
            size: {
              value: 2, // Base size of particles
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },
            // Connecting lines
            line_linked: {
              enable: true,
              distance: 15, // Maximum distance between linked particles
              color: "#00ff00",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce", // Behavior when particles move out of the canvas
              bounce: false,
            },
          },
          responsive: [
            {
              maxWidth: 1920,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
              maxWidth: 1200,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
              maxWidth: 400,
              options: {
                particles: {
                  size: {
                    value: 5,
                    anim: {
                      speed: 4,
                    },
                  },
                },
              },
            },
          ],
          // Detect retina displays
          retina_detect: true,
        };
  return (
    <Particles
      key={particlesKey}
      init={init}
      options={option}
      id={type == "home" ? "tsparticles-home" : "tsparticles-main"}
    ></Particles>
  );
};
