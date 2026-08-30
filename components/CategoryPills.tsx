'use client';

import React from 'react';
import { 
  LayoutGrid, 
  Gamepad2, 
  Sparkles, 
  CreditCard, 
  MessageSquare, 
  Video, 
  Wrench, 
  Bot, 
  Camera, 
  GraduationCap 
} from 'lucide-react';
import { AppCategory } from '@/types/app';
import { translations, Language } from '@/data/translations';
import { mockCategories } from '@/data/apps-data';

interface CategoryPillsProps {
  lang: Language;
  selectedCategory: AppCategory;
  onSelectCategory: (category: AppCategory) => void;
  categoryCounts: Record<string, number>;
}

export function CategoryPills({
  lang,
  selectedCategory,
  onSelectCategory,
  categoryCounts
}: CategoryPillsProps) {
  const t = translations[lang];

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'All': return <LayoutGrid className="w-4 h-4" />;
      case 'Games': return <Gamepad2 className="w-4 h-4" />;
      case 'Bangla': return <Sparkles className="w-4 h-4 text-emerald-500" />;
      case 'Finance': return <CreditCard className="w-4 h-4" />;
      case 'Social': return <MessageSquare className="w-4 h-4" />;
      case 'Video': return <Video className="w-4 h-4" />;
      case 'Tools': return <Wrench className="w-4 h-4" />;
      case 'Productivity': return <Bot className="w-4 h-4" />;
      case 'Photography': return <Camera className="w-4 h-4" />;
      default: return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {mockCategories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          const count = categoryCounts[cat.key] || cat.count;

          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key as AppCategory)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0 border ${
                isSelected
                  ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800/60'
              }`}
            >
              {getCategoryIcon(cat.key)}
              <span>{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${
                isSelected 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
