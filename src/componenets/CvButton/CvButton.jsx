import { motion as Motion } from "framer-motion";

const CvButton = ({ isdark }) => {
  return (
    <div className="flex justify-center pt-8">
      <Motion.a
        href="/cv.pdf"
        target="_blank"
        whileHover={{ scale: 1.06, y: -4 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#111827] px-8 py-4 font-mono text-white shadow-xl">
        {/* gradient glow */}
        <span
          className={`absolute inset-0 rounded-xl bg-linear-to-r ${isdark ? "from-[#60a5fa] via-[#a78bfa] to-[#f472b6]" : "from-[#90f3b1] via-[#10e9f8] to-[#729ff4]"} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70`}></span>

        {/* shine sweep */}
        <span className="absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"></span>

        {/* content */}
        <span className="relative flex items-center gap-3">
          <span className="text-lg">🚀</span>

          <span className="tracking-wide">DOWNLOAD MY CV</span>

          <Motion.svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </Motion.svg>
        </span>
      </Motion.a>
    </div>
  );
};

export default CvButton;
