import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { Stars } from "./Stars/Stars";
import { HackingEffect } from "./HackingString/HackingEffect ";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title} ${styles.outside}`}>Hi,</h1>
          <h1 className={`${styles.title} ${styles.inside}`}>C-Gian</h1>
          <h1 className={`${styles.title} ${styles.outside}`}>Here</h1>
        </div>
        <HackingEffect></HackingEffect>
      </div>
      {/* <Stars></Stars> */}
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImage}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
