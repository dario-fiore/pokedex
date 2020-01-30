import React from 'react';

//TODO, how to treat svg
const WaterSvg: React.FC = props => {
  return (
    <svg width={10.37} height={14.554} viewBox="0 0 10.37 14.554" {...props}>
      <path
        data-name="Path 28"
        d="M10.37 9.369a5.185 5.185 0 01-10.37 0C0 6.489 5.185 0 5.185 0s5.185 6.519 5.185 9.369z"
        fill="#84dbff"
      />
      <path
        data-name="Path 29"
        d="M5.184 13.189a3.824 3.824 0 01-3.82-3.82.455.455 0 01.91 0 2.912 2.912 0 002.911 2.911.455.455 0 110 .91z"
        fill="#fff"
      />
    </svg>
  );
};

export default WaterSvg;
