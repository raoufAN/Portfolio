const Test = () => {
  const isDark = "light";

  const bgColor = isDark ? "bg-slate-900" : "bg-slate-50";
  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-white/70" : "text-slate-600";
  const badgeBg = isDark ? "bg-white/10" : "bg-slate-900/10";
  const badgeBorder = isDark ? "border-white/20" : "border-slate-900/20";
  const badgeText = isDark ? "text-white/90" : "text-slate-900/90";
  const overlayGradient = isDark
    ? "from-transparent via-slate-900/50 to-slate-900/90"
    : "from-transparent via-slate-50/50 to-slate-50/90";
  const buttonSecondaryBg = isDark ? "bg-white/10" : "bg-slate-900/10";
  const buttonSecondaryBorder = isDark ? "border-white/20" : "border-slate-900/20";
  const buttonSecondaryHover = isDark ? "hover:bg-white/20" : "hover:bg-slate-900/20";
  const statsBorder = isDark ? "border-white/20" : "border-slate-900/20";
  const statsValue = isDark ? "text-white" : "text-slate-900";
  const statsLabel = isDark ? "text-white/60" : "text-slate-600";
  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${bgColor}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#0ea5e9" : "#3b82f6"} stopOpacity="0.8">
              <animate
                attributeName="stop-color"
                values={isDark ? "#0ea5e9; #06b6d4; #0ea5e9" : "#3b82f6; #06b6d4; #3b82f6"}
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor={isDark ? "#06b6d4" : "#0ea5e9"} stopOpacity="0.6">
              <animate
                attributeName="stop-color"
                values={isDark ? "#06b6d4; #14b8a6; #06b6d4" : "#0ea5e9; #06b6d4; #0ea5e9"}
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={isDark ? "#14b8a6" : "#06b6d4"} stopOpacity="0.8">
              <animate
                attributeName="stop-color"
                values={isDark ? "#14b8a6; #10b981; #14b8a6" : "#06b6d4; #10b981; #06b6d4"}
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <linearGradient id="gradient2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={isDark ? "#f59e0b" : "#f97316"} stopOpacity="0.6">
              <animate
                attributeName="stop-color"
                values={isDark ? "#f59e0b; #f97316; #f59e0b" : "#f97316; #ef4444; #f97316"}
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={isDark ? "#ef4444" : "#ec4899"} stopOpacity="0.4">
              <animate
                attributeName="stop-color"
                values={isDark ? "#ef4444; #ec4899; #ef4444" : "#ec4899; #f472b6; #ec4899"}
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>

        <circle cx="20%" cy="30%" r="35%" fill="url(#gradient1)" filter="url(#blur)">
          <animate attributeName="cx" values="20%; 25%; 20%" dur="15s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30%; 35%; 30%" dur="20s" repeatCount="indefinite" />
        </circle>

        <circle cx="80%" cy="70%" r="40%" fill="url(#gradient2)" filter="url(#blur)">
          <animate attributeName="cx" values="80%; 75%; 80%" dur="18s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70%; 65%; 70%" dur="22s" repeatCount="indefinite" />
        </circle>

        <ellipse
          cx="50%"
          cy="50%"
          rx="45%"
          ry="35%"
          fill="url(#gradient1)"
          opacity="0.3"
          filter="url(#blur)">
          <animate attributeName="rx" values="45%; 50%; 45%" dur="25s" repeatCount="indefinite" />
        </ellipse>
      </svg>

      <div
        className={`absolute inset-0 bg-linear-to-b ${overlayGradient} transition-all duration-500`}
      />

      <button
        className={`absolute top-8 right-8 z-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          isDark
            ? "bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-400"
            : "bg-slate-900/10 hover:bg-slate-900/20 border border-slate-900/20 text-blue-600"
        }`}>
        {/* <div className="relative w-6 h-6">
          {isDark ? (
            <Moon className="w-6 h-6 animate-theme-toggle" />
          ) : (
            <Sun className="w-6 h-6 animate-theme-toggle" />
          )}
        </div> */}
      </button>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeBg} backdrop-blur-sm border ${badgeBorder} mb-8 animate-fade-in transition-all duration-500`}>
          <Sparkles className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-blue-500"}`} />
          <span className={`text-sm ${badgeText} font-medium transition-colors duration-500`}>
            Discover Something Amazing
          </span>
        </div>

        <h1
          className={`text-6xl md:text-8xl font-bold mb-6 animate-slide-up transition-colors duration-500`}>
          <span
            className={`bg-gradient-to-r ${
              isDark
                ? "from-cyan-400 via-teal-400 to-emerald-400"
                : "from-blue-600 via-cyan-500 to-teal-500"
            } bg-clip-text text-transparent`}>
            Your Vision
          </span>
          <br />
          <span className={`${textPrimary} transition-colors duration-500`}>Brought to Life</span>
        </h1>

        <p
          className={`text-xl md:text-2xl ${textSecondary} max-w-2xl mb-12 leading-relaxed animate-slide-up-delay transition-colors duration-500`}>
          Experience the perfect blend of creativity and innovation. Transform your ideas into
          reality with stunning design and cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
          <button
            className={`group px-8 py-4 bg-gradient-to-r ${
              isDark
                ? "from-cyan-500 to-teal-500 shadow-cyan-500/50 hover:shadow-cyan-500/60"
                : "from-blue-600 to-cyan-500 shadow-blue-500/50 hover:shadow-blue-500/60"
            } rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className={`group px-8 py-4 ${buttonSecondaryBg} backdrop-blur-sm rounded-full font-semibold ${textPrimary} border ${buttonSecondaryBorder} ${buttonSecondaryHover} hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
            <Zap className="w-5 h-5" />
            Learn More
          </button>
        </div>

        <div
          className={`mt-20 grid grid-cols-3 gap-8 max-w-3xl w-full animate-fade-in-slow transition-all duration-500`}>
          <div className="text-center">
            <div
              className={`text-3xl md:text-4xl font-bold ${statsValue} mb-2 transition-colors duration-500`}>
              99%
            </div>
            <div className={`text-sm ${statsLabel} transition-colors duration-500`}>
              Satisfaction
            </div>
          </div>
          <div className={`text-center border-x ${statsBorder} transition-colors duration-500`}>
            <div
              className={`text-3xl md:text-4xl font-bold ${statsValue} mb-2 transition-colors duration-500`}>
              24/7
            </div>
            <div className={`text-sm ${statsLabel} transition-colors duration-500`}>Support</div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl md:text-4xl font-bold ${statsValue} mb-2 transition-colors duration-500`}>
              ∞
            </div>
            <div className={`text-sm ${statsLabel} transition-colors duration-500`}>
              Possibilities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
