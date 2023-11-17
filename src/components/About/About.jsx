import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import "./About.css";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  {
    name: "tab1",
    label: "Main Skills",
    render: () => {
      return (
        <div className="about-tab-container">
          <div className="about-tab-skill-container">
            <h1 className="about-tab-skill-title">Front-end</h1>
            <div className="about-tab-skill-images-container">
              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/html.png")}
                  alt="HTML"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">HTML</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/css.png")}
                  alt="CSS"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">CSS</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/react.png")}
                  alt="React"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">React</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/js.png")}
                  alt="JavaScript"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">JavaScript</div>
              </div>
            </div>
          </div>
          <div className="about-tab-skill-container">
            <h1 className="about-tab-skill-title">Back-end</h1>
            <div className="about-tab-skill-images-container">
              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/js.png")}
                  alt="JavaScript"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">JavaScript</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/python.png")}
                  alt="Python"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">Python</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/java.png")}
                  alt="Java"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">Java</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/mongodb.png")}
                  alt="MongoDB"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">MongoDB</div>
              </div>
            </div>
          </div>
          <div className="about-tab-skill-container">
            <h1 className="about-tab-skill-title">Extra</h1>
            <div className="about-tab-skill-images-container">
              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/bot.png")}
                  alt="Discord"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">Bots</div>
              </div>

              <div className="about-tab-skill-item">
                <img
                  src={getImageUrl("about/skills/games.png")}
                  alt="Games"
                  className="about-tab-skill-icon"
                />
                <div className="about-tab-skill-text">Games</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab2",
    label: "Education",
    render: () => {
      return (
        <div className="about-tab-container">
          <ul className="about-tab-list">
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">
                  High school diploma technical institute
                </h1>
                <h1 className="about-tab-text sub">
                  Rome, IPSSEOA Amerigo Vespucci
                </h1>
              </div>
            </li>
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">
                  Bachelor's degree in computer science
                </h1>
                <h1 className="about-tab-text sub">
                  Rome, La Sapienza university of Rome, 2019 - 2023
                </h1>
              </div>
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    name: "tab3",
    label: "Experience",
    render: () => {
      return (
        <div className="about-tab-container">
          <ul className="about-tab-list">
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">
                  Internship for thesis development and graduation
                </h1>
                <h1 className="about-tab-text sub">
                  Rome, La Sapienza university of Rome, 04/23 - 10/23
                </h1>
              </div>
            </li>
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">
                  Looking for the first work experience
                </h1>
                <h1 className="about-tab-text sub"></h1>
              </div>
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    name: "tab4",
    label: "Certification",
    render: () => {
      return (
        <div className="about-tab-container">
          <ul className="about-tab-list">
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">React Certification</h1>
                <h1 className="about-tab-text sub">HackerRank</h1>
              </div>
            </li>
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">JavaScript</h1>
                <h1 className="about-tab-text sub">CodeWars</h1>
              </div>
            </li>
            <li className="about-tab-element">
              <div className="about-tab-texts">
                <h1 className="about-tab-text">Python</h1>
                <h1 className="about-tab-text sub">LeetCode</h1>
              </div>
            </li>
          </ul>
        </div>
      );
    },
  },
];

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

export const About = () => {
  const [activetab, setActivetab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();

    setActivetab(tab);
  };

  const isSelected = (tab) => activetab.name === tab.name;

  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="about-image-extrainfo">
          <div className="about-image-container">
            <img
              src={getImageUrl("about/aboutImage.jpg")}
              alt="Me sitting with a laptop"
              className="about-image"
            />
          </div>
        </div>
        <div className="about-tab-info">
          <div>
            <h1 className="about-title">About Me</h1>
            <h1 className="about-description">
              I am a computer science graduate student looking for my first job.
              I would like to work as a front-end or back-end developer, but any
              kind of development fascinates me, especially video game
              development.
            </h1>
          </div>
          <div className="about-tab-wrapper">
            <div className="about-tab-header">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`about-tab-item ${
                    isSelected(tab) ? "about-selected" : ""
                  }`}
                >
                  <h1 onClick={(e) => handleClick(e, tab)}>{tab.label}</h1>

                  {isSelected(tab) && (
                    <motion.div layoutId="indicator" className="indicator" />
                  )}
                </div>
              ))}
            </div>

            <div className="about-tab-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activetab.name || "empty"}
                  variants={tabContentVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {activetab && activetab?.render()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
