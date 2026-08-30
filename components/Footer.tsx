'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Crown, Download, FileText, AlertCircle, ShieldAlert, Users, Mail } from 'lucide-react';
import { CapCutProLogo } from '@/components/CapCutProLogo';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onDownloadClick?: () => void;
}

export function Footer({ onNavigate, onDownloadClick }: FooterProps) {
  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick();
    } else if (onNavigate) {
      onNavigate('download');
    }
  };

  return (
    <footer className="bg-[#0b2b33] text-gray-300 border-t border-[#134956] mt-20" id="main-footer">
      
      {/* Top Security & Feature Highlights Strip */}
      <div className="border-b border-[#124451] bg-[#082229]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e3640]/50 border border-[#16505e]/50">
              <div className="w-9 h-9 rounded-lg bg-[#144f5e] flex items-center justify-center text-cyan-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">100% Virus Free</p>
                <p className="text-gray-400 text-[11px]">Scanned with Play Protect</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e3640]/50 border border-[#16505e]/50">
              <div className="w-9 h-9 rounded-lg bg-[#144f5e] flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">No Watermark</p>
                <p className="text-gray-400 text-[11px]">4K 60FPS Pro Unlocked</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e3640]/50 border border-[#16505e]/50">
              <div className="w-9 h-9 rounded-lg bg-[#144f5e] flex items-center justify-center text-amber-400 shrink-0">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">VIP Assets Included</p>
                <p className="text-gray-400 text-[11px]">Free Velocity &amp; AI Effects</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e3640]/50 border border-[#16505e]/50">
              <div className="w-9 h-9 rounded-lg bg-[#144f5e] flex items-center justify-center text-cyan-300 shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">High-Speed CDN</p>
                <p className="text-gray-400 text-[11px]">Direct 1-Click Fast Mirrors</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Brand & Summary Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <CapCutProLogo size={42} />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    CapCut
                  </span>
                  <span className="text-amber-400 font-bold text-sm">
                    Pro
                  </span>
                  <span className="text-[10px] font-bold bg-[#0d343e] text-cyan-300 px-1.5 py-0.5 rounded border border-[#1b6374]">
                    APK
                  </span>
                </div>
                <span className="text-[11px] text-cyan-200/70">
                  Leading Video Editing Resources &amp; Tutorials Portal
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
              CapCutPro.Org.in is your dedicated resource portal for video editing enthusiasts. Explore verified setup guides, feature breakdowns, error fixes, and download resources with complete transparency and security.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-md transition-all cursor-pointer flex items-center gap-2"
                id="footer-btn-download"
              >
                <Download className="w-4 h-4" />
                <span>Download CapCut Pro APK</span>
              </button>

              <Link
                href="/about-us"
                className="px-4 py-2.5 rounded-xl font-medium bg-[#134956] hover:bg-[#195a6b] text-cyan-200 transition-colors cursor-pointer"
                id="footer-btn-about"
              >
                About Our Platform
              </Link>
            </div>
          </div>

          {/* Legal & Support Column */}
          <div className="space-y-4 text-xs bg-[#0e3640]/40 p-6 rounded-2xl border border-[#16505e]/50">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-cyan-300 border-b border-[#185969] pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>Legal &amp; Support</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-gray-200 hover:translate-x-0.5 duration-150"
                  id="footer-link-privacy"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/disclaimer" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-gray-200 hover:translate-x-0.5 duration-150"
                  id="footer-link-disclaimer"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Disclaimer</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dmca" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-gray-200 hover:translate-x-0.5 duration-150"
                  id="footer-link-dmca"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DMCA Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about-us" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-gray-200 hover:translate-x-0.5 duration-150"
                  id="footer-link-about"
                >
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-gray-200 hover:translate-x-0.5 duration-150"
                  id="footer-link-contact"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* DMCA Disclaimer Banner */}
        <div className="mt-10 pt-6 border-t border-[#124451] text-[11px] text-gray-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-gray-300">Disclaimer &amp; Trademark Notice:</strong> CapCut® is a registered trademark of ByteDance Ltd. This website is an independent educational portal and community resource for mobile video editing guides, tutorials, settings, and installation packages. We are not affiliated with, sponsored by, or officially associated with ByteDance Ltd. or its subsidiaries.
          </p>
          <p>
            All file downloads and guides are community-sourced, verified with cryptographic hash checksums, and hosted for testing and personal non-commercial educational purposes.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-6 pt-4 border-t border-[#103b46] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <span>© {new Date().getFullYear()} CapCut Pro APK Portal (CapCutPro.Org.in). All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-cyan-300 transition-colors">Disclaimer</Link>
            <span>•</span>
            <Link href="/dmca" className="hover:text-cyan-300 transition-colors">DMCA</Link>
            <span>•</span>
            <Link href="/about-us" className="hover:text-cyan-300 transition-colors">About Us</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-cyan-300 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
