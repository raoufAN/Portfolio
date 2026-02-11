import { motion as Motion } from "motion/react";
import { useState } from "react";
import Header from "../header/Header";

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
      <Header />
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

<section className="relative h-screen w-full overflow-hidden bg-[#e8e4ff]">
      <svg
        viewBox="0 0 1000 1400"
        className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="topOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 10 : 5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </filter>

          <filter id="middleOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 20 : 15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </filter>

          <filter id="inner">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 40 : 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </filter>
        </defs>

        <Motion.g
          initial={{ y: -600 }}
          animate={{ y: -200 }}
          transition={{
            delay: 2.5,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => setBlurOn(true)}>
          <ellipse cx="500" cy="500" rx="1700" ry="820" fill="#af89ff" filter="url(#topOuter)" />
          <ellipse cx="500" cy="500" rx="1900" ry="700" fill="#7054e9" filter="url(#middleOuter)" />
          <ellipse cx="500" cy="500" rx="1700" ry="650" fill="#000000" filter="url(#inner)" />
        </Motion.g>

        <g transform="translate(0, 1400)">
          <ellipse cx="500" cy="500" rx="1700" ry="820" fill="#af89ff" filter="url(#topOuter)" />
          <ellipse cx="500" cy="500" rx="1900" ry="700" fill="#7054e9" filter="url(#middleOuter)" />
          <ellipse cx="500" cy="500" rx="1700" ry="650" fill="#000000" filter="url(#inner)" />
        </g>
      </svg>
    </section>







<section className="relative h-screen w-full overflow-hidden bg-[#FFFFFF]">
      <svg
        viewBox="0 0 1000 1400"
        className="fixed inset-0 z-30 object-cover w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="topOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 10 : 5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </filter>

          <filter id="middleOuter">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 20 : 15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </filter>

          <filter id="inner">
            <Motion.feGaussianBlur
              initial={{ stdDeviation: 0 }}
              animate={{ stdDeviation: blurOn ? 40 : 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </filter>
        </defs>

  
        <Motion.g
          initial={{ y: -600 }}
          animate={{ y: -200 }}
          transition={{ delay: 3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => setBlurOn(true)}>
          
          <ellipse cx="500" cy="500" rx="1700" ry="820" fill="#6fabff" filter="url(#topOuter)" />

          
          <ellipse cx="500" cy="500" rx="1900" ry="700" fill="#5aa0ff" filter="url(#middleOuter)" />

        
          <ellipse cx="500" cy="500" rx="1700" ry="650" fill="#1f2a44" filter="url(#inner)" />
        </Motion.g>
        <g transform="translate(0,1400)">
          <ellipse cx="500" cy="500" rx="1700" ry="820" fill="#6fabff" filter="url(#topOuter)" />
          <ellipse cx="500" cy="500" rx="1900" ry="700" fill="#5aa0ff" filter="url(#middleOuter)" />
          <ellipse cx="500" cy="500" rx="1700" ry="650" fill="#1f2a44" filter="url(#inner)" />
        </g>
      </svg>
    </section>*/

/*
    
    */
