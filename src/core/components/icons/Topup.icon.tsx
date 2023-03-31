import * as React from "react";

function TopupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={27}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.096 0H6.626a6.625 6.625 0 000 13.25h5.065v-2.338a3.516 3.516 0 014.607-3.336 3.515 3.515 0 012.408 3.398v2.276h.39a6.625 6.625 0 000-13.25zM6.477 5.604l1.559.818a2.393 2.393 0 011.278 2.541 2.338 2.338 0 01-1.372 1.793v.21a.974.974 0 11-1.948 0v-.148A2.853 2.853 0 014.256 9.26a.974.974 0 111.785-.78.943.943 0 00.943.561.413.413 0 00.405-.358.483.483 0 00-.25-.507l-1.558-.78a2.416 2.416 0 01-1.27-2.603 2.338 2.338 0 011.706-1.862v-.148a.974.974 0 011.949 0v.358a2.86 2.86 0 011.387 1.434.974.974 0 11-1.785.78.959.959 0 00-.943-.562.42.42 0 00-.397.359.46.46 0 00.249.452zm12.23.047H12.47a.974.974 0 010-1.949h6.235a.974.974 0 110 1.949z"
        fill="url(#prefix__paint0_linear_35_1282)"
      />
      <path
        d="M24.817 16.78a2.19 2.19 0 00-1.692.523 1.832 1.832 0 00-1.426-1.302 2.151 2.151 0 00-1.621.468 1.987 1.987 0 00-1.497-1.247 2.183 2.183 0 00-1.824.678v-4.926a1.559 1.559 0 00-1.785-1.627 1.559 1.559 0 00-1.332 1.55v12.47a1.56 1.56 0 01-1.56-1.559v-1.41a.537.537 0 00-.537-.538h-.436a2.105 2.105 0 00-2.105 2.104v3.85a2.338 2.338 0 00.78 1.762l2.104 1.847c.431.377.986.582 1.559.577h8.573c.62 0 1.215-.247 1.653-.686l1.746-1.746a2.338 2.338 0 00.685-1.652v-7.522a1.613 1.613 0 00-1.285-1.613z"
        fill="url(#prefix__paint1_linear_35_1282)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_35_1282"
          x1={12.861}
          y1={0}
          x2={12.861}
          y2={13.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#609FFF" />
          <stop offset={1} stopColor="#92D0FD" stopOpacity={0.94} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_35_1282"
          x1={17.552}
          y1={9.331}
          x2={17.552}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#609FFF" />
          <stop offset={1} stopColor="#92B7FD" stopOpacity={0.94} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default TopupIcon;