import { AnimatePresence, motion as Motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { finishLoading } from "../../redux/loaderSlice.js";

const PANELS = 6;

const logoVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.9, 1, 1, 1.05],

    transition: {
      times: [0, 0.2, 0.8, 1],
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const panelVariants = {
  initial: { y: "0%" },
  animate: (i) => ({
    y: "-100%",
    transition: {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      delay: 2.3 + i * 0.08,
    },
  }),
};

const Curtains = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    const timer = setTimeout(() => dispatch(finishLoading()), 4200);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <AnimatePresence>
      {loading && (
        <Motion.div
          key="loader-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed inset-0 flex items-center justify-center w-full h-screen overflow-hidden bg-transparent pointer-events-none z-9999">
          <Motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center z-100">
            <h1
              className="w-full flex flex-col items-center justify-center font-black uppercase tracking-[0.05em] text-black"
              style={{
                fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
                fontFamily: "'Monoton','Orbitron', 'Rajdhani', sans-serif",
                lineHeight: "0.9",
                WebkitTextStroke: "1px #FFFFFF",
                paintOrder: "stroke fill",
              }}>
              <div className="w-full space-y-2 md:space-y-0 md:flex md:items-center md:justify-center">
                <span className="block md:inline">RAOUF</span>
                <span className="block md:inline md:ml-4">ANNANI</span>
              </div>

              <span
                className="block font-light text-[#CCCCCC] tracking-[0.4em] uppercase"
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 1.2rem)",
                  marginTop: "1.5rem",
                  WebkitTextStroke: "0px",
                  paddingLeft: "0.4em",
                }}>
                portfolio
              </span>
            </h1>
          </Motion.div>

          {/* Panels Layer */}
          <div className="flex w-full h-full">
            {[...Array(PANELS)].map((_, i) => (
              <Motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                className="flex-1 h-full bg-black border-r border-white/5"
                style={{ willChange: "transform" }}
              />
            ))}
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtains;
