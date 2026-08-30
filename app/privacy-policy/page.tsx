import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, FileText, ArrowLeft, Lock, Eye, Server, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | CapCut Pro APK Portal',
  description: 'Read the Privacy Policy of CapCutPro.Org.in to understand how we collect, handle, and safeguard your data when using our video editing resource platform.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      <Navbar activeSection="privacy-policy" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300/80">
          <Link href="/" className="hover:text-cyan-200 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-300">Privacy Policy</span>
        </div>

        {/* Page Header Header Card */}
        <div className="bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-10 rounded-3xl border border-[#1b5e70] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center shadow-inner">
            <ShieldCheck className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • CapCutPro.Org.in
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
            Welcome to CapCutPro.Org.in. We respect your privacy and are committed to protecting any personal or non-personal information you may share with us while browsing our tutorials, guides, and download resources.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-sm sm:text-base text-gray-200 leading-relaxed bg-gradient-to-b from-[#0c313a] to-[#082229] p-6 sm:p-10 rounded-3xl border border-[#16505e] shadow-lg">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Eye className="w-5 h-5 text-cyan-400" />
              <h2>1. Information We Collect</h2>
            </div>
            <p>
              When you visit CapCutPro.Org.in, we may collect non-personally identifiable information automatically transmitted by your web browser, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
              <li>Browser type, operating system, and device screen resolution</li>
              <li>Date, time, and duration of your visit</li>
              <li>Pages viewed and referral URLs</li>
              <li>Standard anonymized IP address for traffic analytics and server security</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Lock className="w-5 h-5 text-emerald-400" />
              <h2>2. How We Use Information</h2>
            </div>
            <p>
              We utilize collected technical data solely for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
              <li>Improving our website performance, load times, and CDN speeds</li>
              <li>Optimizing tutorial guides and user navigation</li>
              <li>Monitoring and preventing server abuse, DDoS attacks, or malicious scraping</li>
              <li>Responding to direct inquiries submitted via our contact channels</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Server className="w-5 h-5 text-amber-400" />
              <h2>3. Cookies and Tracking Technologies</h2>
            </div>
            <p>
              Our website may use standard HTTP cookies and local storage tokens to remember your preferences (such as bookmarked guides or dark mode display settings). You can disable cookies at any time via your browser settings without losing access to our educational content.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h2>4. Third-Party Links &amp; External Services</h2>
            </div>
            <p>
              Our guides may include links to third-party tools, social platforms (TikTok, YouTube, Instagram), or cloud mirrors. Please note that we do not govern the privacy practices or content policies of third-party domains. We advise reviewing their respective privacy statements when leaving our portal.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <UserCheck className="w-5 h-5 text-cyan-300" />
              <h2>5. Children’s Privacy (COPPA)</h2>
            </div>
            <p>
              CapCutPro.Org.in is designed for general audiences interested in video editing software tutorials. We do not knowingly collect or solicit personal information from children under 13 years of age.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <h2 className="text-lg font-bold text-white">6. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your data rights, please reach out to us via our dedicated <Link href="/contact-us" className="text-cyan-300 underline font-medium hover:text-cyan-200">Contact Us</Link> page.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
