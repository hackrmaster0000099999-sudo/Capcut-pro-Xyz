'use client';

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ShieldCheck, 
  Star, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Smartphone,
  HardDrive,
  Users
} from 'lucide-react';
import { AppItem } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface HeroBannerProps {
  lang: Language;
  featuredApps: AppItem[];
  onSelectApp: (app: AppItem) => void;
  onInstantDownload: (app: AppItem) => void;
}

export function HeroBanner({
  lang,
  featuredApps,
  onSelectApp,
  onInstantDownload
}: HeroBannerProps) {
  const t = translations[lang];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate carousel every 6 seconds
  useEffect(() => {
    if (featuredApps.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredApps.length]);

  if (!featuredApps || featuredApps.length === 0) return null;

  const currentApp = featuredApps[currentIndex] || featuredApps[0];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 border border-blue-600/30 text-white shadow-lg">
      {/* Background Graphic Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={currentApp.bannerImage || currentApp.icon} 
          alt="Banner background" 
          className="w-full h-full object-cover blur-2xl scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-950/70 to-transparent" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: App Info & Main CTAs */}
          <div className="lg:col-span-8 space-y-4">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-xs">
                {t.editorsChoice}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-900/60 backdrop-blur-md rounded-full text-xs font-medium text-blue-100 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                {t.verifiedSafe}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-950/50 backdrop-blur-md rounded-full text-xs font-medium text-indigo-200 border border-white/10">
                <Zap className="w-3 h-3 text-amber-300" />
                {lang === 'bn' ? 'ট্রেন্ডিং #১' : 'Trending #1'}
              </span>
            </div>

            {/* App Title & Short description */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {lang === 'bn' && currentApp.titleBn ? currentApp.titleBn : currentApp.title}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                {lang === 'bn' && currentApp.shortDescriptionBn ? currentApp.shortDescriptionBn : currentApp.shortDescription}
              </p>
            </div>

            {/* Metadata Stats Grid */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-1 text-xs sm:text-sm text-blue-100/90">
              <div className="flex items-center gap-1.5 font-medium">
                <div className="flex items-center text-amber-300">
                  <Star className="w-4 h-4 fill-amber-300" />
                </div>
                <span className="font-bold text-white text-base">{currentApp.rating}</span>
                <span className="text-blue-200">({(currentApp.ratingCount / 1000000).toFixed(1)}M)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-blue-400/40 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-200" />
                <span className="font-semibold text-white">{currentApp.downloads}</span>
                <span className="text-blue-200">{t.downloadsCount}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-blue-400/40 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-blue-200" />
                <span className="font-semibold text-white">{currentApp.size}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-blue-400/40 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-blue-200">
                <Smartphone className="w-4 h-4" />
                <span>v{currentApp.version}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-button"
                onClick={() => onInstantDownload(currentApp)}
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>{t.downloadNow} ({currentApp.size})</span>
              </button>

              <button
                onClick={() => onSelectApp(currentApp)}
                className="bg-blue-800/40 border border-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-medium hover:bg-white/10 text-white transition-colors flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>{t.overview} & {t.screenshots}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: App Card & Visual */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div 
              onClick={() => onSelectApp(currentApp)}
              className="group relative cursor-pointer p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:border-white/40 transition-all duration-300 w-full max-w-xs"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 border border-white/20 shadow-md">
                <img 
                  src={currentApp.icon} 
                  alt={currentApp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-gray-900/80 backdrop-blur-md text-white border border-white/10">
                  APK
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-bold text-base text-white truncate">
                    {currentApp.title}
                  </h2>
                  {currentApp.developerVerified && (
                    <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
                  )}
                </div>
                <p className="text-xs text-blue-200 truncate">{currentApp.developer}</p>
                <div className="flex items-center justify-between pt-2 text-xs text-blue-100 border-t border-white/10">
                  <span className="font-semibold text-blue-200">100% Clean APK</span>
                  <span className="text-blue-300/80">{currentApp.updatedDate}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Pagination & Navigation Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-white/15 mt-6">
          <div className="flex items-center gap-2">
            {featuredApps.map((app, idx) => (
              <button
                key={app.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-8 bg-white shadow-xs' 
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + featuredApps.length) % featuredApps.length)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous app"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % featuredApps.length)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next app"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
