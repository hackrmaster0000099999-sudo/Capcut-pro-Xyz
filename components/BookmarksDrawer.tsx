'use client';

import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  History, 
  Download, 
  Trash2, 
  ExternalLink,
  Smartphone,
  HardDrive
} from 'lucide-react';
import { AppItem, DownloadHistoryItem } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  bookmarkedApps: AppItem[];
  downloadHistory: DownloadHistoryItem[];
  onSelectApp: (app: AppItem) => void;
  onRemoveBookmark: (app: AppItem) => void;
  onClearBookmarks: () => void;
  onClearHistory: () => void;
  onInstantDownload: (app: AppItem) => void;
}

export function BookmarksDrawer({
  isOpen,
  onClose,
  lang,
  bookmarkedApps,
  downloadHistory,
  onSelectApp,
  onRemoveBookmark,
  onClearBookmarks,
  onClearHistory,
  onInstantDownload
}: BookmarksDrawerProps) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'history'>('bookmarks');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Body */}
      <div className="relative z-10 w-full max-w-md bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'bookmarks'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{t.bookmarks} ({bookmarkedApps.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>{t.downloadHistory} ({downloadHistory.length})</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeTab === 'bookmarks' ? (
            bookmarkedApps.length > 0 ? (
              bookmarkedApps.map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    onSelectApp(app);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700/60 hover:border-blue-500 transition-colors cursor-pointer group"
                >
                  <img src={app.icon} alt={app.title} className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-2xs" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate group-hover:text-blue-600">
                      {lang === 'bn' && app.titleBn ? app.titleBn : app.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 truncate">{app.developer} • {app.size}</p>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">v{app.version}</span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onInstantDownload(app);
                      }}
                      className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                      title={t.downloadNow}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveBookmark(app);
                      }}
                      className="p-2 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-xs text-zinc-400 space-y-2">
                <Bookmark className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mx-auto" />
                <p>{t.noBookmarks}</p>
              </div>
            )
          ) : (
            downloadHistory.length > 0 ? (
              downloadHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60"
                >
                  <img src={item.icon} alt={item.title} className="w-10 h-10 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-zinc-900 dark:text-white truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-mono">
                      v{item.version} • {item.size}
                    </p>
                    <span className="text-[10px] text-zinc-400">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-xs text-zinc-400 space-y-2">
                <History className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mx-auto" />
                <p>{t.noDownloads}</p>
              </div>
            )
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <button
            onClick={activeTab === 'bookmarks' ? onClearBookmarks : onClearHistory}
            className="text-xs font-semibold text-rose-500 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.clearAll}</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
