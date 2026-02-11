import { motion as Motion } from "motion/react";

function HeroSec() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#030014]">
      {/* Subtle Grain Overlay for the "High-End" look */}
      <div className="absolute inset-0 z-40 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="fixed inset-0 z-30 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Intense horizontal blur */}
          <filter id="heroGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" result="blur" />
            <feColorMatrix in="blur" type="saturate" values="1.5" />
          </filter>
        </defs>

        {/* Central Light Beam Group */}
        <Motion.g
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 3.5, // Matches your Curtains exit
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}>
          {/* The Deep Purple Flare (Wide) */}
          <ellipse
            cx="500"
            cy="850"
            rx="1200"
            ry="250"
            fill="#4f46e5"
            filter="url(#heroGlow)"
            opacity="0.6"
          />

          {/* The Vibrant Magenta/Violet Core */}
          <ellipse
            cx="500"
            cy="850"
            rx="800"
            ry="150"
            fill="#a855f7"
            filter="url(#heroGlow)"
            opacity="0.5"
          />

          {/* The "Light Meet" Center (Bright White-ish) */}
          <ellipse
            cx="500"
            cy="880"
            rx="600"
            ry="60"
            fill="#ffffff"
            filter="url(#heroGlow)"
            opacity="0.4"
          />
        </Motion.g>
      </svg>

      {/* Content Overlay */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 1 }}>
          <h1 className="text-6xl font-medium leading-tight tracking-tight text-white md:text-8xl">
            Where Technology <br />
            <span className="text-slate-400">Meets Light</span>
          </h1>
          <p className="max-w-xl mx-auto mt-6 text-lg font-light text-slate-500">
            Experience innovation shaped by energy, motion, and precision.
          </p>
        </Motion.div>

        {/* Scroll Indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute -translate-x-1/2 bottom-10 left-1/2">
          <p className="text-[10px] tracking-[0.5em] text-slate-500 uppercase font-bold">
            Scroll Down
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

export default HeroSec;
