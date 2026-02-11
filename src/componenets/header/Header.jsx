import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/modeSlice";
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import LangMenu from "../langMenu/LangMenu";

const Header = () => {
  const { mode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const [langOpen, setLangOpen] = useState(false);

  const isDark = mode === "dark";

  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-6 pointer-events-none z-100 md:px-12">
      {/* LOGO (Pure Code) */}
      <Motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="flex flex-col items-center cursor-pointer pointer-events-auto group">
        <div className="flex items-center">
          <Motion.span
            animate={{ color: isDark ? "#ffffff" : "#0f172a" }}
            className="text-lg md:text-3xl font-black tracking--0.1em">
            RAOUF
          </Motion.span>
          <Motion.span
            animate={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.5)" }}
            className="ml-2 text-lg md:text-3xl font-light tracking-[0.2em]">
            ANNANI
          </Motion.span>
        </div>
        <Motion.span
          animate={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
          className="text-[10px] tracking-[0.6em] uppercase font-bold">
          portfolio
        </Motion.span>
      </Motion.div>

      {/* UTILITY CONTROLS */}
      <Motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="flex items-center gap-3 pointer-events-auto">
        {/* Lang Selector */}
        <Motion.div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className={`p-3 rounded-full transition-all duration-500 backdrop-blur-xl border  cursor-pointer ${
              isDark
                ? "bg-white/5 border-white/10 text-white"
                : "bg-black/5 border-black/5 text-slate-900"
            }`}>
            <FaGlobe
              className={`w-[22px] h-[22px] transition-transform duration-700 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>
          <LangMenu langOpen={langOpen} isDark={isDark} setLangOpen={setLangOpen} />
        </Motion.div>

        {/* Theme Toggle */}
        <Motion.button
          onClick={() => dispatch(toggleMode())}
          className={`p-3 rounded-full transition-all duration-500 backdrop-blur-xl border cursor-pointer ${
            isDark
              ? "bg-white/5 border-white/10 text-white"
              : "bg-black/5 border-black/5 text-amber-500"
          }`}>
          <Motion.div
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200 }}>
            {isDark ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
          </Motion.div>
        </Motion.button>
      </Motion.div>
    </nav>
  );
};

export default Header;
