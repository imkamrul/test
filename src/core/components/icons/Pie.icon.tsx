import React from "react";

interface PieIconProps {}

const PieIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 100 100"
        {...props}
      >
        <g
          fill="#73ffde"
          transform="translate(53.8 46.9) translate(-53.8 -46.9)"
        >
          <path d="M62.2 52.5L68.4 32.9 64.1 37.3 59.7 51.1z"></path>
          <path d="M59 50.7L62.8 38.6 58.5 43.1 56.5 49.4z"></path>
          <path d="M71.9 57.6L78 38.4c-.5-1.3-1.1-2.5-1.8-3.6l-6.8 21.5 2.5 1.3zM75.2 59.4l4.6-14.5c-.2-1.8-.7-3.5-1.3-5.2L72.7 58l2.5 1.4zM77.4 60.6C79.3 57 80 52.7 80 48.3v-1.4l-4 12.9 1.4.8zM63 52.8l2.5 1.3L73 30.3c-.3-.4-.7-.7-1-1.1l-2.3 2.4L63 52.8z"></path>
          <path d="M57.2 44.4L53.8 47.9 55.8 49z"></path>
          <path d="M68.7 55.9l6.9-22.1c-.6-1-1.3-1.9-2-2.8l-7.4 23.5 2.5 1.4z"></path>
        </g>
        <g fill="#6765fe">
          <path d="M69.4 26.6c-4-3.7-10-6.2-16.3-6.3L53 43.6l16.4-17z"></path>
          <path d="M48.7 20.1C32.2 20.1 20 33.5 20 50s13.4 29.9 29.9 29.9c11.6 0 22.3-6.8 26.3-15.6L49.3 50V20.2c-.2-.1-.4-.1-.6-.1z"></path>
        </g>
      </svg>
    </>
  );
};

export default PieIcon;
