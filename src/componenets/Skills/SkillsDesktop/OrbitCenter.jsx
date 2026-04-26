import { motion as Motion } from "framer-motion";

const OrbitCenter = ({ isDark }) => {
  return (
    <a
      href="/#contact"
      className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 group">
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="relative">
        {/* SVG CIRCLE */}
        <svg viewBox="0 0 200 200" width={160} height={160}>
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#a855f7" : "#0a4988"} />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer */}
          <circle
            cx={100}
            cy={100}
            r={90}
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="4"
            filter="url(#glow)"
          />

          {/* Inner rotating */}
          <Motion.circle
            cx={100}
            cy={100}
            r={75}
            fill="none"
            stroke="#ffffff30"
            strokeWidth="2"
            strokeDasharray="6 6"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          />

          {/* Text */}
          <path
            id="circlePath"
            fill="none"
            d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />

          <text className="text-[11px] uppercase tracking-[3px] fill-white/80">
            <textPath href="#circlePath">Annani Raouf • Portfolio • Frontend Developer •</textPath>
          </text>
        </svg>

        {/* 🔥 BALL (ENTRANCE + FLYING) */}
        <Motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.3, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
          <Motion.div
            animate={{
              x: [0, 25, 0, -25, 0],
              y: [0, -20, 0, 20, 0],
              scale: [1, 1.15, 1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/40" />

            {/* Ball */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.7)] text-white text-lg">
              🤠
            </div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </a>
  );
};

export default OrbitCenter;
