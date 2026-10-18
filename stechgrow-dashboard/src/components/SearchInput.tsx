import type { ChangeEvent } from 'react';

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function SearchInput({
  placeholder = 'AI Quick Search',
  value,
  onChange,
  className = '',
}: SearchInputProps) {
  return (
    <div
      className={`w-[319.99px] h-[59.32px] bg-[#2C2C2C] rounded-[10px] px-[7px] flex items-center gap-3.5 border border-white/[0.03] select-none ${className}`}
    >
      {/* Inner Icon Box (Group 435: 48.46px x 45.13px) */}
      <div className="w-[48.46px] h-[45.13px] rounded-[3.71px] bg-[#1E1E1E] flex items-center justify-center shrink-0">
        <svg
          width="17.79"
          height="17.79"
          viewBox="0 0 17.79 17.79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.926941 7.78592C0.926941 3.99825 3.99746 0.927734 7.78513 0.927734C11.5728 0.927734 14.6433 3.99825 14.6433 7.78592C14.6433 11.5736 11.5728 14.6441 7.78513 14.6441C3.99746 14.6441 0.926941 11.5736 0.926941 7.78592ZM7.78513 2.03987C4.61167 2.03987 2.03908 4.61246 2.03908 7.78592C2.03908 10.9594 4.61167 13.532 7.78513 13.532C10.9586 13.532 13.5312 10.9594 13.5312 7.78592C13.5312 4.61246 10.9586 2.03987 7.78513 2.03987Z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="white"
          />
          <path
            d="M14.7 16.2873C14.2842 16.2361 13.8908 16.0037 13.6524 15.6063L12.8425 14.2566C12.5992 13.8509 12.6631 13.3317 12.9976 12.9973C13.2152 12.7797 13.5109 12.6766 13.8026 12.6981C13.9595 12.7096 14.1152 12.7571 14.257 12.8422L15.6069 13.6521C16.4015 14.1289 16.5365 15.2255 15.8812 15.8807C15.5977 16.1642 15.2316 16.2998 14.8689 16.298C14.8124 16.2977 14.756 16.2942 14.7 16.2873Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Search Text Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[141px] bg-transparent text-[20px] font-medium leading-none text-white placeholder-zinc-300 outline-none"
      />
    </div>
  );
}
