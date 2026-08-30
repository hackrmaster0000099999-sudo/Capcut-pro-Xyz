'use client';

import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  FileCode,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { AppItem, AppCategory } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface ApkUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onUploadApp: (newApp: AppItem) => void;
}

export function ApkUploadModal({
  isOpen,
  onClose,
  lang,
  onUploadApp
}: ApkUploadModalProps) {
  const t = translations[lang];

  const [title, setTitle] = useState('');
  const [developer, setDeveloper] = useState('');
  const [category, setCategory] = useState<AppCategory>('Tools');
  const [version, setVersion] = useState('1.0.0');
  const [packageName, setPackageName] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileSize, setUploadedFileSize] = useState('24.5 MB');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setUploadedFileName(file.name);
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    setUploadedFileSize(`${sizeInMb} MB`);
    
    // Auto populate title and package name from file name if empty
    const cleanName = file.name.replace(/\.apk$/i, '').replace(/[-_]/g, ' ');
    if (!title) {
      setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    }
    if (!packageName) {
      setPackageName(`com.${cleanName.toLowerCase().replace(/\s+/g, '')}.app`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newApp: AppItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      titleBn: title.trim(),
      packageName: packageName.trim() || `com.${title.toLowerCase().replace(/\s+/g, '')}.apk`,
      developer: developer.trim() || 'Community Developer',
      developerVerified: true,
      category: category,
      icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      rating: 5.0,
      ratingCount: 1,
      downloads: '10+',
      downloadCountNum: 10,
      size: uploadedFileSize || '24.5 MB',
      version: version.trim() || '1.0.0',
      updatedDate: 'Just now',
      minAndroid: 'Android 8.0+',
      architecture: 'Universal',
      sha256: 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0',
      featured: false,
      badge: 'New',
      shortDescription: description.trim() || 'Custom community submitted Android application.',
      shortDescriptionBn: description.trim() || 'কমিউনিটি কর্তৃক সাবমিট করা অ্যান্ড্রয়েড অ্যাপ্লিকেশন।',
      fullDescription: description.trim() || 'This application was uploaded directly via the AppDrop community portal.',
      fullDescriptionBn: description.trim() || 'এই অ্যাপ্লিকেশনটি সরাসরি ব্যবহারকারী দ্বারা সাবমিট করা হয়েছে।',
      whatsNew: ['Initial community release v' + (version.trim() || '1.0.0')],
      whatsNewBn: ['প্রাথমিক রিলিজ v' + (version.trim() || '1.0.0')],
      screenshots: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80'
      ],
      permissions: [
        'android.permission.INTERNET',
        'android.permission.ACCESS_NETWORK_STATE'
      ],
      reviews: [],
      versionHistory: [
        { version: version.trim() || '1.0.0', releaseDate: 'Today', size: uploadedFileSize || '24.5 MB', minAndroid: '8.0+', changes: ['Initial upload'] }
      ],
      tags: [category, 'APK', 'Upload', 'Community'],
      isLocalSubmission: true
    };

    onUploadApp(newApp);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.uploadTitle}</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">{t.uploadSubtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert */}
        {isSuccess && (
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
            <span>{lang === 'bn' ? 'অ্যাপ সফলভাবে আপলোড হয়েছে এবং ক্যাটালগে যুক্ত হয়েছে!' : 'App uploaded successfully and published to catalogue!'}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File Drag and Drop zone */}
          <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            className="border-2 border-dashed border-gray-300 dark:border-zinc-700 hover:border-blue-500 rounded-xl p-6 text-center bg-gray-50 dark:bg-zinc-950/50 cursor-pointer transition-colors"
          >
            <input 
              type="file" 
              accept=".apk,.xapk,.apks" 
              onChange={handleFileInput} 
              className="hidden" 
              id="apk-file-input" 
            />
            <label htmlFor="apk-file-input" className="cursor-pointer space-y-2 block">
              <UploadCloud className="w-8 h-8 text-blue-600 mx-auto" />
              {uploadedFileName ? (
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                  <FileCheck className="w-4 h-4" />
                  <span>{uploadedFileName} ({uploadedFileSize})</span>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold text-gray-800 dark:text-zinc-200">
                    {lang === 'bn' ? 'এখানে APK ফাইল ড্রপ করুন বা ব্রাউজ করুন' : 'Drop your .APK file here or click to browse'}
                  </p>
                  <p className="text-[11px] text-gray-400">Supports .APK, .XAPK (Max 2GB)</p>
                </>
              )}
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {lang === 'bn' ? 'অ্যাপের নাম' : 'App Title'} *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. My Awesome Tool"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {lang === 'bn' ? 'ডেভেলপারের নাম' : 'Developer Name'}
              </label>
              <input
                type="text"
                value={developer}
                onChange={(e) => setDeveloper(e.target.value)}
                placeholder="e.g. Studio Dev"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {t.categories}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as AppCategory)}
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Tools">Tools</option>
                <option value="Games">Games</option>
                <option value="Social">Social</option>
                <option value="Bangla">Bangla Apps</option>
                <option value="Finance">Finance</option>
                <option value="Video">Video & Media</option>
                <option value="Photography">Photography</option>
                <option value="Productivity">Productivity</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {t.version}
              </label>
              <input
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="1.0.0"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
                {t.size}
              </label>
              <input
                type="text"
                value={uploadedFileSize}
                onChange={(e) => setUploadedFileSize(e.target.value)}
                placeholder="24.5 MB"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="font-semibold text-gray-700 dark:text-zinc-300 block mb-1">
              {lang === 'bn' ? 'অ্যাপের বর্ণনা' : 'Description'}
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the main features of this application..."
              className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-zinc-200 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors cursor-pointer"
            >
              Publish APK
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
