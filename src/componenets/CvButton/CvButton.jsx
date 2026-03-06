import { motion as Motion } from "framer-motion";

const CvButton = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-6">
      <a
        href="/path-to-your-cv.pdf"
        target="_blank"
        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border-2 border-[#2d3a4b] px-10 font-mono font-bold tracking-tighter text-white transition-all duration-300 hover:border-transparent hover:text-white shadow-lg">
        <span className="absolute inset-0 z-0 h-full w-full bg-linear-to-br from-[#2d3a4b] to-[#1a222c] transition-all duration-500 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]"></span>

        <span className="absolute inset-0 z-0 w-full h-full transition-opacity duration-500 opacity-0 bg-linear-to-r from-[#8bb8f3] to-[#d264fd] group-hover:opacity-100 group-hover:blur-md"></span>

        <span className="absolute inset-0 z-10 w-full h-full transition-opacity duration-300 opacity-0 bg-linear-to-r from-[#8bb8f3] to-[#d264fd] group-hover:opacity-100"></span>

        <span className="relative z-20 flex items-center gap-3">
          <span className="text-xl ">⚡</span>
          <span>ACCESS MY CV</span>

          <svg
            className="w-5 h-5 transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>

        <span className="absolute -inset-0.5 z-[-1] animate-pulse rounded-xl bg-linear-to-r from-[#8bb8f3] to-[#d264fd] opacity-0 blur-sm transition-opacity group-hover:opacity-50"></span>
      </a>
    </Motion.div>
  );
};

export default CvButton;
