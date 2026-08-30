'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Download, Sparkles, ChevronRight, X } from 'lucide-react';
import { CapCutProLogo } from '@/components/CapCutProLogo';

export interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  activeSection?: string;
  onDownloadClick?: () => void;
}

export function Navbar({
  onNavigate,
  activeSection = 'home',
  onDownloadClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleHome = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (onDownloadClick) {
      e.preventDefault();
      onDownloadClick();
    } else if (onNavigate) {
      e.preventDefault();
      onNavigate('download');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d343e] text-white shadow-xl border-b border-[#144f5e] backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <Link
          href="/"
          onClick={handleHome}
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          id="navbar-brand-logo"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <CapCutProLogo size={40} />
          </motion.div>

          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              CapCut
            </span>
            <span className="text-amber-400 font-black text-sm sm:text-base tracking-wider">
              Pro
            </span>
            <span className="text-[10px] font-bold bg-[#09272f] text-cyan-300 px-1.5 py-0.5 rounded border border-[#16505e]">
              APK
            </span>
          </div>
        </Link>

        {/* Right Side: Hamburger Menu Button (3 Horizontal Lines) */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            id="navbar-hamburger-btn"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border ${
              isOpen
                ? 'bg-[#155464] text-white border-cyan-400 shadow-lg shadow-cyan-950/60'
                : 'bg-[#09272f] hover:bg-[#134956] text-white border-[#185969] shadow-sm'
            }`}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cyan-200" />
            ) : (
              /* Three Crisp Horizontal Lines exactly like image */
              <div className="flex flex-col items-center justify-center gap-[5px] w-6">
                <span className="w-6 h-[2.5px] bg-white rounded-full transition-all"></span>
                <span className="w-6 h-[2.5px] bg-white rounded-full transition-all"></span>
                <span className="w-6 h-[2.5px] bg-white rounded-full transition-all"></span>
              </div>
            )}
          </button>

          {/* Clean Dropdown / Drawer Menu Popup with ONLY Home & Download */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -8 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
                className="absolute right-0 mt-2.5 w-64 sm:w-72 rounded-2xl bg-[#09272f] border border-[#1b6272] shadow-2xl overflow-hidden z-50 p-3 space-y-2"
                id="hamburger-menu-dropdown"
              >
                <div className="px-3 py-1.5 border-b border-[#134956] text-[11px] font-bold text-cyan-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Quick Navigation</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>

                {/* 1. Home Button */}
                <Link
                  href="/"
                  onClick={handleHome}
                  id="menu-item-home"
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer group ${
                    activeSection === 'home'
                      ? 'bg-[#144f5e] text-cyan-200 border border-[#1f7386]'
                      : 'text-gray-200 hover:text-white hover:bg-[#103e4b]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0e3b46] border border-[#175363] flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">Home</p>
                      <p className="text-[11px] text-gray-400">Main page &amp; guides</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* 2. Download Button */}
                {onDownloadClick || onNavigate ? (
                  <button
                    type="button"
                    onClick={handleDownload}
                    id="menu-item-download"
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/40 transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black/25 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-extrabold text-white text-sm leading-tight">Download</p>
                        <p className="text-[11px] text-emerald-100/90">CapCut Pro APK v20.6</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-100/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>
                ) : (
                  <Link
                    href="/download"
                    onClick={() => setIsOpen(false)}
                    id="menu-item-download"
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/40 transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black/25 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-extrabold text-white text-sm leading-tight">Download</p>
                        <p className="text-[11px] text-emerald-100/90">CapCut Pro APK v20.6</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-100/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </header>
  );
}
