import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  metadataBase: new URL('https://capcut-pro-apk.vercel.app'),
  title: {
    default: 'CapCut Pro APK Download (v20.6) - Latest Version Without Watermark 2026',
    template: '%s | CapCut Pro APK',
  },
  description: 'Download CapCut Pro APK Latest Version v20.6 for Android. 100% Free & Safe, No Watermark, 4K 60FPS Export, All Premium VIP Effects & AI Video Tools Unlocked.',
  keywords: [
    'CapCut Pro APK',
    'CapCut Pro APK Download',
    'CapCut Pro Latest Version v20.6',
    'CapCut Mod APK No Watermark',
    'CapCut Pro Free Download Android',
    'CapCut 4K 60FPS Video Editor',
    'CapCut VIP Unlocked APK',
    'CapCut Templates Free',
    'CapCut Old Versions Download',
    'CapCut for PC Windows'
  ],
  authors: [{ name: 'CapCut Pro Community' }],
  creator: 'CapCut Pro Team',
  publisher: 'CapCut Pro Portal',
  applicationName: 'CapCut Pro APK Portal',
  generator: 'Next.js',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'CapCut Pro APK Download (v20.6) - Latest Version Without Watermark',
    description: 'Download CapCut Pro APK Latest Version v20.6 with all premium unlocked features, no watermark, 4K 60FPS export, trending templates, and error fixes.',
    url: 'https://capcut-pro-apk.vercel.app',
    siteName: 'CapCut Pro APK Portal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CapCut Pro APK Download v20.6 (No Watermark, 4K Export)',
    description: 'Download CapCut Pro APK Latest Version v20.6 with all premium unlocked features, no watermark, 4K 60FPS export, and VIP filters.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      'name': 'CapCut Pro APK',
      'operatingSystem': 'Android 6.0+',
      'applicationCategory': 'MultimediaApplication',
      'softwareVersion': '20.6',
      'fileSize': '291MB',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'ratingCount': '148920',
      },
      'description': 'CapCut Pro APK gives you full access to all VIP video editing features, AI smart cutout, 4K 60FPS export, Chroma key, and no watermark on Android devices.',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Is CapCut Pro APK safe to install on Android?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, the CapCut Pro APK package provided on this portal is tested with VirusTotal and Play Protect to ensure it is 100% clean of malware and adware.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I download CapCut Pro without a watermark?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simply click the download button on this website, complete the fast verification, and install the APK to export unlimited 4K videos without any ending watermark.'
          }
        }
      ]
    }
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Adsterra Social Bar Ad Unit */}
        <Script
          src="https://pl30535387.profitableratecpmnetwork.com/98/c5/c2/98c5c2bda9f8bee3f8baa834828887a8.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
