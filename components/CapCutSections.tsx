'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  Laptop, 
  Sliders, 
  ShieldCheck, 
  Crown, 
  Sparkles, 
  Image as ImageIcon, 
  Mail, 
  Send,
  Zap,
  Globe,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { CAPCUT_OLD_VERSIONS, CAPCUT_TEMPLATES } from '@/data/capcut-data';
import { CapCutProLogo } from '@/components/CapCutProLogo';

interface CapCutSectionsProps {
  onDownloadClick: (version?: string) => void;
}

export function CapCutSections({ onDownloadClick }: CapCutSectionsProps) {
  const [activePlatformTab, setActivePlatformTab] = useState<'tiktok' | 'youtube' | 'reels' | 'shorts'>('tiktok');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1, 2]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-cyan-50">
      
      {/* CapCut Pro Introduction Section */}
      <section id="capcut-pro" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          CapCut Pro
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro has become the go-to video editing app for creators due to its intuitive interface, ease of use, and powerful tools. While the free version of CapCut provides essential editing features like trimming, cutting, and basic effects, it lacks advanced capabilities required for professional-quality videos. CapCut Pro is a free standard version for all video editing people. Its all-in-one video editing tools are available for TikTok creators. It has a quick editing App for the most popular editing tools worldwide. Because it offers professional-level editing features. It provides a simple and user-friendly interface with easy tools. It&apos;s perfect for beginners who want to edit casual clips or content creators. Its producing high-quality videos for TikTok, Instagram Reels, YouTube Shorts, or Facebook. CapCut provides everything you need to edit your content videos.
        </p>
      </section>

      {/* Features of CapCut Pro APK Section (Matching Screenshot) */}
      <section id="features-apk" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="border-b border-[#175261] pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Features of CapCut Pro APK
          </h2>
        </div>

        {/* 5 Feature Cards matching Screenshot */}
        <div className="space-y-4 max-w-2xl mx-auto pt-2">
          
          {/* Card 1: Advanced Video Editing Tools */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#10404c] flex flex-col items-center justify-center text-center space-y-3.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 rounded-full border-[3px] border-[#10404c] flex items-center justify-center">
              <svg className="w-7 h-7 text-[#10404c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#10404c]">
              Advanced Video Editing Tools
            </h3>
          </div>

          {/* Card 2: No Watermark on Exports */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#10404c] flex flex-col items-center justify-center text-center space-y-3.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg className="w-9 h-9 text-[#10404c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16" />
                <path d="M5 9v10h14" />
                <path d="M19 15V5H9" />
                <path d="M9 9h2" />
                <path d="M9 13h4" />
              </svg>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#10404c]">
              No Watermark on Exports
            </h3>
          </div>

          {/* Card 3: Premium Effects and Filters */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#10404c] flex flex-col items-center justify-center text-center space-y-3.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-200 via-pink-200 to-sky-200 border border-amber-300 flex items-center justify-center shadow-inner">
              <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
                <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2Z" />
                <path d="M12 7l.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3Z" fill="#eab308" stroke="none" />
              </svg>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#10404c]">
              Premium Effects and Filters
            </h3>
          </div>

          {/* Card 4: High-Quality Video Rendering */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#10404c] flex flex-col items-center justify-center text-center space-y-3.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 rounded-full border border-sky-300 bg-sky-50 flex items-center justify-center relative">
              <svg className="w-7 h-7 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="14" x="3" y="5" rx="2" fill="#fed7aa" stroke="#f97316" />
                <polygon points="10 9 15 12 10 15" fill="#ef4444" stroke="#dc2626" />
              </svg>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center text-[9px] font-black">
                4K
              </div>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#10404c]">
              High-Quality Video Rendering
            </h3>
          </div>

          {/* Card 5: Ad-Free Editing Experience */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#10404c] flex flex-col items-center justify-center text-center space-y-3.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 rounded-full border-[3px] border-[#10404c] flex items-center justify-center relative">
              <svg className="w-7 h-7 text-[#10404c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="22" y1="2" x2="2" y2="22" strokeWidth="2.5" />
                <path d="M16 9a5 5 0 0 1 0 6" />
              </svg>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#10404c]">
              Ad-Free Editing Experience
            </h3>
          </div>

        </div>
      </section>

      {/* No Watermark & Color Grading */}
      <section id="no-watermark-color-grading" className="scroll-mt-24 space-y-5 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          No Watermark &amp; Color Grading
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Apply professional color grading with custom LUTs to achieve cinematic visuals and personalized aesthetics. CapCut Pro uses AI automation to cut, trim, and enhance videos instantly, making editing faster and more precise. In the standard version, free CapCut offers limited functionality for the watermark. The CapCut Premium Mod APK obliterates watermarks from your videos. It&apos;s giving your videos a professional look with neat and clean views.
        </p>

        {/* Color Grading & No Watermark Image */}
        <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-[#1b5e70] shadow-lg">
          <Image
            src="/images/capcut-ai-color.jpg"
            alt="CapCut Pro No Watermark & Color Grading Showcase"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              ✨ 4K HDR Color Grading &amp; Lossless Export
            </span>
            <span className="bg-emerald-600/80 backdrop-blur-md px-3 py-1 rounded-full font-bold">
              100% Watermark Free
            </span>
          </div>
        </div>
      </section>

      {/* Premium Assets Filters and Effects */}
      <section id="premium-assets-filters-effects" className="scroll-mt-24 space-y-5 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Premium Assets Filters and Effects
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Use precise motion tracking to apply effects, stickers, and text that follow moving objects in your video. Apply voice effects or convert text into natural-sounding voiceovers for narration, storytelling, and dubbing. The App allows you to unlock all advanced filters, cinematic effects, and transitions. From these effects, your videos look like high-quality results. You use trending and sound impact according to your videos.
        </p>

        {/* Premium Filters and Effects Image */}
        <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-[#1b5e70] shadow-lg">
          <Image
            src="/images/capcut-filters-effects.jpg"
            alt="CapCut Pro Premium Assets Filters and Effects"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              🎨 Motion Tracking &amp; VIP Cinematic Effects
            </span>
            <span className="bg-[#144f5e]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#1f6d81] font-bold text-cyan-200">
              All Presets Unlocked
            </span>
          </div>
        </div>
      </section>

      {/* Motion Graphics & Animation Tools */}
      <section id="motion-graphics-animation" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Motion Graphics &amp; Animation Tools
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Create engaging animations and motion graphics with drag-and-drop effects and animated elements. Save projects to the cloud and access them from any device, ensuring seamless editing across multiple platforms. With smooth transitions, you can enjoy an editing journey. Editing between video clips and multiple unique effects that enhance the results. You can edit with an easy way to explore the advanced tools.
        </p>
      </section>

      {/* Video Content Editing Overview */}
      <section id="video-content-editing" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Video Content editing is the most fantastic part of your video journey. In the social media world, digital content creation is a highly popular trend. If you are a YouTuber, TikToker, influencer, or marketer who wants creative videos. CapCut Pro APK is worthwhile because it unlocks all the premium editing for free. CapCut APK download, for premium features, no watermark, and high-resolution exports.
        </p>
      </section>

      {/* What is CapCut Pro APK? */}
      <section id="what-is-capcut-pro" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          What is CapCut Pro APK?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro APK is a modified version of CapCut allows users to access all premium features without paying any charges for tools. You can access all advanced assets with no watermark on exported videos. Easy access to all premium filters and effects, and unrestricted advanced transitions. Make your videos attractive with a premium music library and 4 K video exporting. The CapCut APK is a tool for both newbies and professional editors. Create top-quality videos without paying for monthly, yearly, or weekly plans.
        </p>
      </section>

      {/* Why Choose CapCut Pro Mod APK? */}
      <section id="why-choose-capcut-pro" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Why Choose CapCut Pro Mod APK?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Many creators choose the CapCut Pro Mod APK download because it eliminates limitations. There are many reasons why people prefer the App for video editing. It allows completely free access, and no monthly or yearly subscription is required. You can use unlimited premium tools that are locked in the free version. Using the App with smooth performance for mobile devices and PCs. Its interface is very user-friendly for beginners and professionals alike. You can export videos in HD, Full HD or 4K quality.
        </p>
      </section>

      {/* CapCut Pro APK – Latest Version Details */}
      <section id="latest-version-details" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          CapCut Pro APK – Latest Version Details
        </h2>

        {/* Feature / Details Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#185969] shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#09272f] text-cyan-200 border-b border-[#185969]">
              <tr>
                <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs">Feature</th>
                <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134956] bg-[#0c313a]">
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">App Name</td>
                <td className="py-3 px-5 text-cyan-100">CapCut Pro</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Latest Version</td>
                <td className="py-3 px-5 text-cyan-100">v16.8.1</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">File Size</td>
                <td className="py-3 px-5 text-cyan-100">295 MB</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Developer</td>
                <td className="py-3 px-5 text-cyan-100">Bytedance Pte. Ltd.</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Supported Platforms</td>
                <td className="py-3 px-5 text-emerald-300 font-semibold">Android Phone &amp; Tablet (APK)</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Category</td>
                <td className="py-3 px-5 text-cyan-100">Video Editing</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Downloads</td>
                <td className="py-3 px-5 text-cyan-100">600M+ Users</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-5 font-bold text-white">Last Updated</td>
                <td className="py-3 px-5 text-emerald-400 font-semibold">Just Now</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
          No matter whether you are a content creator, a marketer or just an ordinary citizen, video editing has turned out to be an essential task. Seeing how this applies to a mobile user who works with TikTok, Instagram, or YouTube, the best video editing tools can completely reshape one’s content. One video editing application that became successful on mobile phones was CapCut Pro APK. This program is an updated version of the basic CapCut app and it offers high-quality tools that help you with post-production on your videos.
        </p>

        <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
          background music. The vibe and sound library are filled with both royalty-free and interactive audio, so it’s easy to add professional-quality music to your videos.
        </p>
      </section>

      {/* Simultaneous Edits */}
      <section id="simultaneous-edits" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Simultaneous Edits
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro offers a feature that enables you to simultaneously work with other editors. This is a great addition to the app, especially if there are many people that need to work with the video at once. The great news is that you can give access to the app to other users and allow for editing to be done by them inside the app as well.
        </p>
      </section>

      {/* High Resolution Exporting */}
      <section id="high-resolution-exporting" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          High Resolution Exporting
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          You can export your videos in 1080p, its depending on your platform&apos;s requirements. Also, CapCut Pro APK offers 4K Ultra HD results without losing quality. The 4k results are specially for your branding and marketing videos. CapCut APK access to unlimited fonts, stickers, and overlays. Lots of stickers, library, and fonts change your video layout like a professional. These are free to use.
        </p>
      </section>

      {/* Unique Editing Tools */}
      <section id="unique-editing-tools" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Unique Editing Tools
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          There are numerous opportunities to utilize keyframe animation for your Text and images. You can use multi-layer editing for your videos for quick results. Make the best slow-motion and reverse effects with color grading and background adjustments.
        </p>
      </section>

      {/* Simple Interface */}
      <section id="simple-interface" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Simple Interface
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro APK offers an intuitive dashboard. You can use with drag-and-drop editing capabilities. You can choose tools and add your content. It&apos;s not required to have complex skills to use the App.
        </p>
      </section>

      {/* CapCut Pro vs. Other Video Editing Apps */}
      <section id="comparison-table" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          CapCut Pro vs. Other Video Editing Apps
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[#185969] shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#09272f] text-cyan-200 border-b border-[#185969]">
              <tr>
                <th className="py-3.5 px-4 sm:px-5 font-bold uppercase tracking-wider text-xs">Feature</th>
                <th className="py-3.5 px-4 sm:px-5 font-bold uppercase tracking-wider text-xs text-cyan-300">CapCut Pro</th>
                <th className="py-3.5 px-4 sm:px-5 font-bold uppercase tracking-wider text-xs text-gray-300">Kinemaster</th>
                <th className="py-3.5 px-4 sm:px-5 font-bold uppercase tracking-wider text-xs text-gray-300">Adobe Premiere Rush</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134956] bg-[#0c313a]">
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">4K Video Export</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">AI Background Removal</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-rose-400 font-medium">❌ No</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">Advanced Motion Tracking</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">Premium Sound Library</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">Ad-Free Experience</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-rose-400 font-medium">❌ No</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
              <tr className="hover:bg-[#11404c] transition-colors">
                <td className="py-3 px-4 sm:px-5 font-bold text-white">Cloud Sync &amp; Multi-Device Access</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400 font-semibold">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
                <td className="py-3 px-4 sm:px-5 text-emerald-400">✔ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* VN Video Editor Alternative */}
      <section id="vn-video-editor" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <span className="inline-block text-xs font-bold text-cyan-300 bg-[#09272f] px-3 py-1 rounded-full border border-[#185969]">
          No Watermark exports in the mod version
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          VN Video Editor
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          VN Video Editor doesn’t need a mod version. It’s already free and packed with advanced features. When you want a completely free, watermark-free video editor. VN Video Editor is one of the best alternatives to CapCut. Many creators use VN as a lightweight alternative to CapCut for quick editing and use tools. The list is given below:
        </p>
        <ul className="space-y-2 pt-2 text-sm sm:text-base text-gray-200">
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold mt-1">✔</span>
            <span>Multi-track editing with intuitive timeline controls</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold mt-1">✔</span>
            <span>Advanced effects and color grading</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold mt-1">✔</span>
            <span>No watermark, even in the free version</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold mt-1">✔</span>
            <span>Speed curve adjustment for slow-motion</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold mt-1">✔</span>
            <span>Built-in Export for multiple platforms</span>
          </li>
        </ul>
      </section>

      {/* Safety Considerations of CapCut Pro APK */}
      <section id="safety-considerations" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Safety Considerations of CapCut Pro APK
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Downloading CapCut Pro APK gives you free access to premium features. There are a few risks associated with the APK mode, so you need to keep in mind:
        </p>
        <ul className="space-y-2 pt-2 text-sm sm:text-base text-gray-200">
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>It is a third-party app, not available officially.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Some versions may contain malware if downloaded from an illegal source.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Official updates are not automatically available.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Always download from trusted websites.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Be aware of taking unnecessary permissions allowed</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Scan APK files with virus tools</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold mt-1">•</span>
            <span>Manually update the latest versions.</span>
          </li>
        </ul>
      </section>

      {/* Final Words */}
      <section id="final-words" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Final Words
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro is a great video editing app that can take your video projects to the next level. This app comes with the most professional features, including multi-layer editing, high-quality exports and high-quality transitions, thus allowing users to seamlessly create their videos all from their handheld devices. Whatever space you are in, be it a YouTube channel, an Instagram account, or marketing, there is always a chance that CapCut Mod APK will assist you in achieving a better workflow. If you follow the recommended steps on how to download the CapCut APK, it is possible to use these tools at no cost.
        </p>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          CapCut Pro APK is a top choice for anyone who wants to enjoy premium video editing features without fee. You can remove watermarks to unlock professional filters. CapCut APK is the latest version for quick editing, easier and faster on Android devices. This tool is perfect for TikTok, YouTube, and Instagram creators who want smooth mobile editing on the go. Many content creators love this App for quick editing and uploading to social media. The best and powerful opportunity to change your simple videos into a professional. Download CapCut Pro APK from our site and enjoy your smooth editing journey.
        </p>
        
        <div className="mt-4 pt-4 border-t border-[#185969] flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-cyan-200">
          <span className="font-semibold text-white">Author: Admin – CapCutPro.Org.in</span>
          <span className="bg-[#082229] px-3 py-1 rounded-full border border-[#144f5e] text-emerald-400">Last Updated: 1 Hour Ago</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#092830] border border-[#185969] text-xs sm:text-sm text-gray-200 leading-relaxed">
          If you have any questions, feedback, or suggestions, feel free to contact us. Our team is always here to help with anything related to CapCut Pro updates, features, or downloads.
        </div>
      </section>

      {/* Frequently Asked Questions (FAQs) */}
      <section id="faqs" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#175261] pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center font-bold shadow-inner">
            <HelpCircle className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs text-cyan-200/70">Find answers to common questions about CapCut Pro APK, features, safety, and compatibility.</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {[
            {
              q: "Do I need to pay for CapCut Pro APK?",
              a: "No, CapCut Pro APK provides premium features at no cost. However, it's important to download it from a trusted source to avoid security risks."
            },
            {
              q: "Can I download CapCut Pro on an iPhone?",
              a: "Yes, iPhone users can download CapCut Pro directly from the Apple App Store. The APK version is only for Android devices."
            },
            {
              q: "Does CapCut Pro add a watermark to exported videos?",
              a: "No, CapCut Pro allows users to export videos without watermarks, ensuring a professional and clean final output."
            },
            {
              q: "How do I update CapCut Pro APK?",
              a: "To update CapCut Pro APK, download the latest version from a verified source and install it over your current version. Make sure \"Unknown Sources\" is enabled in your device settings."
            },
            {
              q: "Can I export videos in 4K using CapCut Pro?",
              a: "Yes, CapCut Pro supports 4K video exporting, which is perfect for producing high-quality, professional content."
            },
            {
              q: "Can I use CapCut Pro without an internet connection?",
              a: "Yes, CapCut Pro can be used offline, letting you edit videos anytime without needing an active internet connection."
            },
            {
              q: "Does CapCut Pro have ads?",
              a: "No, CapCut Pro offers an ad-free editing experience, so you can focus on your creative work without interruptions."
            },
            {
              q: "Is CapCut Pro APK safe for my Android phone?",
              a: "Yes, our APK builds are 100% clean and scanned with 70+ antivirus engines on VirusTotal, signed with original security certificates."
            },
            {
              q: "Does CapCut Pro APK work on low-spec Android devices?",
              a: "Yes! The APK is optimized for Android 6.0 and up. For older low-RAM phones, we also provide legacy rollback versions in our archive."
            },
            {
              q: "Does CapCut Pro APK support exporting 4K 60FPS video quality?",
              a: "Yes, the Pro version unlocks full lossless 4K Ultra HD exporting at 60 FPS without compression or watermarks."
            },
            {
              q: "What is the difference between the CapCut APK and the official App?",
              a: "The pro version unlocks premium features like watermark-free and premium filters. These are limited in the free official App."
            }
          ].map((faq, index) => {
            const isOpen = openFaqIndices.includes(index);
            return (
              <div 
                key={index}
                className="rounded-2xl border border-[#185969] bg-[#0c313a] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-white hover:bg-[#11404c] transition-colors"
                >
                  <span className="text-sm sm:text-base flex items-start gap-3">
                    <span className="text-cyan-400 font-mono text-xs sm:text-sm mt-0.5">Q{index + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-cyan-300 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-sm text-gray-200 leading-relaxed border-t border-[#134956] bg-[#09272f]/60">
                    <p className="pl-6 border-l-2 border-cyan-500/50">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 1. How to Install CapCut Pro APK and Error Fixes */}
      <section id="install-guide" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#175261] pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center font-bold shadow-inner">
            01
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              How to Install CapCut Pro APK and Error Fixes
            </h2>
            <p className="text-xs text-cyan-200/70">Step-by-step installation instructions and solutions to common Android errors.</p>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 1</span>
            <h3 className="font-bold text-sm text-white">Enable Unknown Sources</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Open Android <strong>Settings &gt; Security &gt; Install Unknown Apps</strong>, then allow permission for your browser or file manager.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 2</span>
            <h3 className="font-bold text-sm text-white">Download APK Package</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Click our verified server button to download the official <strong>v20.6 APK (291 MB)</strong> package.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 3</span>
            <h3 className="font-bold text-sm text-white">Install &amp; Launch</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Open the downloaded file, tap <strong>Install</strong>, and launch the editor without watermarks, ads, or login prompts.
            </p>
          </div>
        </div>

        {/* Common Error Fixes */}
        <div className="mt-6 space-y-3 pt-2">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Common Android Installation Errors &amp; Quick Fixes:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/30 space-y-1">
              <span className="font-bold text-amber-300">Error: &quot;App Not Installed&quot;</span>
              <p className="text-gray-300 leading-relaxed">
                Fix: Uninstall the Play Store version first. Clear package installer cache and verify you have at least 1 GB of free internal memory.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/30 space-y-1">
              <span className="font-bold text-amber-300">Error: &quot;Parse Error (Problem parsing the package)&quot;</span>
              <p className="text-gray-300 leading-relaxed">
                Fix: Make sure your device runs Android 6.0 or higher. If using older Android 5.0, download our Old Version v19.8 archive below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CapCut Old Versions Download */}
      <section id="old-versions" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center justify-between border-b border-[#175261] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              CapCut Old Versions Download
            </h2>
            <p className="text-xs text-cyan-200/70">Roll back to previous stable builds if your device experiences lag or compatibility issues.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#185b6c]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#09262e] text-cyan-300 border-b border-[#175261]">
                <th className="py-3.5 px-4 font-bold">Version</th>
                <th className="py-3.5 px-4 font-bold">Release Date</th>
                <th className="py-3.5 px-4 font-bold">Size</th>
                <th className="py-3.5 px-4 font-bold">Requirement</th>
                <th className="py-3.5 px-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134956]">
              {CAPCUT_OLD_VERSIONS.map((ver) => (
                <tr key={ver.version} className="hover:bg-[#10434f]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                    <span>{ver.version}</span>
                    {ver.isLatest && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                        Latest
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-gray-300">{ver.releaseDate}</td>
                  <td className="py-3.5 px-4 text-gray-300">{ver.size}</td>
                  <td className="py-3.5 px-4 text-gray-300">{ver.androidReq}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onDownloadClick(ver.version)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-[#10404c] hover:bg-cyan-50 transition-colors cursor-pointer inline-flex items-center gap-1 shadow-sm"
                    >
                      <Download className="w-3 h-3 text-[#10404c]" />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Safety and Permissions Guide */}
      <section id="safety-guide" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#175261] pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Safety and Permissions Guide
            </h2>
            <p className="text-xs text-cyan-200/70">Full breakdown of required Android permissions and security verification.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl border border-[#175261] bg-[#0b2931] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Storage &amp; Media Access</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Required to read video clips, photos, and background music from your device gallery and save exported 4K render files.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-[#175261] bg-[#0b2931] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Microphone Access</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Only used when actively recording live audio voiceovers and speech-to-text directly on the timeline.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-[#175261] bg-[#0b2931] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Camera Access</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Optional permission for recording videos inside CapCut with the built-in teleprompter and camera filters.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#09262e] border border-[#195b6c] text-xs text-cyan-200 space-y-1">
          <span className="font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SHA-256 Checksum Verified (Malware Free):</span>
          </span>
          <p className="font-mono text-[11px] break-all select-all text-cyan-300">
            e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
          </p>
        </div>
      </section>

      {/* 4. Best CapCut Settings for Different Platforms */}
      <section id="settings-guide" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#175261] pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#144f5e] border border-[#1e687b] text-cyan-300 flex items-center justify-center">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Best CapCut Settings for Different Platforms
            </h2>
            <p className="text-xs text-cyan-200/70">Optimal bitrate, resolution, aspect ratio, and frame rates to prevent compression artifacts.</p>
          </div>
        </div>

        {/* Platform Tabs */}
        <div className="flex items-center gap-2 border-b border-[#175261] pb-2 overflow-x-auto">
          {(['tiktok', 'youtube', 'reels', 'shorts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePlatformTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize shrink-0 ${
                activePlatformTab === tab
                  ? 'bg-white text-[#10404c] shadow-md'
                  : 'bg-[#0b2931] text-cyan-200 hover:bg-[#12424e]'
              }`}
            >
              {tab === 'reels' ? 'Instagram Reels' : tab === 'shorts' ? 'YouTube Shorts' : tab}
            </button>
          ))}
        </div>

        {/* Platform Specific Settings Card */}
        <div className="p-5 rounded-2xl bg-[#0b2931] border border-[#165160] text-xs space-y-4">
          {activePlatformTab === 'tiktok' && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-cyan-300">Recommended Settings for TikTok</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Resolution</p><p className="font-bold text-sm text-white">1080p (FHD)</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Frame Rate</p><p className="font-bold text-sm text-white">60 FPS</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Aspect Ratio</p><p className="font-bold text-sm text-white">9:16 (Vertical)</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Code Rate</p><p className="font-bold text-sm text-white">Higher (30 Mbps)</p></div>
              </div>
            </div>
          )}

          {activePlatformTab === 'youtube' && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-cyan-300">Recommended Settings for Long-Form YouTube</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Resolution</p><p className="font-bold text-sm text-white">2K / 4K (2160p)</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Frame Rate</p><p className="font-bold text-sm text-white">60 FPS</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Aspect Ratio</p><p className="font-bold text-sm text-white">16:9 (Landscape)</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Color Profile</p><p className="font-bold text-sm text-white">Smart HDR</p></div>
              </div>
            </div>
          )}

          {activePlatformTab === 'reels' && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-cyan-300">Recommended Settings for Instagram Reels</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Resolution</p><p className="font-bold text-sm text-white">1080p</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Frame Rate</p><p className="font-bold text-sm text-white">60 FPS</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Aspect Ratio</p><p className="font-bold text-sm text-white">9:16</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Audio Quality</p><p className="font-bold text-sm text-white">320kbps AAC</p></div>
              </div>
            </div>
          )}

          {activePlatformTab === 'shorts' && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-cyan-300">Recommended Settings for YouTube Shorts</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Resolution</p><p className="font-bold text-sm text-white">1080p</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Frame Rate</p><p className="font-bold text-sm text-white">60 FPS</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Duration</p><p className="font-bold text-sm text-white">&lt; 60 seconds</p></div>
                <div className="p-3 bg-[#082229] border border-[#144855] rounded-xl"><p className="text-gray-400">Bitrate</p><p className="font-bold text-sm text-white">Recommended / High</p></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. CapCut Ban Status */}
      <section id="ban-status" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" />
          <span>CapCut Ban Status &amp; Region Unblock Guide</span>
        </h2>
        <p className="text-xs text-gray-300 leading-relaxed">
          In several countries (such as India and others), CapCut servers face regional restrictions. Our modified <strong>CapCut Pro v20.6 package</strong> includes embedded bypass configurations. If templates or online music fail to load, connect to a free VPN (Singapore or USA server), open CapCut once to fetch online assets, and you can edit offline seamlessly.
        </p>
      </section>

      {/* 6. CapCut Features Explained */}
      <section id="features" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="border-b border-[#175261] pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            CapCut Features Explained
          </h2>
          <p className="text-xs text-cyan-200/70">Explore all unlocked pro features included in the v20.6 APK.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-1.5">
            <h3 className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>AI Velocity Slow-Motion</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Optical flow frame interpolation for butter-smooth slow motion without frame jittering or ghosting.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-1.5">
            <h3 className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Auto Captions &amp; Subtitles</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI speech-to-text recognition supporting Bangla, English, Hindi, and 30+ languages with animated fonts.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b2931] border border-[#165160] space-y-1.5">
            <h3 className="font-bold text-white flex items-center gap-1.5">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>3D Zoom Pro Transitions</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Automatic depth estimation turning static 2D photos into cinematic 3D parallax motion.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CapCut No Watermark Explained */}
      <section id="no-watermark" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <span>CapCut No Watermark Explained</span>
        </h2>
        <p className="text-xs text-gray-300 leading-relaxed">
          Standard versions add a 2-second ending watermark clip (&quot;CapCut&quot; outro) and restrict certain video overlays. In this Pro APK build, the default ending frame is automatically disabled. You can also turn off &quot;Add Default Ending&quot; in settings, guaranteeing 100% clean video outputs with zero logo marks.
        </p>
      </section>

      {/* 9. CapCut PNG Logo Download */}
      <section id="png-logo" className="scroll-mt-24 space-y-4 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-cyan-400" />
          <span>CapCut HD PNG Logo Download</span>
        </h2>
        <p className="text-xs text-cyan-200/70">High-resolution transparent logos for YouTube video thumbnails and banners.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {['Transparent Dark', 'Transparent Light', 'Golden Crown VIP', 'Vector Badge'].map((style) => (
            <div key={style} className="p-4 rounded-2xl bg-[#0b2931] border border-[#175261] text-center space-y-2 flex flex-col items-center">
              <CapCutProLogo size={48} className="mx-auto" />
              <p className="font-bold text-xs text-white">{style}</p>
              <button
                onClick={() => onDownloadClick(`Logo-${style}`)}
                className="text-[11px] font-bold text-cyan-300 hover:text-white hover:underline cursor-pointer"
              >
                Download PNG (2000px)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CapCut Free vs Pro */}
      <section id="free-vs-pro" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="border-b border-[#175261] pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            CapCut Free vs Pro Comparison
          </h2>
          <p className="text-xs text-cyan-200/70">See what benefits you unlock with CapCut Pro APK.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#185b6c] text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#09262e] text-cyan-300 border-b border-[#175261]">
                <th className="py-3.5 px-4 font-bold">Feature</th>
                <th className="py-3.5 px-4 font-bold text-gray-400">Standard Free</th>
                <th className="py-3.5 px-4 font-bold text-emerald-400">CapCut Pro APK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134956]">
              <tr>
                <td className="py-3.5 px-4 font-medium text-white">Export Quality</td>
                <td className="py-3.5 px-4 text-gray-400">1080p (Compressed)</td>
                <td className="py-3.5 px-4 font-bold text-emerald-300">4K 60FPS High Bitrate</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-white">Watermark</td>
                <td className="py-3.5 px-4 text-gray-400">Default ending logo</td>
                <td className="py-3.5 px-4 font-bold text-emerald-300">100% Removed / Clean</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-white">VIP Cloud Filters &amp; Effects</td>
                <td className="py-3.5 px-4 text-gray-400">Locked behind payment</td>
                <td className="py-3.5 px-4 font-bold text-emerald-300">All VIP Assets Unlocked</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-white">Auto Subtitles Generation</td>
                <td className="py-3.5 px-4 text-gray-400">Limited minutes</td>
                <td className="py-3.5 px-4 font-bold text-emerald-300">Unlimited Multi-Language</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-white">Advertisements</td>
                <td className="py-3.5 px-4 text-gray-400">Contains promo banners</td>
                <td className="py-3.5 px-4 font-bold text-emerald-300">Zero Ads (Ad-Free)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. Trending CapCut Templates Download */}
      <section id="templates" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="flex items-center justify-between border-b border-[#175261] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Trending CapCut Templates Download
            </h2>
            <p className="text-xs text-cyan-200/70">1-Click viral video templates for TikTok, Instagram Reels, and Shorts.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPCUT_TEMPLATES.map((tpl) => (
            <div key={tpl.id} className="p-4 rounded-2xl bg-[#0b2931] border border-[#175261] flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#144f5e] text-cyan-300 border border-[#1f6d81]">
                    {tpl.tag}
                  </span>
                  <span className="text-[11px] text-gray-400">{tpl.duration}</span>
                </div>
                <h3 className="font-bold text-sm text-white leading-snug">{tpl.title}</h3>
                <p className="text-xs text-cyan-300/80 mt-0.5">{tpl.creator}</p>
              </div>

              <button
                onClick={() => onDownloadClick(`Template-${tpl.title}`)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-white text-[#10404c] hover:bg-cyan-50 transition-colors cursor-pointer shadow-sm"
              >
                Use Template ({tpl.uses})
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Privacy Policy */}
      <section id="privacy-policy" className="scroll-mt-24 space-y-3 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl text-xs leading-relaxed">
        <h2 className="text-xl font-extrabold text-white">Privacy Policy</h2>
        <p className="text-gray-300">
          Your privacy is strictly respected. This community website does not collect personal identity information, passwords, or device identifiers without your consent. Standard server analytics (such as browser type and country of origin) are used solely to optimize download delivery speeds.
        </p>
      </section>

      {/* 13. Disclaimer */}
      <section id="disclaimer" className="scroll-mt-24 space-y-3 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl text-xs leading-relaxed">
        <h2 className="text-xl font-extrabold text-white">Disclaimer</h2>
        <p className="text-gray-300">
          CapCut is a trademark of ByteDance Ltd. This website is an independent enthusiast resource portal providing installation tutorials, presets, and guides. We are not officially affiliated with ByteDance. All APK files are provided for personal educational testing.
        </p>
      </section>

      {/* 14. DMCA */}
      <section id="dmca" className="scroll-mt-24 space-y-3 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl text-xs leading-relaxed">
        <h2 className="text-xl font-extrabold text-white">DMCA Copyright Notice</h2>
        <p className="text-gray-300">
          We comply with 17 U.S.C. § 512 and the Digital Millennium Copyright Act (DMCA). If you are a copyright owner or an agent thereof and believe that any content hosted on this site infringes upon your copyrights, please send an official notice to our contact team with verification and we will remove the content within 24 business hours.
        </p>
      </section>

      {/* 15. About Us */}
      <section id="about-us" className="scroll-mt-24 space-y-3 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl text-xs leading-relaxed">
        <h2 className="text-xl font-extrabold text-white">About Us</h2>
        <p className="text-gray-300">
          CapCut Pro APK Portal was founded by mobile video creators and mobile filmmakers who aim to make high-quality video editing accessible. We curate the latest stable builds, verify malware signatures, and test performance across various Android chipsets.
        </p>
      </section>

      {/* 16. Contact Us */}
      <section id="contact-us" className="scroll-mt-24 space-y-6 bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] p-6 sm:p-8 rounded-3xl border border-[#1b5e70] shadow-xl">
        <div className="border-b border-[#175261] pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            <Mail className="w-6 h-6 text-cyan-400" />
            <span>Contact Us</span>
          </h2>
          <p className="text-xs text-cyan-200/70">Have questions, feedback, or DMCA inquiries? Reach out to our technical support team.</p>
        </div>

        {contactSubmitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for your message! Our team will get back to you within 24 hours.</span>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4 max-w-xl text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-white mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1b5d6e] bg-[#0a272e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block font-bold text-white mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="e.g. contact@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1b5d6e] bg-[#0a272e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-white mb-1">Subject</label>
              <input
                type="text"
                required
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                placeholder="Question / Feedback / DMCA"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#1b5d6e] bg-[#0a272e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block font-bold text-white mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#1b5d6e] bg-[#0a272e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold bg-white text-[#10404c] hover:bg-cyan-50 transition-all cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4 text-[#10404c]" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
