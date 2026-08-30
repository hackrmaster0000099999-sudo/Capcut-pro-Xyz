'use client';

import React from 'react';

interface CapCutProLogoProps {
  className?: string;
  size?: number;
}

export function CapCutProLogo({ className = '', size = 48 }: CapCutProLogoProps) {
  return (
    <div 
      className={`relative shrink-0 overflow-hidden shadow-md ${className}`} 
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.22) }}
    >
      <svg 
        viewBox="0 0 512 512" 
        width={size} 
        height={size}
        className="w-full h-full block"
      >
        <defs>
          <linearGradient id="proBadgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4f78"/>
            <stop offset="50%" stopColor="#e1408e"/>
            <stop offset="100%" stopColor="#7e4ff6"/>
          </linearGradient>
        </defs>

        {/* Black Rounded Rectangle Canvas */}
        <rect width="512" height="512" fill="#000000"/>

        {/* Top White Bar & Upper Cut Wing */}
        <path fill="#ffffff" d="M 138 144 C 122 144 110 157 110 173 C 110 189 122 202 138 202 L 328 202 L 402 158 L 354 184 L 328 184 L 138 184 C 132 184 128 180 128 173 C 128 166 132 162 138 162 L 316 162 L 344 144 Z" />
        
        {/* Diagonal X Intersection & Bottom Bar with Lower Cut Wing */}
        <path fill="#ffffff" d="M 328 184 L 138 296 C 122 305 112 322 112 341 C 112 360 124 374 140 374 L 332 374 C 338 374 344 370 348 364 L 404 330 L 356 354 L 332 354 L 140 354 C 134 354 130 350 130 344 C 130 338 134 334 140 334 L 160 334 L 350 220 C 358 215 364 206 364 196 C 364 188 358 184 350 184 Z" />

        {/* Center Diagonal Crossing Band */}
        <path fill="#ffffff" d="M 136 184 L 336 304 C 342 308 346 314 346 322 C 346 332 338 340 328 340 L 308 340 L 122 228 C 114 223 110 215 110 206 C 110 196 118 188 128 188 L 136 184 Z" />

        {/* Gradient "PRO" Pill Badge in Bottom Right */}
        <rect x="272" y="396" width="154" height="66" rx="33" fill="url(#proBadgeGrad)"/>
        <text 
          x="349" 
          y="444" 
          textAnchor="middle" 
          fill="#ffffff" 
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
          fontWeight="900" 
          fontSize="44" 
          letterSpacing="3"
        >
          PRO
        </text>
      </svg>
    </div>
  );
}
