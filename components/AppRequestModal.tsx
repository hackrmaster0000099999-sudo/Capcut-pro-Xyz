'use client';

import React, { useState } from 'react';
import { X, HelpCircle, Send, CheckCircle2, Smartphone } from 'lucide-react';
import { translations, Language } from '@/data/translations';

interface AppRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function AppRequestModal({
  isOpen,
  onClose,
  lang
}: AppRequestModalProps) {
  const t = translations[lang];
  const [appName, setAppName] = useState('');
  const [appLink, setAppLink] = useState('');
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName.trim()) return;

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setAppName('');
      setAppLink('');
      setNote('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.requestTitle}</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">{lang === 'bn' ? 'আমরা দ্রুত অ্যাপটি যুক্ত করার চেষ্টা করব।' : 'We will review and add your requested app promptly.'}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
            <h4 className="font-bold text-base text-gray-900 dark:text-white">
              {lang === 'bn' ? 'অনুরোধ গৃহীত হয়েছে!' : 'Request Submitted!'}
            </h4>
            <p className="text-xs text-gray-500">
              {lang === 'bn' ? 'ধন্যবাদ! আমাদের টিম দ্রুত APK টি যাচাই করে আপলোড করবে।' : 'Thank you! Our catalog team will verify and add the APK.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {lang === 'bn' ? 'অ্যাপ বা গেমের নাম' : 'App / Game Title'} *
              </label>
              <input
                type="text"
                required
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="e.g. Free Fire MAX OB44, Adobe Lightroom Pro..."
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {lang === 'bn' ? 'গুগল প্লে বা অফিসিয়াল লিংক (ঐচ্ছিক)' : 'Google Play or Reference URL (Optional)'}
              </label>
              <input
                type="url"
                value={appLink}
                onChange={(e) => setAppLink(e.target.value)}
                placeholder="https://play.google.com/store/apps/details?id=..."
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {lang === 'bn' ? 'অতিরিক্ত কোনো নোট বা স্পেসিফিক ভার্সন' : 'Additional Notes / Specific Version'}
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Any special version requirements or mod requests..."
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-zinc-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-6 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
