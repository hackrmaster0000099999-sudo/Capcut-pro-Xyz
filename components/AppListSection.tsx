'use client';

import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Flame, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  ShieldCheck,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { AppItem, AppCategory } from '@/types/app';
import { translations, Language } from '@/data/translations';
import { AppCard } from './AppCard';

interface AppListSectionProps {
  title: string;
  subtitle?: string;
  apps: AppItem[];
  lang: Language;
  onSelectApp: (app: AppItem) => void;
  onInstantDownload: (app: AppItem) => void;
  bookmarkedMap: Record<string, boolean>;
  onToggleBookmark: (app: AppItem) => void;
  showRankNumber?: boolean;
  layoutStyle?: 'grid' | 'rank';
  showViewToggle?: boolean;
  viewMode?: 'grid' | 'list';
  onToggleViewMode?: () => void;
  sortBy?: string;
  onChangeSort?: (sortBy: 'popular' | 'rating' | 'newest' | 'size') => void;
}

export function AppListSection({
  title,
  subtitle,
  apps,
  lang,
  onSelectApp,
  onInstantDownload,
  bookmarkedMap,
  onToggleBookmark,
  showRankNumber = false,
  layoutStyle = 'grid',
  showViewToggle = false,
  viewMode = 'grid',
  onToggleViewMode,
  sortBy,
  onChangeSort
}: AppListSectionProps) {
  const t = translations[lang];

  if (!apps || apps.length === 0) {
    return (
      <div className="py-12 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500">
        <p className="text-sm">{lang === 'bn' ? 'কোনো অ্যাপ খুঁজে পাওয়া যায়নি।' : 'No applications found in this section.'}</p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {/* Section Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {apps.length}
            </span>
          </div>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Sort & View Options */}
        {(showViewToggle || onChangeSort) && (
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {onChangeSort && (
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-zinc-400">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => onChangeSort(e.target.value as any)}
                  className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-zinc-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="popular">{t.sortPopular}</option>
                  <option value="rating">{t.sortRating}</option>
                  <option value="newest">{t.sortNewest}</option>
                  <option value="size">{t.sortSize}</option>
                </select>
              </div>
            )}

            {showViewToggle && onToggleViewMode && (
              <button
                onClick={onToggleViewMode}
                className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                title="Toggle View Mode"
              >
                {viewMode === 'grid' ? <List className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Grid or Rank List Layout */}
      {layoutStyle === 'rank' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {apps.map((app, idx) => (
            <AppCard
              key={app.id}
              app={app}
              lang={lang}
              onSelectApp={onSelectApp}
              onInstantDownload={onInstantDownload}
              isBookmarked={!!bookmarkedMap[app.id]}
              onToggleBookmark={onToggleBookmark}
              rank={idx + 1}
              layoutStyle="rank"
            />
          ))}
        </div>
      ) : viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {apps.map((app, idx) => (
            <AppCard
              key={app.id}
              app={app}
              lang={lang}
              onSelectApp={onSelectApp}
              onInstantDownload={onInstantDownload}
              isBookmarked={!!bookmarkedMap[app.id]}
              onToggleBookmark={onToggleBookmark}
              rank={showRankNumber ? idx + 1 : undefined}
              layoutStyle="rank"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {apps.map((app, idx) => (
            <AppCard
              key={app.id}
              app={app}
              lang={lang}
              onSelectApp={onSelectApp}
              onInstantDownload={onInstantDownload}
              isBookmarked={!!bookmarkedMap[app.id]}
              onToggleBookmark={onToggleBookmark}
              rank={showRankNumber ? idx + 1 : undefined}
              layoutStyle="grid"
            />
          ))}
        </div>
      )}
    </section>
  );
}
