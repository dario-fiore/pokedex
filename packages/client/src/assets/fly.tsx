import React from 'react';

const FlyingSvg: React.FC = props => {
  return (
    <svg width={17} height={17} viewBox="0 0 17 17" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <circle
            data-name="Ellipse 22"
            cx={8.5}
            cy={8.5}
            r={8.5}
            transform="translate(130 104)"
            fill="#4d9a0a"
          />
        </clipPath>
      </defs>
      <g data-name="Mask Group 1" transform="translate(-130 -104)" clipPath="url(#prefix__a)">
        <g fill="#93b2c7">
          <path
            data-name="Path 30"
            d="M142.4 108.977a1.868 1.868 0 00-1.818-1.458H130a2.3 2.3 0 002.24 1.784h4.66v1.027h-5.894a2.3 2.3 0 002.24 1.789h4.76v1.023h-5.891a2.3 2.3 0 002.24 1.784h9.345zm0 0"
          />
          <path
            data-name="Path 31"
            d="M146.104 111.655a2.566 2.566 0 00-2.506-2.016h-.006l1.387 6.314h-9.571a2.953 2.953 0 002.8 2.018h9.286zm0 0"
          />
        </g>
      </g>
    </svg>
  );
};

export default FlyingSvg;
