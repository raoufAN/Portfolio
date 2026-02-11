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
      // Senior Ease: Soft acceleration with a long, smooth tail
      ease: [0.65, 0, 0.35, 1],
      delay: 2.3 + i * 0.08,
    },
  }),
};

const Curtains = () => {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.loader.loading);

  useEffect(() => {
    // Total sequence time
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
          className="fixed inset-0 overflow-hidden pointer-events-none z-9999">
          {/* Logo Layer */}
          <Motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-center justify-center z-100">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 10vw, 6rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "black",
                letterSpacing: "0.08em",
                textAlign: "center",
                margin: 0,
                fontFamily: "'Monoton','Orbitron', 'Rajdhani', sans-serif",
                lineHeight: 1,
                WebkitTextStroke: "2px #FFFFFF", // Creates the outline effect
                textStroke: "2px #FFFFFF",
                paintOrder: "stroke fill",
              }}>
              RAOUF ANNANI
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(0.9rem, 3vw, 1.8rem)",
                  fontWeight: 300,
                  letterSpacing: "0.5em",
                  marginTop: "clamp(0.8rem, 2vw, 1.5rem)",
                  color: "#CCCCCC",
                  WebkitTextStroke: "0px",
                  textStroke: "0px",
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
                className="flex-1 h-full bg-black border-r border-black/5"
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

/*
<h1 className="text-6xl font-black tracking-tighter text-transparent uppercase md:text-8xl bg-linear-to-r from-[#7054e9] to-[#af89ff] bg-clip-text">
  Portfolio
</h1>;

bg-[#F5F5F7]
*/
