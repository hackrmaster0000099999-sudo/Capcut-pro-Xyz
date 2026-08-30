'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { CapCutHero } from '@/components/CapCutHero';
import { CapCutShowcase } from '@/components/CapCutShowcase';
import { CapCutSections } from '@/components/CapCutSections';
import { Footer } from '@/components/Footer';
import { AdsterraBanner320x50, AdsterraNativeBanner } from '@/components/AdsterraAds';

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'download') {
      router.push('/download');
      return;
    }
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadTrigger = (ver?: string) => {
    if (ver) {
      router.push(`/download?version=${encodeURIComponent(ver)}`);
    } else {
      router.push('/download');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09242b] text-cyan-50 selection:bg-cyan-500/30 selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* 2. Hero Section with 2-column App Specifications & Category */}
      <CapCutHero
        onDownloadClick={() => handleDownloadTrigger()}
      />

      {/* Sponsor Banner 320x50 */}
      <div className="w-full flex justify-center py-2 bg-[#061d23]/80 border-y border-[#12424e]">
        <AdsterraBanner320x50 />
      </div>

      {/* 3. Screenshots & Interactive Mockups Showcase matching User's Uploaded Images */}
      <CapCutShowcase
        onDownloadClick={() => handleDownloadTrigger()}
      />

      {/* Native Sponsored Banner */}
      <AdsterraNativeBanner />

      {/* 4. Middle Content: All 17 Sections styled in Unified Deep Teal Brand Theme */}
      <main className="flex-1 w-full">
        <CapCutSections
          onDownloadClick={handleDownloadTrigger}
        />
      </main>

      {/* Bottom Native Sponsored Banner */}
      <AdsterraNativeBanner />

      {/* 5. Matching Deep Teal Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

    </div>
  );
}
