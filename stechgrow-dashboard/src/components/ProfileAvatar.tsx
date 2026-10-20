interface ProfileAvatarProps {
  className?: string;
  onClick?: () => void;
}

export default function ProfileAvatar({ className = '', onClick }: ProfileAvatarProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-[86px] h-[86px] shrink-0 rounded-[20px] overflow-visible cursor-pointer hover:opacity-90 transition-opacity focus:outline-none ${className}`}
      aria-label="User Profile"
    >
      <svg
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute top-0 -left-[4px] pointer-events-none"
      >
        <g filter="url(#filter0_d_profile)">
          <rect x="4" width="86" height="86" rx="20" fill="url(#pattern0_profile)" shapeRendering="crispEdges" />
          <rect x="6.5" y="2.5" width="81" height="81" rx="17.5" stroke="#1E1E1E" strokeWidth="5" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_d_profile" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_profile" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_profile" result="shape" />
          </filter>
          <pattern id="pattern0_profile" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_profile" xlinkHref="#image0_profile" transform="translate(0 -0.14459) scale(0.00166667)" />
          </pattern>
          <image id="image0_profile" width="600" height="900" preserveAspectRatio="none" href="/avatar.png" xlinkHref="/avatar.png" />
        </defs>
      </svg>

      {/* Online Status Indicator */}
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[67.23px] left-[67.19px] w-[18.81px] h-[18.81px] pointer-events-none z-10"
      >
        <circle cx="9.404" cy="9.404" r="9.404" fill="#9AFF2E" />
      </svg>
    </button>
  );
}
