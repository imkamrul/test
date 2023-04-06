import React from "react";

const AUD = () => {
  return (
    <svg
      width={28}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={27}
      >
        <circle cx={14.048} cy={13.529} r={13.106} fill="#D9D9D9" />
      </mask>
      <g mask="url(#prefix__a)">
        <path fill="url(#prefix__pattern0)" d="M.039.423h52.423v26.212H.039z" />
      </g>
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_214_765"
            transform="scale(.00314 .00629)"
          />
        </pattern>
        <image
          id="prefix__image0_214_765"
          width={318}
          height={159}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AUD;