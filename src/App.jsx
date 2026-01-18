function App() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#e8e4ff]">
      <svg
        viewBox="0 0 1000 1400"
        className="fixed w-full  h-full pointer-events-none z-30"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="topOuter">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="middleOuter">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="inner">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <g transform="translate(0, -300) ">
          <ellipse cx="500" cy="500" rx="1900" ry="820" fill="#af89ff" filter="url(#topOuter)" />
          <ellipse cx="500" cy="500" rx="1700" ry="700" fill="#7054e9" filter="url(#middleOuter)" />
          <ellipse cx="500" cy="500" rx="1550" ry="650" fill="#000000" filter="url(#inner)" />
        </g>

        <g transform="translate(0, 1300)">
          <ellipse cx="500" cy="500" rx="1900" ry="820" fill="#af89ff" filter="url(#topOuter)" />
          <ellipse cx="500" cy="500" rx="1700" ry="700" fill="#7054e9" filter="url(#middleOuter)" />
          <ellipse cx="500" cy="500" rx="1550" ry="650" fill="#000000" filter="url(#inner)" />
        </g>
      </svg>
    </section>
  );
}

export default App;
