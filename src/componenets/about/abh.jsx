<Motion.div
  initial="hidden"
  whileInView="visible"
  whileHover="hover"
  viewport={{ once: true, amount: 0.2 }}
  className="relative w-full max-w-[400px] h-[450px] overflow-hidden rounded-xl bg-[#0a0a0a]">
  {/* 1. THE IMAGE */}
  <Motion.img
    src={myPic}
    alt="Raouf Annani"
    variants={{
      hidden: { clipPath: "inset(50% 0% 50% 0%)", scale: 1.2 },
      visible: {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
      },
      hover: { scale: 1.05 },
    }}
    className="object-cover w-full h-full opacity-90"
  />

  {/* 2. THE SVG GRID (CHBKA) */}
  <Motion.div
    className="absolute inset-0 pointer-events-none"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delay: 0.8 } },
      hover: { opacity: 0.5 },
    }}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0V30' stroke='white' stroke-opacity='0.1' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: "30px 30px",
    }}
  />

  {/* 3. SENIOR DETAIL: The Scanline */}
  <Motion.div
    variants={{
      hidden: { top: "-10%" },
      visible: {
        top: "110%",
        transition: { duration: 3, repeat: Infinity, ease: "linear" },
      },
    }}
    className="absolute left-0 w-full h-[2px] bg-white/20 blur-[1px] z-20"
  />
</Motion.div>;
