import React from 'react';

const ElectricSvg: React.FC = props => {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <circle
            data-name="Ellipse 26"
            cx={8}
            cy={8}
            r={8}
            transform="translate(57 104)"
            fill="#fbfa72"
          />
        </clipPath>
      </defs>
      <g data-name="Mask Group 2" transform="translate(-57 -104)" clipPath="url(#prefix__a)">
        <g fill="#fbfa72">
          <path
            data-name="Path 64"
            d="M63.194 119.806l.516-7.226-2.839.516 1.29-8.774h6.194l-2.59 6.71h3.364z"
          />
          <path
            data-name="Path 65"
            d="M69.357 110.847a.258.258 0 00-.228-.137h-2.987l2.452-6.359a.258.258 0 00-.241-.351h-6.191a.258.258 0 00-.255.221l-1.291 8.773a.258.258 0 00.3.291l2.513-.453-.492 6.894a.258.258 0 00.471.163l5.935-8.777a.258.258 0 00.014-.265zM63.52 118.8l.448-6.268a.258.258 0 00-.3-.272l-2.485.452 1.206-8.2h5.594l-2.458 6.363a.258.258 0 00.241.351h2.878z"
          />
          <path
            data-name="Path 66"
            d="M64.484 104.774h-1.549a.258.258 0 100 .516h1.548a.258.258 0 100-.516z"
          />
          <path
            data-name="Path 67"
            d="M65.774 105.032a.258.258 0 00-.258-.258h-.258a.258.258 0 000 .516h.258a.258.258 0 00.258-.258z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ElectricSvg;
