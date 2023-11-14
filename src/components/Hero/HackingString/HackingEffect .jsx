import React, { useState, useEffect, useRef } from "react";
import styles from "./HackingEffect.module.css";

// Hook personalizzato per gestire un intervallo
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const HackingEffect = () => {
  const words = [
    "Junior Developer",
    "Computer Science Graduate",
    "Student",
    "Software Dev. Enthusiast",
  ];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState(words[0]);
  const [currentWord, setCurrentWord] = useState(1);

  const startEffect = () => {
    let iteration = 0;

    const newIntervalId = setInterval(() => {
      setText(() =>
        words[currentWord]
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return words[currentWord][index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= words[currentWord].length) {
        if (currentWord == words.length - 1) {
          setCurrentWord(0);
        } else {
          let temp = currentWord + 1;
          setCurrentWord(temp);
        }
        clearInterval(newIntervalId);
      }

      iteration += 1 / 2;
    }, 50);
  };

  // Utilizza l'hook useInterval per avviare l'effetto ogni 5 secondi
  useInterval(() => {
    startEffect();
  }, 5000);

  return (
    <h1 id="random-text" className={styles.title}>
      I'm a {text}
    </h1>
  );
};
