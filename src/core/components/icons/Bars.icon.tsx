import React from "react";

interface BarsProps {}

const Bars = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={25}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.945 9.843a1.325 1.325 0 100-2.65 1.325 1.325 0 000 2.65zM23.21 7.193H7.162c-.688 0-1.245.558-1.245 1.245v.159c0 .687.557 1.245 1.245 1.245H23.21c.688 0 1.245-.558 1.245-1.245v-.159c0-.687-.557-1.245-1.245-1.245zM23.21 13.813H1.865c-.688 0-1.245.557-1.245 1.244v.16c0 .686.557 1.244 1.245 1.244H23.21c.687 0 1.245-.557 1.245-1.245v-.159c0-.687-.558-1.245-1.245-1.245zM23.21.575H1.865C1.177.575.62 1.132.62 1.82v.159c0 .687.557 1.244 1.245 1.244H23.21c.687 0 1.245-.557 1.245-1.244v-.16c0-.687-.558-1.244-1.245-1.244z"
        fill="#606060"
      />
    </svg>
  );
};

export default Bars;
