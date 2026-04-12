import { useSelector } from "react-redux";
import Background from "../about/Background";
import SkillBox from "./SkillBox";
import { motion as Motion } from "framer-motion";
import excelpng from "../../assets/icon/excel.png";
import wordpng from "../../assets/icon/word.png";
import powerpointpng from "../../assets/icon/powerpoint.png";
import matlabpng from "../../assets/icon/matlab.png";
import psimpng from "../../assets/icon/psim.png";
import htmlpng from "../../assets/icon/html.png";
import csspng from "../../assets/icon/css.png";
import scsspng from "../../assets/icon/scss.png";
import jspng from "../../assets/icon/js.png";
import reactpng from "../../assets/icon/react.png";
import responsivepng from "../../assets/icon/responsive.png";
import tailwindpng from "../../assets/icon/tailwind.png";
import typescriptpng from "../../assets/icon/typescript.png";
import farmerpng from "../../assets/icon/farmer.png";
import reduxpng from "../../assets/icon/redux.png";
import jestpng from "../../assets/icon/jest.png";
import mysqlpng from "../../assets/icon/mysql.png";
import sqlpng from "../../assets/icon/sql.png";
import firebasepng from "../../assets/icon/firebase.png";
import amadeuspng from "../../assets/icon/amadeus.jpg";
import githubpng from "../../assets/icon/github.png";
import translationpng from "../../assets/icon/translation.png";
import routerpng from "../../assets/icon/router.png";
import { useEffect, useState, useRef, useMemo } from "react";

const skillsData = [
  { name: "Excel", icon: excelpng, category: "Office" },
  { name: "Word", icon: wordpng, category: "Office" },
  { name: "PowerPoint", icon: powerpointpng, category: "Office" },

  { name: "Matlab", icon: matlabpng, category: "Engineering" },
  { name: "PSIM", icon: psimpng, category: "Engineering" },

  { name: "HTML", icon: htmlpng, category: "Frontend" },
  { name: "CSS", icon: csspng, category: "Frontend" },
  { name: "SCSS", icon: scsspng, category: "Frontend" },
  { name: "JS", icon: jspng, category: "Frontend" },
  { name: "React", icon: reactpng, category: "Frontend" },
  { name: "Responsive", icon: responsivepng, category: "Frontend" },
  { name: "Tailwind", icon: tailwindpng, category: "Frontend" },
  { name: "TypeScript", icon: typescriptpng, category: "Frontend" },
  { name: "Framer Motion", icon: farmerpng, category: "Frontend" },
  { name: "Redux", icon: reduxpng, category: "Frontend" },

  { name: "Jest", icon: jestpng, category: "Testing" },

  { name: "SQL", icon: sqlpng, category: "Backend" },
  { name: "MySQL", icon: mysqlpng, category: "Backend" },
  { name: "Firebase", icon: firebasepng, category: "Backend" },

  { name: "GitHub", icon: githubpng, category: "Tools" },
  { name: "Amadeus", icon: amadeuspng, category: "Platform" },

  { name: "Translate", icon: translationpng, category: "Other" },
  { name: "react router", icon: routerpng, category: "Other" },
];

const Skills = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";
  const [placedSkills, setPlacedSkills] = useState([]);

  useEffect(() => {
    const calculateLayout = () => {
      const total = skillsData.length;

      const layout = skillsData.map((skill, i) => {
        // We use two orbits to prevent boxes from hitting each other
        // Inner orbit (30% radius) for even, Outer orbit (42% radius) for odd
        const isOuter = i % 2 === 0;
        const radius = isOuter ? 38 : 24;

        // Spread the angle based on the index
        const angle = (i / total) * (2 * Math.PI);

        return {
          ...skill,
          id: `skill-${skill.name.replace(/\s+/g, "")}`,
          // 50% is the center. We add the radius * sin/cos to move outward
          top: `${50 + radius * Math.sin(angle)}%`,
          left: `${50 + radius * Math.cos(angle)}%`,
        };
      });
      setPlacedSkills(layout);
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, []);

  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#05050a]" : "bg-[#F0F7FF]"
      }`}>
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Background isDark={isDark} />

      {/* HEADER - Absolute positioned to stay at top */}
      <div className="absolute z-50 w-full text-center top-8">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h2
            className={`text-2xl md:text-4xl font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>
            My <span className={isDark ? "text-[#5945a1]" : "text-[#063666]"}>Skills</span>
          </h2>
        </Motion.div>
      </div>

      {/* THE HUB (Central Ball) */}
      <Motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: isDark
            ? ["0 0 20px #5945a133", "0 0 50px #5945a166", "0 0 20px #5945a133"]
            : ["0 0 20px #06366622", "0 0 50px #06366644", "0 0 20px #06366622"],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        className={`z-30 w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center border backdrop-blur-xl ${
          isDark ? "bg-purple-900/10 border-purple-500/30" : "bg-blue-100/30 border-blue-500/30"
        }`}>
        <span
          className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-center px-2 ${isDark ? "text-purple-300" : "text-blue-800"}`}>
          Expertise
          <br />
          Center
        </span>
      </Motion.div>

      {/* DYNAMIC SKILL BOXES */}
      <div className="absolute inset-0 w-full h-full">
        {placedSkills.map((skill, index) => (
          <Motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            style={{
              position: "absolute",
              top: skill.top,
              left: skill.left,
              transform: "translate(-50%, -50%)",
              // We lock the width to ensure they don't grow into each other
              width: "180px",
              zIndex: 40,
            }}>
            {/* We scale the box down slightly on mobile to prevent overlaps */}
            <div className="scale-[0.7] md:scale-90 lg:scale-100">
              <SkillBox skill={skill} index={index} isDark={isDark} />
            </div>
          </Motion.div>
        ))}
      </div>

      {/* SVG CONNECTORS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {placedSkills.map((skill) => (
          <line
            key={`line-${skill.name}`}
            x1="50%"
            y1="50%"
            x2={skill.left}
            y2={skill.top}
            stroke={isDark ? "#5945a1" : "#063666"}
            strokeWidth="0.5"
            strokeDasharray="4,4"
            className="opacity-20"
          />
        ))}
      </svg>
    </section>
  );
};

export default Skills;
