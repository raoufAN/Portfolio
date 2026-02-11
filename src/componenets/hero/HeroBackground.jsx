import { useState } from "react";
import { motion as Motion } from "framer-motion";

const HeroBackground = ({ isDark }) => {
  const colorTransition = { duration: 0.8, ease: "easeInOut" };
  const [blurOn, setBlurOn] = useState(false);

  return (
    <svg
      viewBox="0 0 1000 1400"
      className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="topOuter">
          <Motion.feGaussianBlur
            animate={{ stdDeviation: blurOn ? 90 : 5 }}
            transition={{ duration: 1.5 }}
          />
        </filter>
        <filter id="middleOuter">
          <Motion.feGaussianBlur
            animate={{ stdDeviation: blurOn ? 50 : 15 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          />
        </filter>
        <filter id="inner">
          <Motion.feGaussianBlur
            animate={{ stdDeviation: blurOn ? 30 : 40 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </filter>
      </defs>

      <Motion.g
        initial={{ y: -600 }}
        animate={{ y: -380 }}
        transition={{ delay: 3.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setBlurOn(true)}>
        {/* Top Arc */}
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1700"
          ry="820"
          animate={{ fill: isDark ? "#af89ff" : "#00CCFF" }}
          transition={colorTransition}
          filter="url(#topOuter)"
          opacity={isDark ? 0.5 : 0.25}
        />
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1900"
          ry="700"
          animate={{ fill: isDark ? "#7054e9" : "#007FFF" }}
          transition={colorTransition}
          filter="url(#middleOuter)"
          opacity={isDark ? 0.7 : 0.2}
        />
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1700"
          ry="650"
          animate={{ fill: isDark ? "#000000" : "#003366" }}
          transition={colorTransition}
          filter="url(#inner)"
          opacity={isDark ? 0.9 : 0.15}
        />
      </Motion.g>

      {/* Bottom Arc */}
      <Motion.g transform="translate(0, 1250)">
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1700"
          ry="820"
          animate={{ fill: isDark ? "#af89ff" : "#00CCFF" }}
          transition={colorTransition}
          filter="url(#topOuter)"
          opacity={isDark ? 0.3 : 0.15}
        />
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1900"
          ry="700"
          animate={{ fill: isDark ? "#7054e9" : "#007FFF" }}
          transition={colorTransition}
          filter="url(#middleOuter)"
          opacity={isDark ? 0.5 : 0.1}
        />
        <Motion.ellipse
          cx="500"
          cy="500"
          rx="1700"
          ry="650"
          animate={{ fill: isDark ? "#000000" : "#003366" }}
          transition={colorTransition}
          filter="url(#inner)"
          opacity={isDark ? 0.8 : 0.08}
        />
      </Motion.g>
    </svg>
  );
};

export default HeroBackground;
