import React from 'react';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#121214]">
      {/* Left Sidebar Area */}
      <aside className="p-5 flex flex-col gap-4 shrink-0 overflow-y-auto">
        
        {/* Block 1: Top Brand & Search Card */}
        <div className="w-[360px] h-[192px] bg-[#1E1E1E] rounded-[20px] p-6 flex flex-col justify-between border border-white/5 select-none shadow-xl">
          
          {/* Top Row: Brand & Layout Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              {/* Stechgrow Exact Logo SVG */}
              <div className="w-[44px] h-[44px] shrink-0">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_1_5712)">
                    <rect width="43.851" height="43.851" rx="8.97787" fill="url(#paint0_linear_1_5712)"/>
                  </g>
                  <g filter="url(#filter1_d_1_5712)">
                    <path d="M30.8464 9.63281C30.9358 9.63281 30.9893 9.7322 30.9401 9.80681L27.891 14.4312C27.8703 14.4627 27.8351 14.4817 27.7973 14.4817H17.3467C17.2847 14.4817 17.2345 14.5319 17.2345 14.5939V19.01C17.2345 19.0483 17.254 19.0839 17.2862 19.1045L19.8988 20.7767C19.9733 20.8244 20.0712 20.7711 20.0715 20.6826L20.0839 17.4376C20.0841 17.3758 20.1343 17.3258 20.1961 17.3258H31.3524C31.4145 17.3258 31.4648 17.3763 31.4646 17.4384L31.4311 28.5184C31.431 28.5591 31.4088 28.5965 31.3732 28.6162L28.1028 30.4235L22.035 34.1984C22.0329 34.1997 22.0316 34.2021 22.0316 34.2046C22.0316 34.2104 22.0253 34.2139 22.0204 34.211L15.6923 30.4235L12.4435 28.6164C12.4079 28.5966 12.3858 28.5591 12.3858 28.5183V23.1921C12.3858 23.1057 12.4794 23.0517 12.5542 23.0949L21.182 28.0761C21.2167 28.0961 21.2595 28.0961 21.2942 28.0761L25.8714 25.4332C25.9154 25.4078 25.971 25.4151 26.0069 25.451L27.0864 26.5305C27.1571 26.6012 27.278 26.5512 27.278 26.4512V22.5756C27.278 22.5136 27.2278 22.4633 27.1658 22.4633H23.2899C23.19 22.4633 23.1399 22.5842 23.2106 22.6549L24.2606 23.705C24.3128 23.7571 24.3013 23.8445 24.2375 23.8814L21.2943 25.5854C21.2595 25.6055 21.2167 25.6055 21.1819 25.5854L12.4419 20.5395C12.4072 20.5194 12.3858 20.4824 12.3858 20.4423V14.5153C12.3858 14.4934 12.3923 14.4719 12.4044 14.4535L15.5496 9.68326C15.5704 9.65177 15.6056 9.63281 15.6433 9.63281H30.8464Z" fill="white"/>
                  </g>
                  <defs>
                    <filter id="filter0_i_1_5712" x="0" y="0" width="46.3199" height="47.6672" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="2.46892" dy="3.8156"/>
                      <feGaussianBlur stdDeviation="2.36791"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.34 0"/>
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_5712"/>
                    </filter>
                    <filter id="filter1_d_1_5712" x="11.488" y="9.63281" width="20.8743" height="26.3757" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="0.897787"/>
                      <feGaussianBlur stdDeviation="0.448894"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5712"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5712" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_5712" x1="5.53974" y1="4.4946" x2="39.4568" y2="43.851" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6200FF"/>
                      <stop offset="1" stopColor="#3B0099"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Brand Typography */}
              <span className="text-white text-[22px] font-medium tracking-tight">
                Stechgrow
              </span>
            </div>

            {/* Exact Toggle Layout Button */}
            <button 
              type="button"
              aria-label="Toggle layout"
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M13.5231 23.6653V3.38086M13.5231 11.2692H23.6653M6.08551 3.38086H20.9608C21.6781 3.38086 22.366 3.66581 22.8732 4.17302C23.3804 4.68022 23.6653 5.36815 23.6653 6.08545V20.9607C23.6653 21.678 23.3804 22.3659 22.8732 22.8731C22.366 23.3803 21.6781 23.6653 20.9608 23.6653H6.08551C5.36821 23.6653 4.68029 23.3803 4.17308 22.8731C3.66587 22.3659 3.38092 21.678 3.38092 20.9607V6.08545C3.38092 5.73028 3.45088 5.37858 3.5868 5.05045C3.72271 4.72231 3.92193 4.42416 4.17308 4.17302C4.68029 3.66581 5.36821 3.38086 6.08551 3.38086Z" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeMiterlimit="10" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

{/* Bottom Row: AI Quick Search Bar */}
<div className="w-[320px] h-[59.32px] bg-[#2C2C2C] rounded-[10px] px-[7px] flex items-center gap-3.5 border border-white/[0.03] select-none">
  {/* Inner Icon Box (Group 435: 48.46px x 45.13px) */}
  <div className="w-[48.46px] h-[45.13px] rounded-[5px] bg-[#1E1E1E] flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    placeholder="AI Quick Search" 
    className="w-full bg-transparent text-[20px] font-medium leading-none text-white placeholder-zinc-300 outline-none pr-3"
  />
</div>

        </div>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
      </main>
    </div>
  );
}