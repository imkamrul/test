import * as React from "react";

const CardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={26}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.4 5.2H2.6V2.6h20.8v2.6zm0 13H2.6v-7.8h20.8v7.8zm0-18.2H2.6A2.591 2.591 0 000 2.6v15.6a2.6 2.6 0 002.6 2.6h20.8a2.6 2.6 0 002.6-2.6V2.6A2.6 2.6 0 0023.4 0z"
        fill="#000"
      />
    </svg>
  );
};

export default CardIcon;
