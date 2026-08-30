'use client';

import React, { useEffect, useRef } from 'react';

export const SMART_LINK_URL = 'https://www.profitableratecpmnetwork.com/mfnxxg0sai?key=398333ad34073fbfd5c21aef20c752a3';

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
            'key' : '47240eae665538c8bdd29dcedf622e82',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/47240eae665538c8bdd29dcedf622e82/invoke.js"></script>
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
            'key' : '338d24b7f91005bf457ac54097234e86',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/338d24b7f91005bf457ac54097234e86/invoke.js"></script>
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
 * Native Banner Adsterra Unit (Seamless blend into content)
 */
export function AdsterraNativeBanner({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://pl30535388.profitableratecpmnetwork.com/199159f5c0352ee44e0d3b4d61492adc/invoke.js';

    const div = document.createElement('div');
    div.id = 'container-199159f5c0352ee44e0d3b4d61492adc';

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
          <span className="text-[10px] text-gray-400">Adsterra Native</span>
        </div>
        <div ref={containerRef} className="w-full flex justify-center min-h-[90px]" />
      </div>
    </div>
  );
}
