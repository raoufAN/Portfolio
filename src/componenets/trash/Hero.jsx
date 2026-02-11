const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#05050a] overflow-hidden text-white">
      {/* SVG Background */}
      <svg
        viewBox="0 0 1440 800"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4c1d95" stopOpacity="0" />
            <stop offset="25%" stopColor="#7c3aed" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
          </linearGradient>

          <filter id="blur">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        {/* Cinematic Light Wave */}
        <path
          d="
            M 0 430
            C 320 360, 620 360, 720 410
            C 820 360, 1120 360, 1440 430
            L 1440 540
            C 1120 480, 820 480, 720 450
            C 620 480, 320 480, 0 540
            Z
          "
          fill="url(#waveGradient)"
          filter="url(#blur)"
        />
      </svg>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-6 text-sm text-gray-300">
        <div className="font-semibold text-white">⚡</div>
        <ul className="flex gap-8 uppercase tracking-wide">
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="rounded-full border border-purple-500/40 px-4 py-1 text-purple-300 hover:bg-purple-500/10">
          Sign Up
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          Where Technology
          <br />
          <span className="text-purple-400">Meets Light</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-400">
          Experience innovation shaped by energy, motion,
          <br /> and precision.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-gray-500">
        SCROLL DOWN
      </div>
    </section>
  );
};

export default Hero;
