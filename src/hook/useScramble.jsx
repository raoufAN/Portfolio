import { useState, useEffect, useCallback } from "react";

const useScramble = (text, duration = 1.5, isTriggered = true) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = duration * 60;

    const tick = () => {
      if (frame >= totalFrames) {
        setDisplay(text);
        return;
      }
      const progress = frame / totalFrames;
      const scrambled = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          return i / text.length < progress
            ? text[i]
            : chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(scrambled);
      frame++;
      requestAnimationFrame(tick);
    };
    tick();
  }, [text, duration]);

  useEffect(() => {
    if (isTriggered) scramble();
  }, [text, isTriggered, scramble]);

  // IMPORTANT: Return the display string, not the function!
  return display;
};

export default useScramble;
