'use client';

import React from 'react';
import { 
  Download, 
  Smartphone, 
  Zap, 
  HardDrive, 
  Film, 
  Settings, 
  ShieldCheck, 
  RefreshCw, 
} from 'lucide-react';

interface CapCutHeroProps {
  onDownloadClick: () => void;
}

export function CapCutHero({ onDownloadClick }: CapCutHeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0e3b46] via-[#134e5b] to-[#10434f] text-white py-12 sm:py-16 px-4 sm:px-6">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10 text-center">
        
        {/* Main Headline matching Screenshot 3 */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          CapCut Pro APK Download: Latest Version &amp; Setup Guide
        </h1>

        {/* Big White Pill CTA Button matching Screenshot 3 */}
        <div className="pt-2">
          <button
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-4.5 rounded-full text-base sm:text-lg font-bold bg-white text-[#134e5b] hover:bg-cyan-50 shadow-xl shadow-black/20 ring-4 ring-cyan-300/40 hover:ring-cyan-300/70 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Download Latest v20.6 APK (Secure Server)</span>
            <Download className="w-5 h-5 text-[#134e5b] stroke-[2.5]" />
          </button>
        </div>

        {/* Subtitle matching Screenshot 3 */}
        <p className="text-base sm:text-lg text-cyan-100 font-medium tracking-wide">
          Safe &amp; Secure Video Editing
        </p>

        {/* App Specification & Category Container Box with Perfect Symmetrical Alignment */}
        <div className="pt-4 max-w-xl sm:max-w-2xl mx-auto">
          <div className="bg-[#0b333c]/95 rounded-3xl border border-[#1e6d7e] shadow-2xl p-5 sm:p-8 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-7 text-left">
              
              {/* Row 1, Col 1: App Name */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[#10404c]" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993s-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5802 8.4116 13.8427 8.12 12 8.12c-1.8427 0-3.5802.2916-5.1368.8297L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">App Name</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">Capcut premium APK</p>
                </div>
              </div>

              {/* Row 1, Col 2: Version */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] fill-[#10404c] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Version</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">20.6</p>
                </div>
              </div>

              {/* Row 2, Col 1: Size */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Size</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">291Mb</p>
                </div>
              </div>

              {/* Row 2, Col 2: Required */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Required</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">Android 6.0+</p>
                </div>
              </div>

              {/* Row 3, Col 1: Category */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <Film className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Category</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">Video Editing App</p>
                </div>
              </div>

              {/* Row 3, Col 2: Developer */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Developer</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">Bytedance Ltd</p>
                </div>
              </div>

              {/* Row 4, Col 1: Mod Info */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Mod Info</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">Premium Unlocked</p>
                </div>
              </div>

              {/* Row 4, Col 2: Updated */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#10404c] flex items-center justify-center shrink-0 shadow-md">
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#10404c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base leading-snug">Updated</p>
                  <p className="text-cyan-200 text-xs sm:text-sm font-medium truncate mt-0.5">June 29, 2026</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
