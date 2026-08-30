import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, ArrowLeft, Target, Sparkles, Award, Video, ShieldCheck, Heart } from 'lucide-react';
import { CapCutProLogo } from '@/components/CapCutProLogo';

export const metadata: Metadata = {
  title: 'About Us | CapCut Pro APK Portal',
  description: 'Learn more about CapCutPro.Org.in, our mission to empower mobile content creators, and our commitment to educational video editing resources.',
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      <Navbar activeSection="about-us" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300/80">
          <Link href="/" className="hover:text-cyan-200 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-300">About Us</span>
        </div>

        {/* Header Banner */}
        <div className="bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-10 rounded-3xl border border-[#1b5e70] shadow-xl space-y-4">
          <div className="flex items-center gap-4">
            <CapCutProLogo size={56} />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                About CapCutPro.Org.in
              </h1>
              <p className="text-xs sm:text-sm text-cyan-200/80 mt-1">
                Empowering Creators with Free, High-Quality Video Editing Insights
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
            CapCutPro.Org.in was founded by a passionate community of digital creators, video editors, and tech enthusiasts. Our mission is to make advanced video post-production accessible to everyone—from beginner TikTok creators to professional YouTubers and short-form video editors.
          </p>
        </div>

        {/* What We Offer / Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c313a] to-[#082229] border border-[#16505e] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#144f5e] flex items-center justify-center text-cyan-300">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Our Core Mission</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Democratizing video creation by offering in-depth tutorials, performance tweaks, and troubleshooting guides for seamless editing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c313a] to-[#082229] border border-[#16505e] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#144f5e] flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Verified &amp; Safe</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every build, APK version, and tool tutorial shared on our platform is scanned with leading security engines to guarantee safety.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c313a] to-[#082229] border border-[#16505e] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#144f5e] flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Trending Assets</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Curated velocity edits, 3D smooth zooms, XML presets, and viral TikTok transition templates updated daily.
            </p>
          </div>

        </div>

        {/* Detailed Story Section */}
        <div className="space-y-6 text-sm sm:text-base text-gray-200 leading-relaxed bg-gradient-to-b from-[#0c313a] to-[#082229] p-6 sm:p-10 rounded-3xl border border-[#16505e] shadow-lg">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Video className="w-5 h-5 text-cyan-400" />
              <h2>Who We Are</h2>
            </div>
            <p>
              We are an independent research group and tech-editorial team focused on mobile cinematography, video encoding optimizations, and creator software. We believe creators shouldn&apos;t be held back by complicated rendering limitations or excessive subscription paywalls.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Award className="w-5 h-5 text-emerald-400" />
              <h2>What Makes Our Portal Unique</h2>
            </div>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
              <li><strong>Step-by-Step Installation Guides:</strong> Solving common Android installation errors (App Not Installed, Parsing Errors).</li>
              <li><strong>Version Archive:</strong> Providing reliable legacy rollbacks for older phones and low-spec hardware.</li>
              <li><strong>Export Optimization Matrix:</strong> Helping creators find the optimal bitrate, frame rates, and color profiles for Instagram Reels, YouTube Shorts, and TikTok.</li>
              <li><strong>Community Transparency:</strong> Clear disclaimers, no misleading pop-ups, and genuine creator support.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#134956]">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <Heart className="w-5 h-5 text-rose-400" />
              <h2>Join Our Growing Creator Community</h2>
            </div>
            <p>
              Have ideas for new tutorials or want to suggest a template? We&apos;d love to hear from you. Visit our <Link href="/contact-us" className="text-cyan-300 underline font-medium hover:text-cyan-200">Contact Us</Link> page to get in touch with our editorial team.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
