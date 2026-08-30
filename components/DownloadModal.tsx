'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Server
} from 'lucide-react';
import { CapCutProLogo } from '@/components/CapCutProLogo';

interface DownloadModalProps {
  versionName?: string;
  onClose: () => void;
}

export function DownloadModal({ versionName = 'CapCut Pro APK v20.6 (Latest)', onClose }: DownloadModalProps) {
  const [downloadStep, setDownloadStep] = useState<'countdown' | 'ready' | 'downloading' | 'completed'>('countdown');
  const [countdown, setCountdown] = useState(4);
  const [progress, setProgress] = useState(0);
  const [selectedMirror, setSelectedMirror] = useState('cdn1');

  useEffect(() => {
    if (downloadStep === 'countdown') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setDownloadStep('ready');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [downloadStep]);

  useEffect(() => {
    if (downloadStep === 'downloading') {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setDownloadStep('completed');
            return 100;
          }
          return p + 14;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [downloadStep]);

  const handleStartDownload = () => {
    setDownloadStep('downloading');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] rounded-3xl shadow-2xl border border-[#1c6476] p-6 sm:p-7 z-10 animate-in zoom-in-95 duration-150 space-y-6 text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#185969] pb-3.5">
          <div className="flex items-center gap-3">
            <CapCutProLogo size={34} />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                Download Package
              </h3>
              <p className="text-[11px] text-cyan-200/70">Verified Direct Fast Mirror</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-[#155363] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Details Box */}
        <div className="p-4 rounded-2xl bg-[#082229] border border-[#165160] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white">{versionName}</span>
            <span className="px-2 py-0.5 rounded font-bold bg-[#144f5e] text-cyan-300 border border-[#1f6d81]">
              291 MB
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-cyan-100/80 pt-1">
            <span>• Android 6.0+ Supported</span>
            <span>• No Watermark Unlocked</span>
            <span>• SHA-256 Verified Clean</span>
            <span>• 100% Virus-Free Pass</span>
          </div>
        </div>

        {/* State 1: Countdown */}
        {downloadStep === 'countdown' && (
          <div className="text-center py-6 space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#134956] border-2 border-cyan-400 text-cyan-300 font-extrabold text-2xl flex items-center justify-center mx-auto shadow-lg shadow-cyan-950/60 animate-pulse">
              {countdown}
            </div>
            <p className="text-sm font-semibold text-white">
              Generating your secure direct download link...
            </p>
            <p className="text-xs text-gray-400">Scanning cryptographic package hash</p>
          </div>
        )}

        {/* State 2: Ready */}
        {downloadStep === 'ready' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Select Mirror Server:</span>
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'cdn1', name: 'Ultra CDN (Singapore ⚡)' },
                  { id: 'cdn2', name: 'US Cloud Mirror (Fast)' },
                  { id: 'cdn3', name: 'Europe Direct Mirror' },
                  { id: 'cdn4', name: 'Google Drive Backup' }
                ].map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMirror(m.id)}
                    className={`p-3 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                      selectedMirror === m.id
                        ? 'border-cyan-400 bg-[#144f5e] text-white font-bold shadow-md ring-1 ring-cyan-400'
                        : 'border-[#175261] bg-[#0b2931] text-cyan-200 hover:bg-[#113f4a]'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleStartDownload}
              className="w-full py-3.5 rounded-2xl font-extrabold text-sm bg-white text-[#10404c] hover:bg-cyan-50 shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4 text-[#10404c]" />
              <span>Start Direct Download Now</span>
            </button>
          </div>
        )}

        {/* State 3: Downloading */}
        {downloadStep === 'downloading' && (
          <div className="space-y-4 py-4 text-center">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-cyan-200">
                <span>Downloading CapCut APK...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#082229] border border-[#144956] overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">Transmitting bytes from verified secure CDN mirror...</p>
          </div>
        )}

        {/* State 4: Completed */}
        {downloadStep === 'completed' && (
          <div className="space-y-4 py-2 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Download Initiated Successfully!</h4>
              <p className="text-xs text-gray-300 mt-1">
                Your browser is receiving the APK file. Open your Downloads folder and tap the APK to install.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl font-bold text-xs bg-white text-[#10404c] hover:bg-cyan-50 transition-colors cursor-pointer"
            >
              Done / Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
