import React, { useState, useEffect, useRef } from "react";
import "./HackingEffect.css";

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
  const letters = "qazwsxedcrfvtgbyhnujmikolp";
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
    }, 30);
  };

  // Utilizza l'hook useInterval per avviare l'effetto ogni 5 secondi
  useInterval(() => {
    startEffect();
  }, 5000);

  return (
    <div className="hack-title-container">
      <h1>I'm a</h1>
      <h1 id="random-text" className="hack-title">
        {text}
      </h1>
    </div>
  );
};
