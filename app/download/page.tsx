'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  Download, 
  CheckCircle2, 
  ArrowLeft,
  Lock,
  Unlock,
  RefreshCw,
  Check,
  Play
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CapCutProLogo } from '@/components/CapCutProLogo';
import { 
  SMART_LINK_URL, 
  AdsterraBanner300x250, 
  AdsterraBanner320x50, 
  AdsterraNativeBanner 
} from '@/components/AdsterraAds';

function DownloadContent() {
  const searchParams = useSearchParams();
  const requestedVersion = searchParams.get('version') || 'CapCut Pro APK v20.6';

  // Step States
  const [step1Timer, setStep1Timer] = useState(0);
  const [step1Completed, setStep1Completed] = useState(false);

  const [step2Timer, setStep2Timer] = useState(0);
  const [step2Completed, setStep2Completed] = useState(false);

  const isUnlocked = step1Completed && step2Completed;

  // Download States
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  // Step 1 Timer
  useEffect(() => {
    if (step1Timer <= 0) return;
    const timer = setTimeout(() => {
      if (step1Timer === 1) {
        setStep1Completed(true);
        setStep1Timer(0);
      } else {
        setStep1Timer(prev => prev - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [step1Timer]);

  // Step 2 Timer
  useEffect(() => {
    if (step2Timer <= 0) return;
    const timer = setTimeout(() => {
      if (step2Timer === 1) {
        setStep2Completed(true);
        setStep2Timer(0);
      } else {
        setStep2Timer(prev => prev - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [step2Timer]);

  const handleStartStep1 = () => {
    if (step1Completed || step1Timer > 0) return;
    try {
      window.open(SMART_LINK_URL, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback if blocked
    }
    setStep1Timer(5);
  };

  const handleStartStep2 = () => {
    if (step2Completed || step2Timer > 0) return;
    try {
      window.open(SMART_LINK_URL, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback if blocked
    }
    setStep2Timer(5);
  };

  const startDownload = () => {
    if (!isUnlocked) return;

    setDownloading(true);
    setDownloadProgress(0);
    setDownloadCompleted(false);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setDownloadProgress(100);
        setDownloading(false);
        setDownloadCompleted(true);
        
        try {
          const element = document.createElement('a');
          const file = new Blob([
            `CapCut Pro APK v20.6 (Official Android Build)\nPackage: com.lemon.lvoverseas\nVerified: CapCutPro.Org.in\nUnlocked: 4K 60FPS Lossless Export, VIP Cloud Effects, Zero Watermark, 100% Ad-Free.`
          ], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = 'CapCut_Pro_v20.6_Android.apk';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        } catch {
          // Fallback
        }
      } else {
        setDownloadProgress(current);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071f25] text-cyan-50 font-sans antialiased">
      <Navbar />

      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center space-y-5">
        
        {/* Back Link */}
        <div className="w-full flex items-center justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors bg-[#0a2e37] hover:bg-[#0f404d] px-3.5 py-1.5 rounded-lg border border-[#165666]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>হোমে ফিরে যান</span>
          </Link>
        </div>

        {/* Top 320x50 Banner */}
        <div className="w-full flex justify-center">
          <AdsterraBanner320x50 />
        </div>

        {/* Clean Main Card */}
        <div className="w-full rounded-2xl bg-[#092b34] border border-[#175b6c] p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-[#041a1f] border border-[#165666] shadow-md">
              <CapCutProLogo size={48} />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              {requestedVersion}
            </h1>
            <p className="text-xs text-cyan-200">
              সাইজ: <strong>291 MB</strong> • আনলক করতে নিচের ২টি স্টেপ সম্পন্ন করুন
            </p>
          </div>

          {/* Steps Container */}
          <div className="space-y-3.5">
            
            {/* STEP 1 */}
            <div className={`p-4 rounded-xl border transition-all ${
              step1Completed 
                ? 'bg-emerald-950/30 border-emerald-500/40' 
                : step1Timer > 0
                  ? 'bg-[#0b3642] border-cyan-400'
                  : 'bg-[#062026] border-[#144f5e]'
            }`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    step1Completed ? 'bg-emerald-500 text-black' : 'bg-[#10424f] text-cyan-300'
                  }`}>
                    {step1Completed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '১'}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-white">স্টেপ ১: বিজ্ঞাপন দেখুন</h3>
                    <p className="text-[11px] text-gray-300">
                      {step1Completed ? 'সম্পন্ন হয়েছে' : step1Timer > 0 ? `অপেক্ষা করুন (${step1Timer}s)...` : '৫ সেকেন্ডের অ্যাড দেখুন'}
                    </p>
                  </div>
                </div>

                <div>
                  {step1Completed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Done</span>
                    </span>
                  ) : step1Timer > 0 ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-[#051c22] px-3 py-1.5 rounded-lg border border-cyan-400">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>{step1Timer}s</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleStartStep1}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold shadow transition-all cursor-pointer active:scale-95"
                    >
                      <Play className="w-3 h-3 fill-black" />
                      <span>শুরু করুন</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Ad Slot 1 (300x250 Banner) */}
              <div className="mt-3 pt-2 border-t border-[#134956] flex justify-center">
                <AdsterraBanner300x250 />
              </div>
            </div>

            {/* STEP 2 */}
            <div className={`p-4 rounded-xl border transition-all ${
              step2Completed 
                ? 'bg-emerald-950/30 border-emerald-500/40' 
                : step2Timer > 0
                  ? 'bg-[#0b3642] border-cyan-400'
                  : 'bg-[#062026] border-[#144f5e]'
            }`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    step2Completed ? 'bg-emerald-500 text-black' : 'bg-[#10424f] text-cyan-300'
                  }`}>
                    {step2Completed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '২'}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-white">স্টেপ ২: বিজ্ঞাপন দেখুন</h3>
                    <p className="text-[11px] text-gray-300">
                      {step2Completed ? 'সম্পন্ন হয়েছে' : step2Timer > 0 ? `অপেক্ষা করুন (${step2Timer}s)...` : '৫ সেকেন্ডের অ্যাড দেখুন'}
                    </p>
                  </div>
                </div>

                <div>
                  {step2Completed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Done</span>
                    </span>
                  ) : step2Timer > 0 ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-[#051c22] px-3 py-1.5 rounded-lg border border-cyan-400">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>{step2Timer}s</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleStartStep2}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold shadow transition-all cursor-pointer active:scale-95"
                    >
                      <Play className="w-3 h-3 fill-black" />
                      <span>শুরু করুন</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Ad Slot 2 (300x250 Banner) */}
              <div className="mt-3 pt-2 border-t border-[#134956] flex justify-center">
                <AdsterraBanner300x250 />
              </div>
            </div>

            {/* STEP 3: DOWNLOAD */}
            <div className="pt-2">
              {/* Progress Bar during download */}
              {downloading && (
                <div className="mb-3 p-3 rounded-xl bg-[#051b20] border border-cyan-500/40 space-y-1.5 text-xs">
                  <div className="flex justify-between text-cyan-300 font-bold">
                    <span>ডাউনলোড হচ্ছে...</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#021013] overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-200"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {downloadCompleted && (
                <div className="mb-3 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-400 text-emerald-200 text-xs text-center font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ডাউনলোড শুরু হয়েছে! ফাইলের নোটিফিকেশন চেক করুন।</span>
                </div>
              )}

              {isUnlocked ? (
                <button
                  type="button"
                  id="final-download-btn"
                  onClick={startDownload}
                  disabled={downloading}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-[#052128] font-black text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <Unlock className="w-4 h-4" />
                  <Download className="w-4 h-4 stroke-[2.8]" />
                  <span>{downloadCompleted ? 'আবার ডাউনলোড করুন (291 MB)' : 'স্টেপ ৩: ডাউনলোড করুন (291 MB)'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-3.5 px-4 rounded-xl bg-[#061e24] border border-[#134956] text-gray-400 font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
                >
                  <Lock className="w-4 h-4" />
                  <span>স্টেপ ৩: ডাউনলোড লকড ({!step1Completed && !step2Completed ? 'স্টেপ ১ ও ২ সম্পন্ন করুন' : !step1Completed ? 'স্টেপ ১ সম্পন্ন করুন' : 'স্টেপ ২ সম্পন্ন করুন'})</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Native Banner */}
        <div className="w-full">
          <AdsterraNativeBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#071f25] text-cyan-200">
        <div className="flex items-center gap-2 text-sm font-bold">
          <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
          <span>লোড হচ্ছে...</span>
        </div>
      </div>
    }>
      <DownloadContent />
    </Suspense>
  );
}


