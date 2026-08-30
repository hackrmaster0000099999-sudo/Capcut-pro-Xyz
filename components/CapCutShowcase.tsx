'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smartphone, 
  Wand2, 
  Layers, 
  Gauge, 
  Video, 
  Crown,
  CheckCircle2,
  ChevronRight,
  Sliders,
  Maximize2
} from 'lucide-react';

interface CapCutShowcaseProps {
  onDownloadClick: () => void;
}

export function CapCutShowcase({ onDownloadClick }: CapCutShowcaseProps) {
  const [sliderPosition, setSliderPosition] = useState(55);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'velocity' | '4k'>('all');

  return (
    <section className="w-full bg-gradient-to-b from-[#10434f] via-[#0b2f38] to-[#09242b] py-10 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">

        {/* 1. Main 3D Floating Phone Showcase matching User's Uploaded Screenshot */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#144f5e] border border-[#1e687b] text-cyan-300 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Pro Interface Showcase</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl">
            Experience Studio-Grade Video Editing in the Palm of Your Hand
          </h2>

          <p className="text-sm sm:text-base text-cyan-100/80 max-w-2xl leading-relaxed">
            CapCut Pro unlocks advanced multi-layer timelines, optical flow speed curves, precision AI color grading, and zero compression 4K 60FPS rendering.
          </p>

          {/* 3D Floating Phone Frame with Ambient Neon Glow */}
          <div className="relative pt-4 sm:pt-6 w-full max-w-md sm:max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-teal-500/10 to-transparent blur-2xl rounded-3xl -z-10" />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#195b6c] via-[#0d3640] to-[#082228] border border-cyan-400/30 shadow-2xl shadow-cyan-950/60"
            >
              <div className="relative aspect-[9/14] sm:aspect-[9/13] w-full rounded-2xl overflow-hidden bg-black border border-[#1b5f70]">
                <Image
                  src="/images/capcut-phone-3d.jpg"
                  alt="CapCut Pro 3D Interface Showcase"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                
                {/* Floating Highlight Badges */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/40 text-[11px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>v20.6 VIP Unlocked</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/40 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>No Watermark</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. 3-Phone Multi-Feature Showcase Container matching Screenshot 4 */}
        <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e3b46] to-[#0a2c34] border border-[#1c6476] shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#175261] pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Core Pro Capabilities
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                3 Powerful Creative Engines in One App
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onDownloadClick}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#10404c] hover:bg-cyan-50 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Unlock All Features</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Phones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Phone 1: Smart Velocity & Speed Curves */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-4 rounded-2xl bg-[#0b2931] border border-[#195665] hover:border-cyan-400/50 transition-all flex flex-col space-y-4 shadow-lg group"
            >
              <div className="relative aspect-[9/13] w-full rounded-xl overflow-hidden bg-black border border-[#144d5a]">
                <Image
                  src="/images/capcut-velocity.jpg"
                  alt="Velocity Speed Curves & Motion Blur"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                  <Crown className="w-3 h-3" />
                  <span>PRO VELOCITY</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  <h4>Smooth Velocity &amp; Optical Flow</h4>
                </div>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Generate buttery-smooth 60fps/120fps slow-motion without frame stuttering using AI optical flow interpolation.
                </p>
              </div>
            </motion.div>

            {/* Phone 2: AI Tools & Smart Auto-Captions */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-4 rounded-2xl bg-[#0b2931] border border-[#195665] hover:border-cyan-400/50 transition-all flex flex-col space-y-4 shadow-lg group"
            >
              <div className="relative aspect-[9/13] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#0a2329] to-[#041114] border border-[#144d5a] p-4 flex flex-col justify-between">
                
                {/* Simulated AI Tools Screen */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400">AI Tools Suite</span>
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded font-bold">Pro VIP</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#113e4a] border border-[#1c6476] flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-black text-xs">
                        T
                      </div>
                      <span className="text-[10px] font-bold text-white leading-tight">Auto Captions</span>
                      <span className="text-[8px] text-cyan-300">99.4% Accuracy</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#113e4a] border border-[#1c6476] flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                        <Wand2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-white leading-tight">AI Beautify</span>
                      <span className="text-[8px] text-emerald-300">Skin &amp; Tone</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#113e4a] border border-[#1c6476] flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-white leading-tight">Stabilization</span>
                      <span className="text-[8px] text-cyan-300">Gimbal Smooth</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#113e4a] border border-[#1c6476] flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-white leading-tight">BG Cutout</span>
                      <span className="text-[8px] text-amber-300">1-Click Chroma</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Active Status */}
                <div className="p-2.5 rounded-lg bg-[#0e353f] border border-[#1a5d6e] flex items-center justify-between text-[11px]">
                  <span className="text-gray-300 font-medium">Bilingual Speech-to-Text</span>
                  <span className="text-emerald-400 font-bold">Activated</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Wand2 className="w-4 h-4 text-purple-400" />
                  <h4>AI Smart Captioning &amp; Background Removal</h4>
                </div>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Automatic subtitle animation with trendy font styles, emoji auto-matching, and green-screen background removal without studio gear.
                </p>
              </div>
            </motion.div>

            {/* Phone 3: 4K 60FPS Color Grading & Stabilization */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-4 rounded-2xl bg-[#0b2931] border border-[#195665] hover:border-cyan-400/50 transition-all flex flex-col space-y-4 shadow-lg group"
            >
              <div className="relative aspect-[9/13] w-full rounded-xl overflow-hidden bg-black border border-[#144d5a]">
                <Image
                  src="/images/capcut-ai-color.jpg"
                  alt="AI Color Grading and HDR Enhancer"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute top-3 left-3 bg-cyan-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                  <Sliders className="w-3 h-3" />
                  <span>AI COLOR CORRECT</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <h4>Intelligent Color Grading &amp; HDR</h4>
                </div>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Transform washed-out footage into cinema-quality color profiles with customized LUT presets, HSL curve adjustments, and tone mapping.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. Interactive Split Comparison: AI Color Correction matching User's Screenshot 1 & 2 */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0c313a] to-[#071f25] border border-[#185969] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134956] text-cyan-300 text-xs font-bold">
                <Sliders className="w-3.5 h-3.5" />
                <span>Side-by-Side Comparison</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                AI Color Correction: Before vs Pro HDR
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Notice the dramatic enhancement in color depth, shadow recovery, skin-tone preservation, and vibrant saturation when processing footage with CapCut Pro&apos;s neural color engine.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-cyan-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Auto exposure balancing in challenging low-light conditions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cyan-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom HSL color picker with skin protection masking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cyan-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lossless 4K 60FPS high-bitrate export with zero compression blur</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onDownloadClick}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm bg-white text-[#10404c] hover:bg-cyan-50 transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Get CapCut Pro v20.6 APK</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Image Comparison Phone Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-md bg-[#082229] p-3 sm:p-4 rounded-3xl border border-[#165666] shadow-2xl space-y-3">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between text-xs px-2 text-gray-400">
                  <span className="font-bold text-white">AI Color Correction Demo</span>
                  <span className="text-cyan-300 font-semibold">Interactive Comparison</span>
                </div>

                {/* Interactive Slider Canvas */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden select-none touch-none border border-[#195e70]">
                  <Image
                    src="/images/capcut-ai-color.jpg"
                    alt="CapCut AI Color Correction Before and After"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />

                  {/* Slider Control Bar */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/40 text-[10px] font-bold text-white shadow-md">
                      Drag slider or tap to view comparison
                    </div>
                  </div>

                  {/* Bottom Info Pill */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 text-xs">
                    <div className="text-left">
                      <span className="text-[10px] text-gray-400 block">Before</span>
                      <span className="font-bold text-gray-300 text-xs">720p Standard</span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-cyan-400 text-[#0c313a] font-extrabold text-xs shadow-sm flex items-center gap-1">
                      <span>Color Correct</span>
                      <span className="text-[9px] bg-[#0c313a] text-amber-300 px-1 py-0.2 rounded font-black">Pro</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-cyan-300 block">After</span>
                      <span className="font-bold text-white text-xs">4K HDR Pro</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
