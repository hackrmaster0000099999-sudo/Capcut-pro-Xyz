import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AlertTriangle, ArrowLeft, ShieldAlert, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | CapCut Pro APK Portal',
  description: 'Official legal disclaimer, trademark notice, and educational use statement for CapCutPro.Org.in.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      <Navbar activeSection="disclaimer" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300/80">
          <Link href="/" className="hover:text-cyan-200 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-300">Disclaimer</span>
        </div>

        {/* Header Banner */}
        <div className="bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-10 rounded-3xl border border-[#1b5e70] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#144f5e] border border-[#1e687b] text-amber-400 flex items-center justify-center shadow-inner">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Legal Disclaimer &amp; Notice
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
              Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • CapCutPro.Org.in
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
            Please read this disclaimer carefully before using or referencing information provided on CapCutPro.Org.in.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-sm sm:text-base text-gray-200 leading-relaxed bg-gradient-to-b from-[#0c313a] to-[#082229] p-6 sm:p-10 rounded-3xl border border-[#16505e] shadow-lg">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h2>1. Educational &amp; Informational Purpose</h2>
            </div>
            <p>
              All materials, articles, tutorials, guides, and comparison tables published on <strong>CapCutPro.Org.in</strong> are prepared strictly for educational, informational, and personal evaluation purposes. We aim to help creators learn mobile video editing workflows and troubleshooting steps.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <h2>2. Trademark &amp; Brand Association Notice</h2>
            </div>
            <p>
              <strong>CapCut®</strong>, the CapCut logo, and associated brand assets are registered trademarks of <strong>ByteDance Pte. Ltd.</strong> This website is an independent community resource portal. <strong>CapCutPro.Org.in is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with ByteDance Ltd. or any of its subsidiaries or affiliates.</strong>
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <ExternalLink className="w-5 h-5 text-emerald-400" />
              <h2>3. Software Downloads &amp; User Responsibility</h2>
            </div>
            <p>
              Files and community download packages referenced on this site are uploaded by community contributors for testing and non-commercial educational use. While files are scanned for signatures and hash checksums, installation and usage of third-party software packages remain entirely at the user&apos;s own discretion and risk.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <HelpCircle className="w-5 h-5 text-cyan-300" />
              <h2>4. Limitation of Liability</h2>
            </div>
            <p>
              In no event shall CapCutPro.Org.in, its administrators, or authors be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use materials or software referenced on this portal.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <h2 className="text-lg font-bold text-white">5. Inquiries &amp; Legal Notices</h2>
            <p>
              For legal clarification or DMCA takedown requests, please consult our <Link href="/dmca" className="text-cyan-300 underline font-medium hover:text-cyan-200">DMCA Policy</Link> or send a message via our <Link href="/contact-us" className="text-cyan-300 underline font-medium hover:text-cyan-200">Contact Us</Link> portal.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
