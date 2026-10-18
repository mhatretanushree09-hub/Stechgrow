import React, { useState } from 'react';

interface NavItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
}

export function NavItem({ label, isActive = false, onClick, icon }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[27.05px] flex items-center gap-[30px] text-left transition-colors select-none ${isActive
        ? 'text-white font-medium'
        : 'text-zinc-400 hover:text-white font-normal'
        }`}
    >
      <span className="w-[27.05px] h-[27.05px] flex items-center justify-center shrink-0 text-current">
        {icon}
      </span>
      <span className="text-[18px] leading-none tracking-normal whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

export function SidebarNavCard() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="w-[360px] h-[828px] bg-[#1E1E1E] rounded-[20px] pt-[30px] pb-[32px] pl-[34px] pr-6 flex flex-col border border-white/5 shadow-xl select-none shrink-0">
      {/* Primary Top Items */}
      <div className="flex flex-col gap-[30px]">
        {/* 1. Dashboard */}
        <NavItem
          label="Dashboard"
          isActive={activeTab === 'Dashboard'}
          onClick={() => setActiveTab('Dashboard')}
          icon={
            <svg
              width="27.05"
              height="27.05"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M13.5231 23.6653V3.38086M13.5231 11.2692H23.6653M6.08551 3.38086H20.9608C21.6781 3.38086 22.366 3.66581 22.8732 4.17302C23.3804 4.68022 23.6653 5.36815 23.6653 6.08545V20.9607C23.6653 21.678 23.3804 22.3659 22.8732 22.8731C22.366 23.3803 21.6781 23.6653 20.9608 23.6653H6.08551C5.36821 23.6653 4.68029 23.3803 4.17308 22.8731C3.66587 22.3659 3.38092 21.678 3.38092 20.9607V6.08545C3.38092 5.73028 3.45088 5.37858 3.5868 5.05045C3.72271 4.72231 3.92193 4.42416 4.17308 4.17302C4.68029 3.66581 5.36821 3.38086 6.08551 3.38086Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        {/* 2. Exploratory Data Analysis */}
        <NavItem
          label="Exploratory Data Analysis"
          isActive={activeTab === 'Exploratory Data Analysis'}
          onClick={() => setActiveTab('Exploratory Data Analysis')}
          icon={
            <svg
              width="27.05"
              height="27.05"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M14.3499 10.543L10.9842 14.9031C10.7094 15.2591 10.2093 15.3488 9.82785 15.1104L7.60359 13.7202C7.25199 13.5005 6.79442 13.5577 6.50773 13.8572L3.39209 17.0924"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 14.9867 3.30939 17.6676 5.38544 19.5M21.5716 9.09515C21.8502 10.0144 22 10.9897 22 12C22 17.5228 17.5228 22 12 22C10.9064 22 9.8538 21.8245 8.86884 21.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15.1663 13.8221L14.9052 10.8236C14.8572 10.2716 14.3073 9.88655 13.7723 10.0303L10.8657 10.8108"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        {/* 3. Data Analysis */}
        <NavItem
          label="Data Analysis"
          isActive={activeTab === 'Data Analysis'}
          onClick={() => setActiveTab('Data Analysis')}
          icon={
            <svg
              width="27.05"
              height="27.05"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                opacity="0.45"
                d="M14.3499 10.543L10.9842 14.9031C10.7094 15.2591 10.2093 15.3488 9.82785 15.1104L7.60359 13.7202C7.25199 13.5005 6.79442 13.5577 6.50773 13.8572L3.39209 17.0924"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9897 21.8502 10.0144 21.5716 9.09515"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.45"
                d="M21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15.1663 13.8221L14.9052 10.8236C14.8572 10.2716 14.3073 9.88655 13.7723 10.0303L10.8657 10.8108"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        {/* 4. Risk Detection & Health */}
        <NavItem
          label="Risk Detection & Health"
          isActive={activeTab === 'Risk Detection & Health'}
          onClick={() => setActiveTab('Risk Detection & Health')}
          icon={
            <svg
              width="27.05"
              height="27.05"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M14 3.625C14.3094 3.625 14.6062 3.75231 14.825 3.97891C15.0437 4.20552 15.1667 4.51286 15.1667 4.83333V12.4072L21.4993 8.62025C21.7671 8.46254 22.0843 8.42095 22.3816 8.50455C22.679 8.58816 22.9323 8.79016 23.0863 9.06649C23.2404 9.34283 23.2826 9.67104 23.2039 9.97953C23.1251 10.288 22.9318 10.5517 22.666 10.7131L16.3333 14.5L22.666 18.2869C22.7997 18.3657 22.9171 18.4711 23.0114 18.597C23.1057 18.7229 23.175 18.867 23.2153 19.0207C23.2556 19.1745 23.2661 19.3351 23.2463 19.4931C23.2265 19.6511 23.1766 19.8035 23.0997 19.9415C23.0228 20.0795 22.9203 20.2004 22.798 20.2972C22.6758 20.394 22.5363 20.4648 22.3876 20.5055C22.2388 20.5463 22.0838 20.5561 21.9313 20.5345C21.7789 20.5129 21.6321 20.4603 21.4993 20.3797L15.1667 16.5928V24.1667C15.1667 24.4871 15.0437 24.7945 14.825 25.0211C14.6062 25.2477 14.3094 25.375 14 25.375C13.6906 25.375 13.3938 25.2477 13.175 25.0211C12.9562 24.7945 12.8333 24.4871 12.8333 24.1667V16.5928L6.50066 20.3797C6.36793 20.4603 6.22111 20.5129 6.06867 20.5345C5.91623 20.5561 5.76117 20.5463 5.61242 20.5055C5.46367 20.4648 5.32417 20.394 5.20195 20.2972C5.07973 20.2004 4.9772 20.0795 4.90027 19.9415C4.82334 19.8035 4.77352 19.6511 4.75369 19.4931C4.73386 19.3351 4.7444 19.1745 4.78471 19.0207C4.82503 18.867 4.89431 18.7229 4.98858 18.597C5.08285 18.4711 5.20024 18.3657 5.33399 18.2869L11.6667 14.5L5.33399 10.7131C5.06822 10.5517 4.87486 10.288 4.79612 9.97953C4.71737 9.67104 4.75963 9.34283 4.91367 9.06649C5.06771 8.79016 5.32103 8.58816 5.61835 8.50455C5.91567 8.42095 6.23284 8.46254 6.50066 8.62025L12.8333 12.4072V4.83333C12.8333 4.51286 12.9562 4.20552 13.175 3.97891C13.3938 3.75231 13.6906 3.625 14 3.625Z"
                fill="currentColor"
              />
            </svg>
          }
        />

        {/* 5. Advisory Recommendation */}
        <NavItem
          label="Advisory Recommendation"
          isActive={activeTab === 'Advisory Recommendation'}
          onClick={() => setActiveTab('Advisory Recommendation')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          }
        />

        {/* 6. Report */}
        <NavItem
          label="Report"
          isActive={activeTab === 'Report'}
          onClick={() => setActiveTab('Report')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          }
        />

        {/* 7. Employee Dashboard */}
        <NavItem
          label="Employee Dashboard"
          isActive={activeTab === 'Employee Dashboard'}
          onClick={() => setActiveTab('Employee Dashboard')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M9 4v16" />
            </svg>
          }
        />
      </div>

      {/* Utilities / Bottom Items */}
      <div className="flex flex-col gap-[30px] mt-[120.65px]">
        {/* Preferences */}
        <NavItem
          label="Preferences"
          isActive={activeTab === 'Preferences'}
          onClick={() => setActiveTab('Preferences')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          }
        />

        {/* Theme */}
        <NavItem
          label="Theme"
          isActive={activeTab === 'Theme'}
          onClick={() => setActiveTab('Theme')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          }
        />

        {/* Help & Support */}
        <NavItem
          label="Help & Support"
          isActive={activeTab === 'Help & Support'}
          onClick={() => setActiveTab('Help & Support')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          }
        />

        {/* Settings */}
        <NavItem
          label="Settings"
          isActive={activeTab === 'Settings'}
          onClick={() => setActiveTab('Settings')}
          icon={
            <svg width="27.05" height="27.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default SidebarNavCard;