import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import "./About.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  {
    name: "tab1",
    label: "Main Skills",
    render: () => {
      return (
        <div className="tab-container">
          <div className="skill-container">
            <h1 className="skill-title">Front-end</h1>
            <div className="skill-images-container">
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/html.png")}
                  alt="HTML"
                  className="skill-icon"
                />
                <div className="skill-text">HTML</div>
              </div>
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/css.png")}
                  alt="CSS"
                  className="skill-icon"
                />
                <div className="skill-text">CSS</div>
              </div>
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/react.png")}
                  alt="React"
                  className="skill-icon"
                />
                <div className="skill-text">React</div>
              </div>
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/js.png")}
                  alt="JavaScript"
                  className="skill-icon"
                />
                <div className="skill-text">JavaScript</div>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <h1 className="skill-title">Back-end</h1>
            <div className="skill-images-container">
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/js.png")}
                  alt="JavaScript"
                  className="skill-icon"
                />
                <div className="skill-text">JavaScript</div>
              </div>

              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/python.png")}
                  alt="Python"
                  className="skill-icon"
                />
                <div className="skill-text">Python</div>
              </div>
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/java.png")}
                  alt="Java"
                  className="skill-icon"
                />
                <div className="skill-text">Java</div>
              </div>
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/mongodb.png")}
                  alt="MongoDB"
                  className="skill-icon"
                />
                <div className="skill-text">MongoDB</div>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <h1 className="skill-title">Extra</h1>
            <div className="skill-images-container">
              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/bot.png")}
                  alt="Discord"
                  className="skill-icon"
                />
                <div className="skill-text">Bots</div>
              </div>

              <div className="skill-item">
                <img
                  src={getImageUrl("about/skills/games.png")}
                  alt="Games"
                  className="skill-icon"
                />
                <div className="skill-text">Games</div>
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
        <div className="tab-container">
          <ul className="tab-list">
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">
                  High school diploma technical institute
                </h1>
                <h1 className="tab-text sub">Rome, IPSSEOA Amerigo Vespucci</h1>
              </div>
            </li>
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">
                  Bachelor's degree in computer science
                </h1>
                <h1 className="tab-text sub">
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
        <div className="tab-container">
          <ul className="tab-list">
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">
                  Internship for thesis development and graduation
                </h1>
                <h1 className="tab-text sub">
                  Rome, La Sapienza university of Rome, 04/23 - 10/23
                </h1>
              </div>
            </li>
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">
                  Looking for the first work experience
                </h1>
                <h1 className="tab-text sub"></h1>
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
        <div className="tab-container">
          <ul className="tab-list">
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">React Certification</h1>
                <h1 className="tab-text sub">HackerRank</h1>
              </div>
            </li>
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">JavaScript</h1>
                <h1 className="tab-text sub">CodeWars</h1>
              </div>
            </li>
            <li className="tab-element">
              <div className="tab-texts">
                <h1 className="tab-text">Python</h1>
                <h1 className="tab-text sub">LeetCode</h1>
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
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();

    setActiveTab(tab);
  };

  const isSelected = (tab) => activeTab.name === tab.name;

  return (
    <section className="container" id="about">
      <div className="content">
        <div className="about">
          <div className="about-image-container">
            <img
              src={getImageUrl("about/aboutImage.jpg")}
              alt="Me sitting with a laptop"
              className="about-image"
            />
          </div>
          <div>
            <h1 className="title">About Me</h1>
            <h1 className="description">
              I am a computer science graduate student looking for my first job.
              I would like to work as a front-end or back-end developer, but any
              kind of development fascinates me, especially video game
              development.
            </h1>
          </div>
        </div>
        <div className="about-tab">
          <div className="tab-wrapper">
            <div className="tab-header">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`tab-item ${isSelected(tab) ? "selected" : ""}`}
                >
                  <h1 onClick={(e) => handleClick(e, tab)}>{tab.label}</h1>

                  {isSelected(tab) && (
                    <motion.div layoutId="indicator" className="indicator" />
                  )}
                </div>
              ))}
            </div>

            <div className="tab-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.name || "empty"}
                  variants={tabContentVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {activeTab && activeTab?.render()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
