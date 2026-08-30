'use client';

import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode, 
  History, 
  MessageSquare, 
  FileText, 
  Info, 
  Layers, 
  Smartphone, 
  Share2, 
  Bookmark, 
  ExternalLink,
  ChevronRight,
  HardDrive,
  Users,
  AlertCircle,
  ThumbsUp,
  Send,
  ZoomIn
} from 'lucide-react';
import { AppItem, AppReview } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface AppDetailModalProps {
  app: AppItem | null;
  onClose: () => void;
  lang: Language;
  onInstantDownload: (app: AppItem, version?: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (app: AppItem) => void;
  onSelectApp: (app: AppItem) => void;
  allApps: AppItem[];
  downloadProgress: { [appId: string]: number };
  isDownloading: boolean;
  onAddReview: (appId: string, review: { userName: string; rating: number; comment: string }) => void;
}

export function AppDetailModal({
  app,
  onClose,
  lang,
  onInstantDownload,
  isBookmarked,
  onToggleBookmark,
  onSelectApp,
  allApps,
  downloadProgress,
  isDownloading,
  onAddReview
}: AppDetailModalProps) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'overview' | 'whatsnew' | 'versions' | 'reviews' | 'specs'>('overview');
  const [copiedSha, setCopiedSha] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  const [selectedMirror, setSelectedMirror] = useState<'server1' | 'server2' | 'qr'>('server1');
  
  // Review form state
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Upvoted reviews state
  const [upvotedReviews, setUpvotedReviews] = useState<Record<string, boolean>>({});

  if (!app) return null;

  const currentProgress = downloadProgress[app.id] ?? 0;
  const isAppCurrentlyDownloading = isDownloading && currentProgress > 0 && currentProgress < 100;
  const isAppDownloadComplete = currentProgress === 100;

  // Filter similar apps in same category
  const similarApps = allApps
    .filter(a => a.id !== app.id && (a.category === app.category || a.category === 'Bangla'))
    .slice(0, 4);

  const handleCopySha = () => {
    navigator.clipboard.writeText(app.sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2500);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;
    onAddReview(app.id, {
      userName: reviewName.trim(),
      rating: reviewRating,
      comment: reviewComment.trim()
    });
    setReviewName('');
    setReviewComment('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const handleToggleUpvote = (reviewId: string) => {
    setUpvotedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar with Close and Bookmark */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {app.category}
            </span>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400 font-mono">
              v{app.version}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(app)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' 
                  : 'text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
              title="Bookmark app"
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
          
          {/* Main Info Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-zinc-800/80">
            <div className="flex items-start sm:items-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm shrink-0">
                <img 
                  src={app.icon} 
                  alt={app.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    {lang === 'bn' && app.titleBn ? app.titleBn : app.title}
                  </h1>
                  {app.developerVerified && (
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  )}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 font-medium">
                  {app.developer}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-gray-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{app.rating}</span>
                    <span className="text-gray-400 dark:text-zinc-500 font-normal">({(app.ratingCount / 1000).toFixed(0)}k)</span>
                  </div>
                  <span>•</span>
                  <span>{app.downloads} {t.downloadsCount}</span>
                  <span>•</span>
                  <span>{app.size}</span>
                  <span>•</span>
                  <span>{app.minAndroid}</span>
                </div>
              </div>
            </div>

            {/* Quick Share / Security Indicator */}
            <div className="flex items-center gap-2 self-stretch sm:self-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>{t.verifiedSafe}</span>
              </div>
            </div>
          </div>

          {/* Download Center Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-gray-50 dark:bg-zinc-950/60 border border-gray-200 dark:border-zinc-800 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>{t.downloadNow}</span>
                  <span className="text-xs font-normal text-gray-500 dark:text-zinc-400">
                    ({app.size} • APK Direct)
                  </span>
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  {lang === 'bn' 
                    ? 'সর্বশেষ অফিশিয়াল ও নিরাপদ অ্যান্ড্রয়েড প্যাকেজ' 
                    : 'Fast direct APK mirror with verified signature'}
                </p>
              </div>

              {/* Server Mirror Selectors */}
              <div className="flex items-center gap-1.5 bg-gray-200/70 dark:bg-zinc-900 p-1 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setSelectedMirror('server1')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedMirror === 'server1'
                      ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-2xs'
                      : 'text-gray-600 dark:text-zinc-400'
                  }`}
                >
                  ⚡ Server 1 (Fast CDN)
                </button>
                <button
                  onClick={() => setSelectedMirror('server2')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedMirror === 'server2'
                      ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-2xs'
                      : 'text-gray-600 dark:text-zinc-400'
                  }`}
                >
                  🚀 Mirror 2
                </button>
                <button
                  onClick={() => setSelectedMirror('qr')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                    selectedMirror === 'qr'
                      ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-2xs'
                      : 'text-gray-600 dark:text-zinc-400'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR Code</span>
                </button>
              </div>
            </div>

            {/* QR Code Mirror View */}
            {selectedMirror === 'qr' && (
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="p-2 bg-white rounded-lg border border-gray-200 shrink-0">
                  {/* SVG QR Code Simulation */}
                  <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="white" />
                    <rect x="10" y="10" width="25" height="25" fill="#2563EB" />
                    <rect x="15" y="15" width="15" height="15" fill="white" />
                    <rect x="18" y="18" width="9" height="9" fill="#1D4ED8" />
                    <rect x="65" y="10" width="25" height="25" fill="#2563EB" />
                    <rect x="70" y="15" width="15" height="15" fill="white" />
                    <rect x="73" y="18" width="9" height="9" fill="#1D4ED8" />
                    <rect x="10" y="65" width="25" height="25" fill="#2563EB" />
                    <rect x="15" y="70" width="15" height="15" fill="white" />
                    <rect x="18" y="73" width="9" height="9" fill="#1D4ED8" />
                    {/* QR matrix dots */}
                    <rect x="42" y="15" width="6" height="6" fill="#18181B" />
                    <rect x="52" y="20" width="6" height="6" fill="#18181B" />
                    <rect x="42" y="32" width="6" height="6" fill="#18181B" />
                    <rect x="45" y="45" width="10" height="10" fill="#2563EB" />
                    <rect x="65" y="45" width="6" height="6" fill="#18181B" />
                    <rect x="75" y="55" width="8" height="8" fill="#18181B" />
                    <rect x="42" y="65" width="8" height="8" fill="#18181B" />
                    <rect x="55" y="75" width="6" height="6" fill="#18181B" />
                    <rect x="70" y="70" width="15" height="15" fill="#18181B" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {t.scanQrToDownload}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">
                    {t.qrTip}
                  </p>
                  <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400 pt-1">
                    https://appdrop.download/apk/{app.packageName}
                  </p>
                </div>
              </div>
            )}

            {/* Download Progress Bar / Button Trigger */}
            <div className="space-y-2">
              <button
                id="modal-main-download-button"
                onClick={() => onInstantDownload(app)}
                disabled={isAppCurrentlyDownloading}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer active:scale-[0.99] ${
                  isAppCurrentlyDownloading
                    ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                    : isAppDownloadComplete
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                }`}
              >
                {isAppCurrentlyDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-blue-400 rounded-full animate-spin" />
                    <span>{t.downloading} ({currentProgress}%)</span>
                  </>
                ) : isAppDownloadComplete ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>{t.downloadComplete} ({t.downloadNow})</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>{t.downloadNow} • {app.size}</span>
                  </>
                )}
              </button>

              {/* Active Download Progress Simulation */}
              {isAppCurrentlyDownloading && (
                <div className="space-y-1.5 pt-1">
                  <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-zinc-800 overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-150 ease-out"
                      style={{ width: `${currentProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400 font-mono">
                    <span>Speed: ~14.8 MB/s (Direct Stream)</span>
                    <span>{currentProgress}% / 100%</span>
                  </div>
                </div>
              )}
            </div>

            {/* SHA-256 Checksum Signature */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 p-3 rounded-lg border border-gray-200/80 dark:border-zinc-800/80">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-semibold text-gray-700 dark:text-zinc-300 shrink-0">SHA-256:</span>
                <span className="font-mono text-[11px] truncate">{app.sha256}</span>
              </div>
              <button
                onClick={handleCopySha}
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline shrink-0 cursor-pointer"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSha ? 'Copied!' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-200 dark:border-zinc-800 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-300'
              }`}
            >
              {t.overview}
            </button>
            <button
              onClick={() => setActiveTab('whatsnew')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'whatsnew'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-300'
              }`}
            >
              {t.whatsNew}
            </button>
            <button
              onClick={() => setActiveTab('versions')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'versions'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-300'
              }`}
            >
              {t.versionHistory} ({app.versionHistory?.length || 1})
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-300'
              }`}
            >
              {t.ratingsReviews} ({app.reviews?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'specs'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-300'
              }`}
            >
              {t.technicalInfo}
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Screenshots Gallery */}
              {app.screenshots && app.screenshots.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {t.screenshots}
                  </h3>
                  <div className="flex items-center gap-4 overflow-x-auto pb-3">
                    {app.screenshots.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedScreenshot(img)}
                        className="group relative w-44 sm:w-56 aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0 cursor-pointer shadow-md"
                      >
                        <img 
                          src={img} 
                          alt={`Screenshot ${idx + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {lang === 'bn' ? 'অ্যাপ পরিচিতি ও সুবিধাসমূহ' : 'About this application'}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {lang === 'bn' && app.fullDescriptionBn ? app.fullDescriptionBn : app.fullDescription}
                </p>
              </div>

              {/* How to install steps */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>{t.howToInstall}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">{t.step1Title}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{t.step1Desc}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">{t.step2Title}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{t.step2Desc}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">{t.step3Title}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{t.step3Desc}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WHAT'S NEW */}
          {activeTab === 'whatsnew' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  v{app.version} {t.whatsNew}
                </h3>
                <span className="text-xs text-zinc-500">{app.updatedDate}</span>
              </div>
              <ul className="space-y-2.5">
                {((lang === 'bn' && app.whatsNewBn) ? app.whatsNewBn : app.whatsNew).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB 3: VERSION HISTORY */}
          {activeTab === 'versions' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                {t.versionHistory}
              </h3>
              <div className="space-y-3">
                {app.versionHistory?.map((ver, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-zinc-900 dark:text-white">v{ver.version}</span>
                        {idx === 0 && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                            Latest
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {ver.releaseDate} • {ver.size} • Android {ver.minAndroid}
                      </p>
                      {ver.changes && ver.changes.length > 0 && (
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 italic">
                          &ldquo;{ver.changes[0]}&rdquo;
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => onInstantDownload(app, ver.version)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.downloadNow}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Rating stats banner */}
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-zinc-950/50 border border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {app.rating}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start text-amber-400 py-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-zinc-400">
                    {app.ratingCount.toLocaleString()} {t.reviewsCount}
                  </div>
                </div>

                <div className="w-full sm:w-64 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-gray-500">5</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[85%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-gray-500">4</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[10%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-gray-500">3</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[3%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-gray-500">2</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[1%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-gray-500">1</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[1%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a review form */}
              <form onSubmit={handleReviewSubmit} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-3">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {t.writeReview}
                </h4>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{t.yourRating}:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className="p-1 cursor-pointer hover:scale-110 transition-transform"
                      >
                        <Star className={`w-5 h-5 ${star <= reviewRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-zinc-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder={t.yourName}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    required
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder={t.yourComment}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  {reviewSubmitted ? (
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'রিভিউ সফলভাবে যোগ হয়েছে!' : 'Review posted successfully!'}</span>
                    </span>
                  ) : <span />}
                  
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.submitReview}</span>
                  </button>
                </div>
              </form>

              {/* Reviews list */}
              <div className="space-y-3">
                {app.reviews?.map((rev) => {
                  const isUpvoted = upvotedReviews[rev.id];
                  const upvoteCount = rev.helpfulCount + (isUpvoted ? 1 : 0);

                  return (
                    <div key={rev.id} className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-950/40 border border-gray-200/80 dark:border-zinc-800/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img 
                            src={rev.userAvatar} 
                            alt={rev.userName} 
                            className="w-8 h-8 rounded-full object-cover border border-gray-200" 
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-xs text-gray-900 dark:text-white">{rev.userName}</span>
                              {rev.verifiedUser && (
                                <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                              )}
                            </div>
                            <span className="text-[11px] text-gray-400">{rev.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-gray-700 dark:text-zinc-300 leading-relaxed">
                        {rev.comment}
                      </p>

                      <div className="pt-1 flex items-center justify-end">
                        <button
                          onClick={() => handleToggleUpvote(rev.id)}
                          className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                            isUpvoted 
                              ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold' 
                              : 'text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200'
                          }`}
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>Helpful ({upvoteCount})</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {t.technicalInfo}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-1">
                  <span className="text-gray-400">{t.packageName}</span>
                  <p className="font-mono font-bold text-gray-800 dark:text-zinc-200 truncate">{app.packageName}</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-1">
                  <span className="text-gray-400">{t.architecture}</span>
                  <p className="font-bold text-gray-800 dark:text-zinc-200">{app.architecture}</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-1">
                  <span className="text-gray-400">{t.reqAndroid}</span>
                  <p className="font-bold text-gray-800 dark:text-zinc-200">{app.minAndroid}</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-1">
                  <span className="text-gray-400">{t.developer}</span>
                  <p className="font-bold text-gray-800 dark:text-zinc-200">{app.developer}</p>
                </div>
              </div>

              {/* Permissions list */}
              {app.permissions && (
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-2">
                  <span className="font-bold text-gray-700 dark:text-zinc-300">Declared Android Permissions ({app.permissions.length}):</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {app.permissions.map((p, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-gray-200/70 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Related / Similar Apps */}
          {similarApps.length > 0 && (
            <div className="pt-6 border-t border-gray-100 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {t.relatedApps}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {similarApps.map((simApp) => (
                  <div
                    key={simApp.id}
                    onClick={() => onSelectApp(simApp)}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800 cursor-pointer transition-all group"
                  >
                    <img 
                      src={simApp.icon} 
                      alt={simApp.title} 
                      className="w-12 h-12 rounded-xl object-cover mb-2 border border-gray-200 dark:border-zinc-700 group-hover:scale-105 transition-transform" 
                    />
                    <h4 className="font-bold text-xs text-gray-900 dark:text-white truncate group-hover:text-blue-600">
                      {lang === 'bn' && simApp.titleBn ? simApp.titleBn : simApp.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 truncate">{simApp.size}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Zoom for Screenshot */}
      {selectedScreenshot && (
        <div 
          onClick={() => setSelectedScreenshot(null)}
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img 
            src={selectedScreenshot} 
            alt="Expanded screenshot" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl" 
          />
        </div>
      )}

    </div>
  );
}
