import { motion as Motion } from "motion/react";
import { useState } from "react";

function HeroSec() {
  const [blurOn, setBlurOn] = useState(false);

  return (
    /* Change: Darker background (#0a0a1a) makes your specific purple #af89ff glow much better */
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a1a]">
      {/* Noise Texture: Non-negotiable for Senior level. Prevents gradient banding. */}
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <svg
        viewBox="0 0 1000 1400"
        className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* We keep your filters, but increase the deviation for a smoother light spread */}
          <filter id="topOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 90 : 5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </filter>

          <filter id="middleOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 50 : 15 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            />
          </filter>

          <filter id="inner">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 30 : 40 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
          </filter>
        </defs>

        {/* TOP GROUP: Using your original colors */}
        <Motion.g
          initial={{ y: -600 }}
          animate={{ y: -380 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => setBlurOn(true)}>
          {/* 1. Atmospheric Glow: Your #af89ff */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#af89ff"
            filter="url(#topOuter)"
            opacity="0.5"
          />

          {/* 2. Saturated Glow: Your #7054e9 */}
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#7054e9"
            filter="url(#middleOuter)"
            opacity="0.7"
          />

          {/* 3. The Core: Your #000000 (Black center) */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#000000"
            filter="url(#inner)"
            opacity="0.9"
          />
        </Motion.g>

        {/* BOTTOM GROUP: Mirrored using your colors */}
        <g transform="translate(0, 1250)">
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#af89ff"
            filter="url(#topOuter)"
            opacity="0.3"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#7054e9"
            filter="url(#middleOuter)"
            opacity="0.5"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#000000"
            filter="url(#inner)"
            opacity="0.8"
          />
        </g>
      </svg>

      {/* Text layer: Matching the premium feel of the photo */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
        <h1 className="text-white text-6xl md:text-[7rem] font-bold tracking-tighter leading-none">
          CREATIVE <br />
          <span className="italic font-light opacity-30">DEVELOPER</span>
        </h1>
        <p className="text-white/20 mt-10 text-[10px] tracking-[1.5em] uppercase font-black">
          Scroll Down
        </p>
      </div>
    </section>
  );
}

export default HeroSec;
/*
light mode
import { motion as Motion } from "motion/react";
import { useState } from "react";

function HeroSec() {
  const [blurOn, setBlurOn] = useState(false);

  return (
    /* Change: Pure clean background (#F8F9FF) makes the purples feel airy and fresh */
    <section className="relative h-screen w-full overflow-hidden bg-[#F8F9FF]">
      {/* Texture: Subtle noise is even more important in Light Mode to keep it from looking "flat" */}
      <div className="absolute inset-0 z-40 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <svg
        viewBox="0 0 1000 1400"
        className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Senior Tip: In Light Mode, use slightly tighter blurs so the colors don't wash out into grey */}
          <filter id="topOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 60 : 5 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </filter>

          <filter id="middleOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 35 : 15 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
            />
          </filter>

          <filter id="inner">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 25 : 40 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
            />
          </filter>
        </defs>

        {/* TOP GROUP: Original colors used with lower opacity for a "Glassy" look */}
        <Motion.g
          initial={{ y: -600, opacity: 0 }}
          animate={{ y: -350, opacity: 1 }}
          transition={{
            delay: 2.5,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => setBlurOn(true)}>
          {/* 1. Atmospheric Glow: #af89ff (Higher opacity to keep color vibrancy on white) */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#af89ff"
            filter="url(#topOuter)"
            opacity="0.3"
          />

          {/* 2. Saturated Glow: #7054e9 */}
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#7054e9"
            filter="url(#middleOuter)"
            opacity="0.4"
          />

          {/* 3. The Core: #000000 (Black center becomes a sophisticated "Ink" glow) */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#000000"
            filter="url(#inner)"
            opacity="0.15"
          />
        </Motion.g>

        {/* BOTTOM GROUP: Mirrored for Light Mode */}
        <g transform="translate(0, 1250)">
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#af89ff"
            filter="url(#topOuter)"
            opacity="0.2"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#7054e9"
            filter="url(#middleOuter)"
            opacity="0.3"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#000000"
            filter="url(#inner)"
            opacity="0.1"
          />
        </g>
      </svg>

      {/* Text layer: High contrast for Light Mode */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
        <h1 className="text-[#0a0a1a] text-6xl md:text-[7rem] font-bold tracking-tighter leading-none">
          CREATIVE <br />
          <span className="text-[#7054e9] italic font-light opacity-50">DEVELOPER</span>
        </h1>
        <p className="text-[#0a0a1a]/40 mt-10 text-[10px] tracking-[1.5em] uppercase font-black">
          Scroll Down
        </p>
      </div>
    </section>
  );
}

export default HeroSec;

*/


import { motion as Motion } from "motion/react";
import { useState } from "react";

function HeroSec() {
  const [blurOn, setBlurOn] = useState(false);

  return (
    /* Clean, soft background with a hint of coolness */
    <section className="relative h-screen w-full overflow-hidden bg-[#f4f7ff]">
      {/* Texture: Adds a premium 'paper' feel to the light mode */}
      <div className="absolute inset-0 z-40 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <svg
        viewBox="0 0 1000 1400"
        className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="topOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 70 : 10 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </filter>

          <filter id="middleOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 40 : 20 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
            />
          </filter>

          <filter id="inner">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 20 : 40 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            />
          </filter>
        </defs>

        {/* TOP GROUP: New Light Mode Palette */}
        <Motion.g
          initial={{ y: -600 }}
          animate={{ y: -380 }}
          transition={{
            delay: 2.5,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => setBlurOn(true)}>
          {/* 1. Atmosphere: Sky Blue (#60a5fa) */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#60a5fa"
            filter="url(#topOuter)"
            opacity="0.2"
          />

          {/* 2. Core Glow: Royal Blue (#2563eb) */}
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#2563eb"
            filter="url(#middleOuter)"
            opacity="0.15"
          />

          {/* 3. The Anchor: Deep Slate (#1e293b) - acts as a soft shadow depth */}
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#1e293b"
            filter="url(#inner)"
            opacity="0.1"
          />
        </Motion.g>

        {/* BOTTOM GROUP: Mirrored */}
        <g transform="translate(0, 1280)">
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="820"
            fill="#60a5fa"
            filter="url(#topOuter)"
            opacity="0.15"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1900"
            ry="700"
            fill="#2563eb"
            filter="url(#middleOuter)"
            opacity="0.1"
          />
          <ellipse
            cx="500"
            cy="500"
            rx="1700"
            ry="650"
            fill="#1e293b"
            filter="url(#inner)"
            opacity="0.05"
          />
        </g>
      </svg>

      {/* Hero Content */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 1.5 }}>
          <h1 className="text-[#0f172a] text-6xl md:text-[7rem] font-bold tracking-tighter leading-none">
            CREATIVE <br />
            <span className="text-[#3b82f6] italic font-light opacity-70">DEVELOPER</span>
          </h1>
          <p className="text-[#0f172a]/30 mt-10 text-[10px] tracking-[1.5em] uppercase font-black">
            Digital Experiences
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

export default HeroSec;