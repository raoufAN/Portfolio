import "./waves.css";

const Waves = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <svg
        viewBox="0 0 900 675"
        className="absolute top-0 right-0 w-900px h-675px"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(900 0)">
          <path
            d="M0 506.3C-40.6 490.7 -81.2 475.2 -125 466.5C-168.8 457.8 -215.8 455.9 -251 434.7C-286.2 413.5 -309.5 373 -341.5 341.5C-373.5 310 -414.2 287.5 -438.4 253.1C-462.7 218.8 -470.5 172.5 -479.1 128.4C-487.7 84.2 -497 42.1 -506.2 0L0 0Z"
            fill="#b587fe"
            className="animate-wave"
          />
          <path
            d="M0 405C-32.5 392.6 -65 380.2 -100 373.2C-135.1 366.3 -172.7 364.8 -200.8 347.8C-228.9 330.8 -247.6 298.4 -273.2 273.2C-298.8 248 -331.3 230 -350.7 202.5C-370.1 175 -376.4 138 -383.3 102.7C-390.1 67.4 -397.6 33.7 -405 0L0 0Z"
            fill="#d5b6ff"
            className="animate-wave-slow"
          />
          <path
            d="M0 303.8C-24.4 294.4 -48.7 285.1 -75 279.9C-101.3 274.7 -129.5 273.6 -150.6 260.8C-171.7 248.1 -185.7 223.8 -204.9 204.9C-224.1 186 -248.5 172.5 -263.1 151.9C-277.6 131.3 -282.3 103.5 -287.5 77C-292.6 50.5 -298.2 25.3 -303.7 0L0 0Z"
            fill="#f2e7ff"
            className="animate-wave-fast"
          />
        </g>
      </svg>
      <svg
        viewBox="0 0 900 675"
        className="absolute bottom-0 left-0 w-900px h-675px"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 675)">
          <path
            d="M0 -506.2C42.1 -492.8 84.2 -479.3 124.8 -465.6C165.3 -451.8 204.3 -437.7 242 -419.2C279.7 -400.6 316.2 -377.6 350 -350C383.8 -322.4 414.9 -290.3 438.4 -253.1C461.9 -215.9 477.8 -173.7 487.8 -130.7C497.8 -87.7 502 -43.8 506.3 0L0 0Z"
            fill="#b587fe"
            className="animate-wave"
          />
          <path
            d="M0 -405C33.7 -394.2 67.4 -383.5 99.8 -372.5C132.2 -361.4 163.4 -350.2 193.6 -335.3C223.8 -320.5 253 -302.1 280 -280C307.1 -258 332 -232.2 350.7 -202.5C369.5 -172.8 382.2 -139 390.2 -104.6C398.3 -70.1 401.6 -35.1 405 0L0 0Z"
            fill="#d5b6ff"
            className="animate-wave-slow"
          />
          <path
            d="M0 -303.7C25.3 -295.7 50.5 -287.6 74.9 -279.3C99.2 -271.1 122.6 -262.6 145.2 -251.5C167.8 -240.4 189.7 -226.6 210 -210C230.3 -193.5 249 -174.2 263.1 -151.9C277.1 -129.6 286.7 -104.2 292.7 -78.4C298.7 -52.6 301.2 -26.3 303.8 0L0 0Z"
            fill="#f2e7ff"
            className="animate-wave-fast"
          />
        </g>
      </svg>

      {/* Gradient overlay matching SVG colors */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#f2e7ff]/0 via-[#d5b6ff]/30 to-[#763cfa]/90 pointer-events-none" />

      {/* Subtle blur overlay */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl bg-[#ffffff]/5 pointer-events-none" />
    </div>
  );
};

export default Waves;
