import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { Stars } from "./Stars/Stars";
import { HackingEffect } from "./HackingString/HackingEffect ";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, C-Gian Here</h1>
        <HackingEffect></HackingEffect>
      </div>
      <Stars></Stars>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
