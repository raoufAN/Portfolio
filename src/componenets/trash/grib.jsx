import React from "react";

const Grib = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-[#e8e4ff]">
      {/* TOP SVG */}
      <svg
        viewBox="0 0 1000 1000"
        className="fixed z-20 w-full h-full pointer-events-none -top-1/2"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Outer */}
          <radialGradient id="topOuter" gradientUnits="userSpaceOnUse" cx="500" cy="340" r="720">
            <stop offset="0%" stopColor="#8b7cff">
              <animate
                attributeName="stop-color"
                values="#8b7cff;#7555f7;#8b7cff"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#2a1d6b" />
          </radialGradient>

          <filter id="topInner">
            <feGaussianBlur stdDeviation="120" />
          </filter>

          {/* Middle */}
          <radialGradient id="topMiddle" gradientUnits="userSpaceOnUse" cx="500" cy="360" r="600">
            <stop offset="0%" stopColor="#4d34b1">
              <animate
                attributeName="stop-color"
                values="#4d34b1;#3e2a8e;#4d34b1"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Inner */}
          <radialGradient id="topInner" gradientUnits="userSpaceOnUse" cx="500" cy="380" r="480">
            <stop offset="0%" stopColor="#7555f7" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Motion */}
          <animate
            xlinkHref="#topOuter"
            attributeName="cy"
            values="320;360;320"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            xlinkHref="#topMiddle"
            attributeName="cy"
            values="340;380;340"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            xlinkHref="#topInner"
            attributeName="cy"
            values="360;400;360"
            dur="10s"
            repeatCount="indefinite"
          />
        </defs>

        <ellipse cx="500" cy="500" rx="1300" ry="450" fill="url(#topMiddle)" />
        <ellipse cx="500" cy="500" rx="1100" ry="420" fill="url(#topInner)" />
      </svg>

      {/* BOTTOM SVG */}
      <svg
        viewBox="0 0 1000 1000"
        className="fixed z-20 w-full h-full pointer-events-none -bottom-1/2"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Outer */}
          <radialGradient id="bottomOuter" gradientUnits="userSpaceOnUse" cx="500" cy="340" r="720">
            <stop offset="0%" stopColor="#8b7cff">
              <animate
                attributeName="stop-color"
                values="#8b7cff;#7555f7;#8b7cff"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#2a1d6b" />
          </radialGradient>

          {/* Middle */}
          <radialGradient
            id="bottomMiddle"
            gradientUnits="userSpaceOnUse"
            cx="500"
            cy="360"
            r="600">
            <stop offset="0%" stopColor="#4d34b1">
              <animate
                attributeName="stop-color"
                values="#4d34b1;#3e2a8e;#4d34b1"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Inner */}
          <radialGradient id="bottomInner" gradientUnits="userSpaceOnUse" cx="500" cy="380" r="480">
            <stop offset="0%" stopColor="#7555f7" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Motion */}
          <animate
            xlinkHref="#bottomOuter"
            attributeName="cy"
            values="680;620;680"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            xlinkHref="#bottomMiddle"
            attributeName="cy"
            values="660;600;660"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            xlinkHref="#bottomInner"
            attributeName="cy"
            values="640;580;640"
            dur="10s"
            repeatCount="indefinite"
          />
        </defs>

        <ellipse cx="500" cy="500" rx="1300" ry="450" fill="url(#bottomMiddle)" />
        <ellipse cx="500" cy="500" rx="1100" ry="420" fill="url(#bottomInner)" />
      </svg>
    </div>
  );
};

export default Grib;

<h1
  aria-hidden
  className="absolute text-5xl font-semibold text-transparent md:text-6xl blur-2xl opacity-40 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text">
  Merging physical logic
  <br />
  with digital creativity.
</h1>;

{
  /* Main Text */
}
<h1 className="relative text-5xl font-semibold tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text">
  Merging physical logic
  <br />
  with digital creativity.
</h1>;
