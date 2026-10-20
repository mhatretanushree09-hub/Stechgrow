import React, { useState } from 'react';

export interface TopSearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function TopSearchBar({
  placeholder = 'Search for anything',
  value,
  onChange,
  className = '',
}: TopSearchBarProps) {
  const [internalVal, setInternalVal] = useState('');
  const currentValue = value !== undefined ? value : internalVal;

  return (
    <div
      className={`w-[496.1px] h-[86px] bg-[#1E1E1E] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-white/5 flex items-center px-6 gap-4 select-none ${className}`}
    >
      {/* Search Icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M1.21387 10.193C1.21387 5.23344 5.23441 1.21289 10.194 1.21289C15.1536 1.21289 19.1741 5.23344 19.1741 10.193C19.1741 15.1526 15.1536 19.1732 10.194 19.1732C5.23441 19.1732 1.21387 15.1526 1.21387 10.193ZM10.194 2.66913C6.03866 2.66913 2.6701 6.03769 2.6701 10.193C2.6701 14.3483 6.03866 17.7169 10.194 17.7169C14.3493 17.7169 17.7179 14.3483 17.7179 10.193C17.7179 6.03769 14.3493 2.66913 10.194 2.66913Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="white"
        />
        <path
          d="M19.2478 21.3264C18.7034 21.2594 18.1883 20.9551 17.8761 20.4348L16.8156 18.6674C16.497 18.1362 16.5807 17.4564 17.0186 17.0184C17.3036 16.7335 17.6907 16.5985 18.0728 16.6267C18.2782 16.6417 18.4821 16.704 18.6678 16.8154L20.4353 17.8759C21.4757 18.5002 21.6525 19.936 20.7945 20.7941C20.4233 21.1652 19.9439 21.3428 19.4689 21.3404C19.3949 21.3401 19.3212 21.3354 19.2478 21.3264Z"
          fill="white"
        />
      </svg>

      {/* Search Text Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={currentValue}
        onChange={onChange || ((e) => setInternalVal(e.target.value))}
        className="h-[24px] flex-1 bg-transparent text-[20px] font-medium leading-[24px] text-white placeholder-white outline-none font-sans"
      />
    </div>
  );
}
