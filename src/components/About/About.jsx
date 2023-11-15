import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.about}>
          <h1 className={styles.title}>About Me</h1>
          <h1 className={styles.description}>
            I am a computer science graduate student looking for my first job. I
            would like to work as a front-end or back-end developer, but any
            kind of development fascinates me, especially video game
            development.
          </h1>
          <div className={styles.tabsArea}>
            <Tabs>
              <TabList className={styles.tabs}>
                <Tab className={styles.tab}>Main Skills</Tab>
                <Tab className={styles.tab}>Experience</Tab>
                <Tab className={styles.tab}>Education</Tab>
                <Tab className={styles.tab}>Certification</Tab>
              </TabList>
              <TabPanel className={styles.about}>
                <div className={styles.tabContent}>
                  <ul>
                    <li>
                      <h2>p1</h2>
                    </li>
                    <li>
                      <h2>p2</h2>
                    </li>
                    <li>
                      <h2>p3</h2>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel className={styles.about}>
                <h2>porcodiooo2222</h2>
              </TabPanel>
              <TabPanel className={styles.about}>
                <h2>porcodiooo3333</h2>
              </TabPanel>
              <TabPanel className={styles.about}>
                <h2>porcodiooo3333</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in build responsive and
                optimize sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience develpong fast and optimised backend sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Ui Desiner</h3>
              <p>I'm an expert desiner experienced build good UI sites</p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
