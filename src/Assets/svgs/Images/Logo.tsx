import React from "react";

const Logo: React.FC = () => {
  return (
    <svg viewBox="0 0 200 200">
      <rect
        x="20"
        y="20"
        rx="50"
        ry="50"
        width="150"
        height="150"
        stroke="white"
        strokeWidth="10"
        fill="#12627c"
      />
      <g transform="translate(35, 35) scale(5)">
        <path
          d="M19.91,16.51A8.45,8.45,0,0,0,22,11c0-5-4.49-9-10-9S2,6,2,11s4.49,9,10,9a10.9,10.9,0,0,0,3-.41l4.59,2.3A.91.91,0,0,0,20,22a1,1,0,0,0,.62-.22,1,1,0,0,0,.35-1ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

export default Logo;
