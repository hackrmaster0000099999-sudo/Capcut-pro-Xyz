export interface CapCutVersion {
  version: string;
  releaseDate: string;
  size: string;
  androidReq: string;
  downloadUrl: string;
  changes: string[];
  isLatest?: boolean;
}

export interface CapCutGuideSection {
  id: string;
  title: string;
  menuLabel: string;
  shortDesc: string;
  content: string;
  items?: string[];
}

export const CAPCUT_OLD_VERSIONS: CapCutVersion[] = [
  {
    version: '20.6.0 (Latest Pro)',
    releaseDate: 'June 29, 2026',
    size: '291 MB',
    androidReq: 'Android 6.0+',
    downloadUrl: 'https://apkdone.com/uploads/apps/1786079684479-capcut-pro-latest-version.apk',
    changes: ['Unlocked 4K 60FPS Export', 'AI Velocity Slow-Motion 2.0', 'Auto Background Removal No Lag', 'VIP Cloud Assets Unlocked'],
    isLatest: true
  },
  {
    version: '20.5.2 Pro',
    releaseDate: 'May 14, 2026',
    size: '284 MB',
    androidReq: 'Android 6.0+',
    downloadUrl: 'https://apkdone.com/uploads/apps/1786079684479-capcut-pro-latest-version.apk',
    changes: ['3D Zoom Pro transitions', 'Smart Vocal Isolation', 'Reduced battery consumption on Snapdragon chips']
  },
  {
    version: '20.2.0 Stable',
    releaseDate: 'April 02, 2026',
    size: '276 MB',
    androidReq: 'Android 5.0+',
    downloadUrl: 'https://apkdone.com/uploads/apps/1786079684479-capcut-pro-latest-version.apk',
    changes: ['Enhanced Chroma Key precision', 'Zero ads and watermark removed', 'Fixed XML project import']
  },
  {
    version: '19.8.1 Lite',
    releaseDate: 'February 18, 2026',
    size: '235 MB',
    androidReq: 'Android 5.0+',
    downloadUrl: 'https://apkdone.com/uploads/apps/1786079684479-capcut-pro-latest-version.apk',
    changes: ['Optimized for low-end devices (2GB RAM)', 'Smooth 1080p rendering', 'Offline filter presets']
  },
  {
    version: '19.1.0 Classic',
    releaseDate: 'December 20, 2025',
    size: '220 MB',
    androidReq: 'Android 5.0+',
    downloadUrl: 'https://apkdone.com/uploads/apps/1786079684479-capcut-pro-latest-version.apk',
    changes: ['Original UI layout', 'Classic beat sync algorithm', 'High stability on older Android versions']
  }
];

export const CAPCUT_TEMPLATES = [
  {
    id: 'velocity-beat',
    title: 'Velocity Beat Sync 4K',
    creator: 'CapCut Creator Hub',
    uses: '2.4M uses',
    duration: '0:14',
    tag: 'Trending'
  },
  {
    id: 'cyberpunk-neon',
    title: 'Cyberpunk Glow & Flash',
    creator: 'VisualFX Pro',
    uses: '1.8M uses',
    duration: '0:19',
    tag: 'Effects'
  },
  {
    id: 'cinematic-travel',
    title: 'Cinematic Travel Vlog Color Grade',
    creator: 'Aesthetic Edits',
    uses: '950K uses',
    duration: '0:30',
    tag: 'Cinematic'
  },
  {
    id: 'anime-transition',
    title: 'Anime Seamless Swipe Transition',
    creator: 'AnimeCut Official',
    uses: '3.1M uses',
    duration: '0:12',
    tag: 'Viral'
  }
];
