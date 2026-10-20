import React from 'react';

interface AiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function AiButton({ className = '', ...props }: AiButtonProps) {
  return (
    <button
      type="button"
      aria-label="AI Assistant"
      className={`w-[86px] h-[86px] shrink-0 flex items-center justify-center hover:opacity-90 active:scale-95 transition-transform cursor-pointer select-none ${className}`}
      {...props}
    >
      <svg
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 -ml-1 overflow-visible"
      >
        <g filter="url(#filter0_d_1_4634)">
          <rect x="4" width="86" height="86" rx="20" fill="url(#paint0_linear_1_4634)" />
          <g clipPath="url(#clip0_1_4634)">
            <path
              d="M56.5445 38.7579L56.275 39.3779C56.2329 39.4788 56.1619 39.565 56.0709 39.6257C55.9798 39.6864 55.8729 39.7187 55.7635 39.7187C55.6541 39.7187 55.5472 39.6864 55.4562 39.6257C55.3651 39.565 55.2941 39.4788 55.252 39.3779L54.9825 38.7579C54.5088 37.6612 53.6412 36.7818 52.5509 36.2934L51.7196 35.9221C51.6187 35.8757 51.5333 35.8014 51.4734 35.7079C51.4135 35.6144 51.3816 35.5057 51.3816 35.3947C51.3816 35.2837 51.4135 35.175 51.4734 35.0815C51.5333 34.988 51.6187 34.9137 51.7196 34.8673L52.5049 34.5179C53.6226 34.0155 54.505 33.1037 54.9705 31.9702L55.2476 31.3009C55.2883 31.1972 55.3593 31.1082 55.4513 31.0455C55.5434 30.9828 55.6521 30.9492 55.7635 30.9492C55.8749 30.9492 55.9837 30.9828 56.0757 31.0455C56.1677 31.1082 56.2387 31.1972 56.2794 31.3009L56.5565 31.9691C57.0215 33.1028 57.9036 34.0151 59.021 34.5179L59.8075 34.8684C59.908 34.9149 59.9932 34.9893 60.0528 35.0826C60.1125 35.176 60.1442 35.2844 60.1442 35.3952C60.1442 35.506 60.1125 35.6145 60.0528 35.7079C59.9932 35.8012 59.908 35.8756 59.8075 35.9221L58.975 36.2923C57.885 36.7812 57.0177 37.661 56.5445 38.7579ZM44.8102 33.1411H49.1915V35.3317H44.8102C43.0672 35.3317 41.3956 36.0241 40.1631 37.2566C38.9307 38.4891 38.2383 40.1607 38.2383 41.9037C38.2383 45.8578 40.935 48.4384 47.0009 51.1921V48.4757H49.1915C50.9345 48.4757 52.6061 47.7833 53.8386 46.5508C55.0711 45.3183 55.7635 43.6467 55.7635 41.9037H57.9542C57.9542 44.2277 57.031 46.4565 55.3877 48.0998C53.7443 49.7431 51.5155 50.6663 49.1915 50.6663V54.5C43.7149 52.3093 36.0476 49.0233 36.0476 41.9037C36.0476 39.5797 36.9708 37.3509 38.6141 35.7076C40.2574 34.0643 42.4862 33.1411 44.8102 33.1411Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1_4634"
            x="0"
            y="0"
            width="94"
            height="94"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4634" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4634" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_1_4634"
            x1="14.8645"
            y1="8.81476"
            x2="81.3822"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6200FF" />
            <stop offset="1" stopColor="#F78434" />
          </linearGradient>
          <clipPath id="clip0_1_4634">
            <rect
              width="26.2879"
              height="26.2879"
              fill="white"
              transform="translate(33.8564 29.8555)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
