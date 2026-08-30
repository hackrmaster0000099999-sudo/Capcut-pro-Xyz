'use client';

import React from 'react';
import { 
  Download, 
  Star, 
  Bookmark, 
  CheckCircle2, 
  ShieldCheck, 
  HardDrive, 
  Users, 
  Sparkles,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { AppItem } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface AppCardProps {
  app: AppItem;
  lang: Language;
  onSelectApp: (app: AppItem) => void;
  onInstantDownload: (app: AppItem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (app: AppItem) => void;
  rank?: number;
  layoutStyle?: 'grid' | 'rank' | 'compact';
}

export function AppCard({
  app,
  lang,
  onSelectApp,
  onInstantDownload,
  isBookmarked,
  onToggleBookmark,
  rank,
  layoutStyle = 'grid'
}: AppCardProps) {
  const t = translations[lang];

  // 1. Rank Card Layout (Top Charts)
  if (layoutStyle === 'rank') {
    return (
      <div 
        onClick={() => onSelectApp(app)}
        className="group relative flex items-center gap-3.5 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer"
      >
        {/* Rank Number */}
        <div className="w-7 text-center font-bold text-base text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0">
          {rank ? (rank < 10 ? `0${rank}` : rank) : ''}
        </div>

        {/* Icon */}
        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 shrink-0 shadow-xs">
          <img 
            src={app.icon} 
            alt={app.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-sm text-gray-900 dark:text-zinc-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {lang === 'bn' && app.titleBn ? app.titleBn : app.title}
            </h3>
            {app.developerVerified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            )}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
            <span className="truncate">{app.developer}</span>
            <span>•</span>
            <span className="shrink-0">{app.category}</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-zinc-400 mt-1">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{app.rating}</span>
            </div>
            <span>•</span>
            <span>{app.size}</span>
            <span>•</span>
            <span>{app.downloads}</span>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onInstantDownload(app);
          }}
          className="p-2.5 rounded-lg bg-blue-50 dark:bg-zinc-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white transition-colors cursor-pointer shrink-0 shadow-xs"
          title={t.downloadNow}
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // 2. Standard Grid Card Layout
  return (
    <div 
      onClick={() => onSelectApp(app)}
      className="group relative flex flex-col justify-between p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Top Badges / Bookmark */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {app.badge && (
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
              app.badge === 'Hot' 
                ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800' 
                : app.badge === 'Bangla Special'
                ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
            }`}>
              {app.badge}
            </span>
          )}
          <span className="text-[10px] font-medium text-gray-600 dark:text-zinc-400 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800">
            {app.category}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(app);
          }}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            isBookmarked 
              ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' 
              : 'text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800'
          }`}
          title="Save app"
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      {/* Main App Header with Icon */}
      <div className="flex items-start gap-3.5 mb-3">
        <div className="relative w-13 h-13 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 shrink-0 shadow-xs">
          <img 
            src={app.icon} 
            alt={app.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-zinc-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {lang === 'bn' && app.titleBn ? app.titleBn : app.title}
            </h3>
            {app.developerVerified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-zinc-400 truncate mt-0.5">
            {app.developer}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mt-1">
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span>{app.rating}</span>
            <span className="text-gray-400 dark:text-zinc-500 font-normal">({(app.ratingCount / 1000).toFixed(0)}k)</span>
          </div>
        </div>
      </div>

      {/* Short Description */}
      <p className="text-xs text-gray-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
        {lang === 'bn' && currentAppShortDesc(app, lang)}
      </p>

      {/* Metadata & Download Button Footer */}
      <div className="pt-3 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-2">
        <div className="text-xs text-gray-500 dark:text-zinc-400 flex flex-col">
          <span className="font-semibold text-gray-700 dark:text-zinc-300">{app.size}</span>
          <span className="text-[11px] text-gray-400">v{app.version}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onInstantDownload(app);
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white border border-blue-200 dark:border-blue-800 transition-all cursor-pointer active:scale-95"
        >
          <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{t.downloadNow}</span>
        </button>
      </div>
    </div>
  );
}

function currentAppShortDesc(app: AppItem, lang: Language) {
  if (lang === 'bn' && app.shortDescriptionBn) {
    return app.shortDescriptionBn;
  }
  return app.shortDescription;
}
