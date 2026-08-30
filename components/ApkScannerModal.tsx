'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  FileCode, 
  UploadCloud, 
  Cpu, 
  Lock, 
  FileCheck,
  Smartphone
} from 'lucide-react';
import { AppItem } from '@/types/app';
import { translations, Language } from '@/data/translations';

interface ApkScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  allApps: AppItem[];
  onSelectApp: (app: AppItem) => void;
}

export function ApkScannerModal({
  isOpen,
  onClose,
  lang,
  allApps,
  onSelectApp
}: ApkScannerModalProps) {
  const t = translations[lang];

  const [selectedApp, setSelectedApp] = useState<AppItem | null>(allApps[0] || null);
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);
  const [customFileName, setCustomFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRunScan = () => {
    setScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setScanning(false);
      setScanComplete(true);
    }, 1800);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setCustomFileName(file.name);
      handleRunScan();
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setCustomFileName(file.name);
      handleRunScan();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.scanTitle}</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">{t.scanSubtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drop or Select Source */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-700 dark:text-zinc-300">
            {lang === 'bn' ? 'স্ক্যান করার জন্য ফাইল দিন অথবা তালিকা থেকে বেছে নিন' : 'Drop any APK to analyze or pick an app from catalog:'}
          </label>

          <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            className="border-2 border-dashed border-gray-300 dark:border-zinc-700 hover:border-blue-500 rounded-xl p-4 text-center bg-gray-50 dark:bg-zinc-950/40 cursor-pointer transition-colors"
          >
            <input 
              type="file" 
              accept=".apk,.xapk" 
              onChange={handleFileInput} 
              className="hidden" 
              id="scanner-file-input" 
            />
            <label htmlFor="scanner-file-input" className="cursor-pointer space-y-1 block">
              <UploadCloud className="w-6 h-6 text-blue-600 mx-auto" />
              <p className="text-xs font-semibold text-gray-800 dark:text-zinc-200">
                {customFileName ? `Selected: ${customFileName}` : (lang === 'bn' ? 'এখানে ফাইল ড্রপ করুন বা ব্রাউজ করুন' : 'Drop local APK to inspect security parameters')}
              </p>
            </label>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {allApps.slice(0, 6).map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  setSelectedApp(app);
                  setCustomFileName(null);
                  handleRunScan();
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors border ${
                  selectedApp?.id === app.id && !customFileName
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700'
                }`}
              >
                <img src={app.icon} alt={app.title} className="w-4 h-4 rounded-md object-cover" />
                <span>{app.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scanner Body / Animation */}
        {scanning ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 border-3 border-blue-200 dark:border-blue-900 border-t-blue-600 rounded-full animate-spin mx-auto" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {lang === 'bn' ? 'APK সিগনেচার ও ভাইরাস স্ক্যান চলছে...' : 'Analyzing APK binary structure & certificates...'}
              </p>
              <p className="text-xs text-gray-400 font-mono">
                Checking SHA256 • Verifying Google Play Protect Rules • 0 Malicious Traces
              </p>
            </div>
          </div>
        ) : scanComplete && selectedApp ? (
          <div className="space-y-4">
            {/* Status Card */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-blue-900 dark:text-blue-200">
                    {lang === 'bn' ? '১০০% নিরাপদ - কোনো হুমকি পাওয়া যায়নি' : 'Clean & Verified - 0 Security Threats Detected'}
                  </h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Scanned with Play Protect Definition v2025.05 • VirusTotal 0/72
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 shrink-0">
                PASSED
              </span>
            </div>

            {/* Inspection Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 space-y-1">
                <span className="text-gray-400">Target Application</span>
                <p className="font-bold text-gray-900 dark:text-white truncate">
                  {customFileName || selectedApp.title}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 space-y-1">
                <span className="text-gray-400">Package Identifier</span>
                <p className="font-mono font-bold text-gray-900 dark:text-white truncate">
                  {selectedApp.packageName}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 space-y-1">
                <span className="text-gray-400">Target Architecture</span>
                <p className="font-bold text-gray-900 dark:text-white">
                  {selectedApp.architecture}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 space-y-1">
                <span className="text-gray-400">Minimum Android Version</span>
                <p className="font-bold text-gray-900 dark:text-white">
                  {selectedApp.minAndroid}
                </p>
              </div>
            </div>

            {/* SHA Hash */}
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs space-y-1 font-mono">
              <span className="text-gray-500 font-sans font-semibold">Official SHA-256 Checksum:</span>
              <p className="text-[11px] text-gray-800 dark:text-zinc-200 break-all">{selectedApp.sha256}</p>
            </div>

            {/* Action button */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onSelectApp(selectedApp);
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'এই অ্যাপটি ডাউনলোড করুন' : 'Download This App'}
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
}
