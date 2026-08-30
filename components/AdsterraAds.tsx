'use client';

import React, { useEffect, useRef } from 'react';

export const SMART_LINK_URL = 'https://www.profitableratecpmnetwork.com/htq3nd5gy?key=7c0a1ef07cc9816b529243d598d5a996';

/**
 * 300x250 Medium Rectangle Adsterra Banner (Responsive iframe container)
 */
export function AdsterraBanner300x250({ className = '' }: { className?: string }) {
  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : 'bcfdfaed660eef7080f5faf1b5060d53',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/bcfdfaed660eef7080f5faf1b5060d53/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/60 mb-1">
        Sponsored Advertisement
      </span>
      <div className="w-[300px] h-[250px] rounded-xl overflow-hidden bg-[#03171c] border border-[#16505e] shadow-md flex items-center justify-center">
        <iframe
          title="Adsterra 300x250 Banner"
          srcDoc={iframeHtml}
          width={300}
          height={250}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}

/**
 * 320x50 Mobile Leaderboard Adsterra Banner
 */
export function AdsterraBanner320x50({ className = '' }: { className?: string }) {
  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '8ded6facc2d90b434cd1c0b28a552a23',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/8ded6facc2d90b434cd1c0b28a552a23/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/60 mb-0.5">
        Sponsored
      </span>
      <div className="w-[320px] h-[50px] rounded-lg overflow-hidden bg-[#03171c] border border-[#16505e] shadow-sm flex items-center justify-center">
        <iframe
          title="Adsterra 320x50 Banner"
          srcDoc={iframeHtml}
          width={320}
          height={50}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}

/**
 * Native Banner Adsterra Unit (Clean Non-Adult Widget)
 */
export function AdsterraNativeBanner({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://pl30849976.profitableratecpmnetwork.com/44aac5a3903f417efd4dc6f90835861e/invoke.js';

    const div = document.createElement('div');
    div.id = 'container-44aac5a3903f417efd4dc6f90835861e';

    containerRef.current.appendChild(script);
    containerRef.current.appendChild(div);
  }, []);

  return (
    <div className={`w-full max-w-3xl mx-auto my-6 px-4 ${className}`}>
      <div className="p-4 rounded-2xl bg-[#06242c] border border-[#175665] shadow-lg space-y-2">
        <div className="flex items-center justify-between border-b border-[#124552] pb-2">
          <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
            Sponsored Recommendations
          </span>
          <span className="text-[10px] text-gray-400">Sponsored</span>
        </div>
        <div ref={containerRef} className="w-full flex justify-center min-h-[90px]" />
      </div>
    </div>
  );
}
