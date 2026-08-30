import { AppItem } from '@/types/app';

export const initialApps: AppItem[] = [
  // 1. bKash - Bangladesh's #1 Fintech app
  {
    id: 'bkash-bd',
    title: 'bKash - Send Money & Recharge',
    titleBn: 'বিকাশ - সেন্ড মানি ও রিচার্জ',
    packageName: 'com.bKash.customerapp',
    developer: 'bKash Limited',
    developerVerified: true,
    category: 'Finance',
    categoryBn: 'ফাইন্যান্স',
    icon: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    rating: 4.8,
    ratingCount: 1420500,
    downloads: '50M+',
    downloadCountNum: 50000000,
    size: '42.8 MB',
    version: '5.6.2',
    updatedDate: 'May 12, 2025',
    minAndroid: 'Android 7.0+',
    architecture: 'arm64-v8a, armeabi-v7a',
    sha256: '9f82ab304e223bf98acde92305bcde89334fe812a87b1c4e908123efd9a712bc',
    featured: true,
    editorsChoice: true,
    trendingRank: 1,
    badge: 'Bangla Special',
    shortDescription: 'Bangladesh’s most popular mobile financial service for instant send money, bill pay, and digital shopping.',
    shortDescriptionBn: 'বাংলাদেশের সবচেয়ে জনপ্রিয় মোবাইল আর্থিক সেবা অ্যাপ। দ্রুত সেন্ড মানি, বিল পেমেন্ট ও রিচার্জ করুন।',
    fullDescription: 'bKash is a mobile financial service in Bangladesh that lets users deposit, cash out, send money, pay bills, make online purchases, and take digital loans with zero hassle and bank-grade biometric security.',
    fullDescriptionBn: 'বিকাশ একটি নির্ভরযোগ্য মোবাইল ফিনান্সিয়াল সার্ভিস। সহজেই সেন্ড মানি, ক্যাশ ইন, ক্যাশ আউট, মোবাইল রিচার্জ, ইউটিলিটি বিল পেমেন্ট এবং ডিজিটাল কেনাকাটা করুন ফিঙ্গারপ্রিন্ট বা ফেসলকের সহায়তায়।',
    whatsNew: [
      'New streamlined QR code scanning for faster merchant payments',
      'Enhanced Digital Nano Loan tracking dashboard',
      'Bug fixes and biometric fingerprint login speed improvements'
    ],
    whatsNewBn: [
      'দ্রুত পেমেন্টের জন্য নতুন কিউআর স্ক্যানার অপ্টিমাইজেশন',
      'ডিজিটাল ন্যানো লোন স্ট্যাটাস ট্র্যাকিং সহজতর করা হয়েছে',
      'ফিঙ্গারপ্রিন্ট লগইন আরও দ্রুত ও স্মুথ করা হয়েছে'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.CAMERA',
      'android.permission.READ_CONTACTS',
      'android.permission.USE_BIOMETRIC',
      'android.permission.ACCESS_FINE_LOCATION'
    ],
    reviews: [
      {
        id: 'r1',
        userName: 'Tanvir Ahmed',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 days ago',
        comment: 'Very smooth interface and the direct APK downloads always work without Google Play errors on my phone.',
        helpfulCount: 48,
        verifiedUser: true
      },
      {
        id: 'r2',
        userName: 'Sadia Rahman',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        comment: 'অনেক ফাস্ট কাজ করে এবং নতুন আপডেটটা দারুণ হয়েছে।',
        helpfulCount: 29,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '5.6.2', releaseDate: 'May 12, 2025', size: '42.8 MB', minAndroid: '7.0+', changes: ['Latest security patch and QR engine upgrade'] },
      { version: '5.6.0', releaseDate: 'April 05, 2025', size: '41.9 MB', minAndroid: '7.0+', changes: ['Utility bill reminder feature added'] },
      { version: '5.5.4', releaseDate: 'March 18, 2025', size: '40.5 MB', minAndroid: '6.0+', changes: ['UI performance enhancements'] }
    ],
    tags: ['Fintech', 'Bangladesh', 'Send Money', 'Mobile Banking', 'Recharge']
  },

  // 2. CapCut - Video Editor
  {
    id: 'capcut-video-editor',
    title: 'CapCut - Video Editor & Maker',
    titleBn: 'ক্যাপকাট - ভিডিও এডিটর ও মেকার',
    packageName: 'com.lemon.lvoverseas',
    developer: 'Bytedance Pte. Ltd.',
    developerVerified: true,
    category: 'Video',
    categoryBn: 'ভিডিও',
    icon: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80',
    rating: 4.7,
    ratingCount: 8940000,
    downloads: '500M+',
    downloadCountNum: 500000000,
    size: '124.5 MB',
    version: '11.8.0',
    updatedDate: 'May 18, 2025',
    minAndroid: 'Android 8.0+',
    architecture: 'arm64-v8a',
    sha256: '71a4f0281b379c6b98e1f5793081e7d8961726a4891b24e650c82fb6123498ac',
    featured: true,
    editorsChoice: true,
    trendingRank: 2,
    badge: 'Hot',
    shortDescription: 'All-in-one video editor with AI effects, automatic captions, keyframe animations, and trending TikTok templates.',
    shortDescriptionBn: 'এআই ইফেক্টস, অটো সাবটাইটেল এবং ট্রেন্ডিং টেমপ্লেট সহ সেরা মোবাইল ভিডিও এডিটিং অ্যাপ।',
    fullDescription: 'CapCut is the official free Video Editor and Video Maker with music for TikTok and YouTube Shorts that is versatile and easy-to-use. Create stunning 4K 60FPS videos with smart body tracking, voice changer, optical flow slow-motion, and chroma key.',
    fullDescriptionBn: 'ক্যাপকাট হলো সবচেয়ে জনপ্রিয় অল-ইন-ওয়ান ভিডিও এডিটিং অ্যাপ। প্রফেশনাল ট্রানজিশন, অটো ক্যাপশন, কালার গ্রেডিং এবং ৪কে এক্সপোর্ট সাপোর্ট করে।',
    whatsNew: [
      'New AI Body Outline and Glowing effects',
      'Super Resolution 4K Export engine',
      'Smoother multi-track timeline preview'
    ],
    whatsNewBn: [
      'নতুন এআই বডি আউটলাইন ও গ্লো ইফেক্ট',
      'সুপার রেজোলিউশন ৪কে এক্সপোর্ট অপশন',
      'স্মুথ মাল্টি-ট্র্যাক টাইমলাইন প্রিভিউ'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.CAMERA',
      'android.permission.RECORD_AUDIO',
      'android.permission.READ_MEDIA_VIDEO',
      'android.permission.READ_MEDIA_IMAGES',
      'android.permission.INTERNET'
    ],
    reviews: [
      {
        id: 'r3',
        userName: 'Mahmudul Hasan',
        userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 days ago',
        comment: 'Best editor for reels and TikTok. The 60fps export is clean and lag-free.',
        helpfulCount: 82,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '11.8.0', releaseDate: 'May 18, 2025', size: '124.5 MB', minAndroid: '8.0+', changes: ['New AI Smart Cutout 2.0'] },
      { version: '11.7.2', releaseDate: 'May 02, 2025', size: '122.1 MB', minAndroid: '8.0+', changes: ['Voice changer filters upgraded'] }
    ],
    tags: ['Video Editor', 'CapCut', 'TikTok Maker', 'Reels', '4K Editor']
  },

  // 3. Free Fire MAX - Game
  {
    id: 'free-fire-max',
    title: 'Free Fire MAX - Battle Royale',
    titleBn: 'ফ্রি ফায়ার ম্যাক্স - ব্যাটেল রয়্যাল',
    packageName: 'com.dts.freefiremax',
    developer: 'Garena International I',
    developerVerified: true,
    category: 'Games',
    categoryBn: 'গেমস',
    icon: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80',
    rating: 4.6,
    ratingCount: 15800000,
    downloads: '100M+',
    downloadCountNum: 100000000,
    size: '640.2 MB',
    version: '2.109.1',
    updatedDate: 'May 20, 2025',
    minAndroid: 'Android 8.0+',
    architecture: 'arm64-v8a, x86_64',
    sha256: '5d891b9382acdef90812389cbfa7182903829103940192837491028374619283',
    featured: true,
    editorsChoice: true,
    trendingRank: 3,
    badge: 'Hot',
    shortDescription: 'Premium battle royale experience designed exclusively for ultra HD graphics, immersive audio, and 50-player combat.',
    shortDescriptionBn: 'আল্ট্রা এইচডি গ্রাফিক্স ও হাইপার-রিয়েল অডিও সহ ৫০ জনের জমজমাট ব্যাটল রয়্যাল গেম।',
    fullDescription: 'Free Fire MAX delivers an ultra-smooth survival shooter experience in Ultra HD. Parachute onto a remote island with 49 other combatants, seek out high-tier loot, construct barricades with Craftland, and survive until the final safe zone collapses.',
    fullDescriptionBn: 'ফ্রি ফায়ার ম্যাক্স দিচ্ছে প্রিমিয়াম ব্যাটল রয়্যাল অভিজ্ঞতা। ৫০ জন খেলোয়াড়ের মধ্যে ১০ মিনিটের উত্তেজনাপূর্ণ লড়াইয়ে শেষ পর্যন্ত টিকে থেকে বুইয়া (Booyah) হাসিল করুন।',
    whatsNew: [
      'New Bermuda map revamp with higher texture quality',
      'Guild 2.0 system with weekly championship tournaments',
      'New weapon: SCAR-Evolution with customized kill effects'
    ],
    whatsNewBn: [
      'বারমুডা ম্যাপের নতুন গ্রাফিক্স ও টেক্সচার আপডেট',
      'নতুন গিল্ড টুর্নামেন্ট ও এক্সক্লুসিভ রিওয়ার্ডস',
      'নতুন গান স্কিন ও সাউন্ড ইফেক্টস'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.RECORD_AUDIO',
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.VIBRATE'
    ],
    reviews: [
      {
        id: 'r4',
        userName: 'Rifat Hossain',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: 'Yesterday',
        comment: 'Direct APK installation is super fast. No OBB missing errors! 10/10.',
        helpfulCount: 95,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '2.109.1', releaseDate: 'May 20, 2025', size: '640.2 MB', minAndroid: '8.0+', changes: ['Season 38 Launch Patch'] },
      { version: '2.108.0', releaseDate: 'April 14, 2025', size: '625.0 MB', minAndroid: '8.0+', changes: ['Clash Squad Balance adjustments'] }
    ],
    tags: ['Battle Royale', 'Shooter', 'Action', 'Garena', 'Multiplayer']
  },

  // 4. WhatsApp Messenger
  {
    id: 'whatsapp-messenger',
    title: 'WhatsApp Messenger',
    titleBn: 'হোয়াটসঅ্যাপ মেসেঞ্জার',
    packageName: 'com.whatsapp',
    developer: 'Meta Platforms, Inc.',
    developerVerified: true,
    category: 'Social',
    categoryBn: 'সোশ্যাল',
    icon: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&auto=format&fit=crop&q=80',
    rating: 4.5,
    ratingCount: 198000000,
    downloads: '5B+',
    downloadCountNum: 5000000000,
    size: '58.4 MB',
    version: '2.25.9.74',
    updatedDate: 'May 21, 2025',
    minAndroid: 'Android 6.0+',
    architecture: 'Universal',
    sha256: '284cde91029384756bca92019384756201928374650192837465910293847561',
    featured: true,
    editorsChoice: true,
    trendingRank: 4,
    badge: 'Updated',
    shortDescription: 'Simple, secure, and private messaging & crystal-clear voice/video calls across smartphones.',
    shortDescriptionBn: 'এন্ড-টু-এন্ড এনক্রিপ্টেড নিরাপদ ও প্রাইভেট মেসেজিং এবং অডিও/ভিডিও কলিং অ্যাপ।',
    fullDescription: 'WhatsApp from Meta is a 100% free messaging and video calling app used by over 2B people in more than 180 countries. It is simple, reliable, and private, so you can easily keep in touch with your friends and family with end-to-end encryption.',
    fullDescriptionBn: 'হোয়াটসঅ্যাপ একটি নিরাপদ ও দ্রুত মেসেজিং অ্যাপ। বিশ্বজুড়ে শতকোটি মানুষের বিশ্বস্ত মাধ্যম যেখানে বার্তা, ছবি, ভয়েস নোট ও এইচডি ভিডিও কল সম্পূর্ণ এনক্রিপ্টেড থাকে।',
    whatsNew: [
      'Screen sharing with system audio support during video calls',
      'Meta AI Assistant integrated directly in search and chat',
      'HD photo and video default sharing options'
    ],
    whatsNewBn: [
      'ভিডিও কলে অডিও সহ স্ক্রিন শেয়ারিং সুবিধা',
      'চ্যাট ও সার্চে মেটা এআই অ্যাসিস্ট্যান্ট যুক্ত',
      'ডিফল্টভাবে ফুল এইচডি ছবি ও ভিডিও পাঠানোর অপশন'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.READ_CONTACTS',
      'android.permission.CAMERA',
      'android.permission.RECORD_AUDIO',
      'android.permission.READ_PHONE_STATE'
    ],
    reviews: [
      {
        id: 'r5',
        userName: 'Ayesha Siddika',
        userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '4 days ago',
        comment: 'Safe and authentic signed APK from Meta. Works perfectly on Android 14.',
        helpfulCount: 54,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '2.25.9.74', releaseDate: 'May 21, 2025', size: '58.4 MB', minAndroid: '6.0+', changes: ['Meta AI updates'] },
      { version: '2.25.8.10', releaseDate: 'May 08, 2025', size: '57.9 MB', minAndroid: '6.0+', changes: ['Security patches'] }
    ],
    tags: ['Messaging', 'Social', 'Video Call', 'Chat', 'Meta']
  },

  // 5. Nagad - Digital Banking BD
  {
    id: 'nagad-app',
    title: 'Nagad - Digital Financial Service',
    titleBn: 'নগদ - ডাক বিভাগের ডিজিটাল লেনদেন',
    packageName: 'com.konasl.nagad',
    developer: 'Nagad Limited (Bangladesh Post Office)',
    developerVerified: true,
    category: 'Finance',
    categoryBn: 'ফাইন্যান্স',
    icon: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?w=1200&auto=format&fit=crop&q=80',
    rating: 4.7,
    ratingCount: 890000,
    downloads: '30M+',
    downloadCountNum: 30000000,
    size: '34.2 MB',
    version: '4.2.1',
    updatedDate: 'May 10, 2025',
    minAndroid: 'Android 6.0+',
    architecture: 'Universal',
    sha256: '38a19bc892019384756291029384756201928374650192837465910293847561',
    featured: false,
    editorsChoice: true,
    trendingRank: 5,
    badge: 'Bangla Special',
    shortDescription: 'Lowest cash-out charge mobile wallet in Bangladesh with quick bill pay, recharge, and Islamic account options.',
    shortDescriptionBn: 'সবচেয়ে কম ক্যাশআউট চার্জে লেনদেন, রিচার্জ ও ইসলামিক অ্যাকাউন্ট সুবিধা।',
    fullDescription: 'Nagad is Bangladesh Post Office’s revolutionary digital financial service. Enjoy the lowest cash out charge in the country, free send money to any number, and dedicated Islamic banking wallet.',
    fullDescriptionBn: 'নগদ হলো বাংলাদেশ ডাক বিভাগের নির্ভরযোগ্য ডিজিটাল ফিন্যান্সিয়াল সার্ভিস। সবচেয়ে কম ক্যাশ-আউট চার্জে লেনদেন এবং ফ্রি সেন্ড মানি করুন মুহূর্তেই।',
    whatsNew: [
      'Nagad Islamic lifestyle section added',
      'Faster QR scan recognition',
      'Enhanced transaction receipt download as PDF'
    ],
    whatsNewBn: [
      'নগদ ইসলামিক লাইফস্টাইল ফিচার যুক্ত',
      'দ্রুততর কিউআর কোড স্ক্যানার',
      'ট্রানজাকশন রিসিট সহজে পিডিএফ ডাউনলোড করার সুবিধা'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67e5572293?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.READ_CONTACTS',
      'android.permission.CAMERA'
    ],
    reviews: [
      {
        id: 'r6',
        userName: 'Kazi Moin',
        userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '5 days ago',
        comment: 'Cash out rate is the cheapest in BD. Very happy with this update.',
        helpfulCount: 41,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '4.2.1', releaseDate: 'May 10, 2025', size: '34.2 MB', minAndroid: '6.0+', changes: ['Performance tuneup'] }
    ],
    tags: ['Nagad', 'Fintech', 'Bangladesh', 'Mobile Wallet']
  },

  // 6. Spotify Music & Podcasts
  {
    id: 'spotify-music',
    title: 'Spotify: Music and Podcasts',
    titleBn: 'স্পটিফাই: গান ও পডকাস্ট',
    packageName: 'com.spotify.music',
    developer: 'Spotify AB',
    developerVerified: true,
    category: 'Video',
    categoryBn: 'ভিডিও ও মিউজিক',
    icon: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    rating: 4.8,
    ratingCount: 32000000,
    downloads: '1B+',
    downloadCountNum: 1000000000,
    size: '39.6 MB',
    version: '8.9.34.590',
    updatedDate: 'May 19, 2025',
    minAndroid: 'Android 7.0+',
    architecture: 'Universal',
    sha256: '9283746192837465819203948571029384756102938475619283746501928374',
    featured: true,
    editorsChoice: true,
    trendingRank: 6,
    badge: 'Editor Choice',
    shortDescription: 'Stream millions of Bangla, English, and Hindi songs, audiobooks, personalized Daily Mixes, and top podcasts.',
    shortDescriptionBn: 'কোটি কোটি গান, অ্যালবাম ও পডকাস্ট শুনুন হাই-কোয়ালিটি অডিওতে।',
    fullDescription: 'With Spotify, you have access to a world of free music, curated playlists, artists, and podcasts you love. Discover new music, top charts, personalized DJ recommendations, and offline high-bitrate streaming.',
    fullDescriptionBn: 'স্পটিফাই বিশ্ববিখ্যাত মিউজিক স্ট্রিমিং অ্যাপ। পছন্দের সব বাংলা ও আন্তর্জাতিক গান শুনুন ক্রিস্টাল ক্লিয়ার সাউন্ড কোয়ালিটিতে।',
    whatsNew: [
      'New AI DJ with voice commentary in multiple languages',
      'Lossless HiFi streaming beta preview',
      'Smoother lyrics sync'
    ],
    whatsNewBn: [
      'নতুন এআই ডিজে ফিচার',
      'উন্নত লিরিক্স সিঙ্ক ও সাউন্ড কোয়ালিটি',
      'অফলাইন প্লেলিস্ট ডাউনলোড স্পিড বৃদ্ধি'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.BLUETOOTH',
      'android.permission.WAKE_LOCK'
    ],
    reviews: [
      {
        id: 'r7',
        userName: 'Zubair Al Mamun',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 days ago',
        comment: 'Audio clarity is top notch. APK installed in seconds.',
        helpfulCount: 63,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '8.9.34.590', releaseDate: 'May 19, 2025', size: '39.6 MB', minAndroid: '7.0+', changes: ['AI DJ Enhancements'] }
    ],
    tags: ['Music', 'Streaming', 'Podcast', 'Audio', 'Songs']
  },

  // 7. Ridmik Keyboard - Top Bangla Keyboard
  {
    id: 'ridmik-keyboard',
    title: 'Ridmik Keyboard - Bangla Typing',
    titleBn: 'রিদ্মিক কীবোর্ড - বাংলা টাইপিং',
    packageName: 'net.ridmik.keyboard',
    developer: 'Ridmik Labs',
    developerVerified: true,
    category: 'Tools',
    categoryBn: 'টুলস',
    icon: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
    rating: 4.9,
    ratingCount: 1200000,
    downloads: '50M+',
    downloadCountNum: 50000000,
    size: '14.5 MB',
    version: '6.4.1',
    updatedDate: 'May 04, 2025',
    minAndroid: 'Android 5.0+',
    architecture: 'Universal',
    sha256: '1827364910293847562019283746501928374659102938475610293847561928',
    featured: false,
    editorsChoice: true,
    trendingRank: 7,
    badge: 'Bangla Special',
    shortDescription: 'The definitive Bangla keyboard with Avro phonetic, Probhat, National layout, and AI voice typing.',
    shortDescriptionBn: 'ফোনে দ্রুত ও নির্ভুল বাংলা লেখার সেরা কীবোর্ড। অভ্র ফোনেটিক ও জাতীয় লেআউট সাপোর্ট।',
    fullDescription: 'Ridmik Keyboard is the most popular Bengali keyboard for Android. It supports Avro phonetic layout (type "ami" to get "আমি"), traditional Probhat & National keyboard layouts, custom themes, Bangla voice typing, and smart emoji suggestions.',
    fullDescriptionBn: 'রিদ্মিক কীবোর্ড দিয়ে খুব সহজে বাংলা লিখুন। এতে রয়েছে অভ্র ফোনেটিক, প্রভাত ও জাতীয় লেআউট, আকর্ষণীয় থিম ও বাংলা ভয়েস টাইপিং সুবিধা।',
    whatsNew: [
      'New AI Bangla grammar correction engine',
      'Dynamic themes with Material You accent support',
      'Ultra fast clipboard manager with pin feature'
    ],
    whatsNewBn: [
      'নতুন বাংলা বানান শুদ্ধিকরণ সুবিধা',
      'ডায়নামিক কালারফুল কীবোর্ড থিমস',
      'ক্লিপবোর্ড পিন ও ব্যাকআপ সিস্টেম'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.VIBRATE',
      'android.permission.RECORD_AUDIO'
    ],
    reviews: [
      {
        id: 'r8',
        userName: 'Tamanna Begum',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '6 days ago',
        comment: 'বাংলা লেখার জন্য রিদ্মিক ছাড়া কোনো বিকল্প নাই। ৫/৫ স্টার!',
        helpfulCount: 88,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '6.4.1', releaseDate: 'May 04, 2025', size: '14.5 MB', minAndroid: '5.0+', changes: ['Bug fixes'] }
    ],
    tags: ['Bangla Keyboard', 'Avro', 'Typing', 'Tools', 'Bangladesh']
  },

  // 8. ChatGPT - OpenAI
  {
    id: 'chatgpt-ai',
    title: 'ChatGPT - AI Assistant',
    titleBn: 'চ্যাটজিপিটি - এআই অ্যাসিস্ট্যান্ট',
    packageName: 'com.openai.chatgpt',
    developer: 'OpenAI',
    developerVerified: true,
    category: 'Productivity',
    categoryBn: 'প্রোডাক্টিভিটি',
    icon: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    rating: 4.8,
    ratingCount: 6500000,
    downloads: '100M+',
    downloadCountNum: 100000000,
    size: '32.1 MB',
    version: '1.2025.132',
    updatedDate: 'May 22, 2025',
    minAndroid: 'Android 8.0+',
    architecture: 'arm64-v8a',
    sha256: 'abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
    featured: true,
    editorsChoice: true,
    trendingRank: 8,
    badge: 'Editor Choice',
    shortDescription: 'Get instant answers, creative inspiration, coding help, and realistic voice conversations with OpenAI’s latest models.',
    shortDescriptionBn: 'যেকোনো প্রশ্নের তাৎক্ষণিক উত্তর, কোডিং হেল্প ও এআই ভয়েস চ্যাটিং এর জন্য অফিশিয়াল অ্যাপ।',
    fullDescription: 'This official app is free, syncs your history across devices, and brings you the newest model improvements from OpenAI. Experience Advanced Voice Mode, image understanding, and document analysis on the go.',
    fullDescriptionBn: 'ওপেনএআই-এর অফিশিয়াল চ্যাটজিপিটি অ্যাপ দিয়ে খুব সহজেই পড়ালেখা, কোডিং, ট্রান্সলেশন এবং ভয়েস মোডে কথোপকথন করুন।',
    whatsNew: [
      'Advanced Voice Mode with real-time inflection and accent selection',
      'Faster image uploading and vision responses',
      'Memory controls and personalized custom instructions'
    ],
    whatsNewBn: [
      'উন্নত রিয়েল-টাইম এআই ভয়েস মোড',
      'ছবি ও ডকুমেন্ট দ্রুত অ্যানালাইসিস',
      'কাস্টম ইন্সট্রাকশন ও মেমোরি সেটিংস'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.RECORD_AUDIO',
      'android.permission.CAMERA'
    ],
    reviews: [
      {
        id: 'r9',
        userName: 'Farhan Kabir',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: 'Yesterday',
        comment: 'Advanced voice mode works seamlessly. Must have app on Android.',
        helpfulCount: 71,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '1.2025.132', releaseDate: 'May 22, 2025', size: '32.1 MB', minAndroid: '8.0+', changes: ['Latest model enhancements'] }
    ],
    tags: ['AI', 'ChatGPT', 'OpenAI', 'Productivity', 'Assistant']
  },

  // 9. Subway Surfers - Game
  {
    id: 'subway-surfers',
    title: 'Subway Surfers World Tour',
    titleBn: 'সাবওয়ে সার্ফার্স ওয়ার্ল্ড ট্যুর',
    packageName: 'com.kiloo.subwaysurf',
    developer: 'SYBO Games',
    developerVerified: true,
    category: 'Games',
    categoryBn: 'গেমস',
    icon: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    rating: 4.6,
    ratingCount: 41000000,
    downloads: '1B+',
    downloadCountNum: 1000000000,
    size: '148.0 MB',
    version: '3.29.0',
    updatedDate: 'May 15, 2025',
    minAndroid: 'Android 6.0+',
    architecture: 'Universal',
    sha256: '4729103847561928374650192837465910293847561029384756192837465019',
    featured: false,
    editorsChoice: false,
    trendingRank: 9,
    badge: 'Hot',
    shortDescription: 'Dash as fast as you can, dodge oncoming trains, and escape the grumpy Inspector with Jake, Tricky & Fresh.',
    shortDescriptionBn: 'বিশ্ববিখ্যাত অন্তহীন দৌড় ও ট্রেন ডজিং গেম। কয়েন সংগ্রহ করুন ও নতুন সার্ফার আনলক করুন।',
    fullDescription: 'DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog. Grind trains with your cool crew and fly with hoverboards and paint-powered jetpacks!',
    fullDescriptionBn: 'সাবওয়ে সার্ফার্স হলো অ্যান্ড্রয়েডের অন্যতম সেরা আর্কেড রানার গেম। বিভিন্ন শহরের ওয়ার্ল্ড ট্যুরে অংশ নিন ও বন্ধুদের সাথে হাই-স্কোর প্রতিযোগিতা করুন।',
    whatsNew: [
      'Subway Surfers World Tour visits Tokyo!',
      'New unlockable neon hoverboard: CyberGlider',
      'Season Hunt rewards and exclusive runner outfits'
    ],
    whatsNewBn: [
      'ওয়ার্ল্ড ট্যুর টোকিও সিজন চালু',
      'নতুন নিয়ন হোভারবোর্ড ও স্পেশাল কস্টিউম',
      'বাগ ফিক্স ও স্মুথ ১২০ হার্জ রিফ্রেশ রেট সাপোর্ট'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.ACCESS_NETWORK_STATE'
    ],
    reviews: [
      {
        id: 'r10',
        userName: 'Nafis Iqbal',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        comment: 'Classic timeless game. Runs at 120 FPS smoothly!',
        helpfulCount: 39,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '3.29.0', releaseDate: 'May 15, 2025', size: '148.0 MB', minAndroid: '6.0+', changes: ['Tokyo Tour release'] }
    ],
    tags: ['Runner', 'Arcade', 'Casual', 'Endless Runner', 'Subway Surfers']
  },

  // 10. Toffee - Watch Football & Live TV BD
  {
    id: 'toffee-live-tv',
    title: 'Toffee - Live Sports, Cricket & TV',
    titleBn: 'টফি - লাইভ খেলা, ক্রিকেট ও টিভি',
    packageName: 'com.bongobd.toffee',
    developer: 'Banglalink Digital',
    developerVerified: true,
    category: 'Video',
    categoryBn: 'ভিডিও',
    icon: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80',
    rating: 4.5,
    ratingCount: 520000,
    downloads: '20M+',
    downloadCountNum: 20000000,
    size: '28.9 MB',
    version: '4.8.2',
    updatedDate: 'May 08, 2025',
    minAndroid: 'Android 6.0+',
    architecture: 'Universal',
    sha256: '9182736450192837465019283746591029384756102938475619283746501928',
    featured: false,
    editorsChoice: false,
    trendingRank: 10,
    badge: 'Bangla Special',
    shortDescription: 'Watch ICC Cricket matches, Football leagues, live TV channels, and Bengali web series with bufferless streaming.',
    shortDescriptionBn: 'লাইভ ক্রিকেট, ফুটবল ও ১০০টির বেশি টিভি চ্যানেল দেখুন একদম বিনামূল্যে।',
    fullDescription: 'Toffee is Bangladesh’s largest live streaming and entertainment network. Enjoy live cricket series, Premier League matches, local TV drama, movies, and user-generated creator channels from any network.',
    fullDescriptionBn: 'টফি অ্যাপে যে কোনো ইন্টারনেট সংযোগ দিয়ে উপভোগ করুন লাইভ খেলাধুলা, ড্রামা ও বিনোদনমূলক কন্টেন্ট।',
    whatsNew: [
      'Cricket World Cup live low-latency stream engine',
      'Picture-in-picture mode performance fixes',
      'Chromecast / Smart TV screen casting support'
    ],
    whatsNewBn: [
      'লাইভ ক্রিকেটে দ্রুত স্ট্রিমিং ও লো-ল্যাটেন্সি মোড',
      'পিকচার-ইন-পিকচার (PIP) সাপোর্ট',
      'টিভি কাস্টিং সুবিধা'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.ACCESS_NETWORK_STATE'
    ],
    reviews: [
      {
        id: 'r11',
        userName: 'Shahriar Khan',
        userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '4 days ago',
        comment: 'ক্রিকেট খেলা লাইভ দেখার জন্য সেরা অ্যাপ।',
        helpfulCount: 52,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '4.8.2', releaseDate: 'May 08, 2025', size: '28.9 MB', minAndroid: '6.0+', changes: ['Live sports player upgrade'] }
    ],
    tags: ['Live TV', 'Cricket', 'Bangladesh', 'Toffee', 'Entertainment']
  },

  // 11. Canva: Graphic Design & Video
  {
    id: 'canva-design',
    title: 'Canva: Design, Photo & Video',
    titleBn: 'ক্যানভা: ডিজাইন ও ফটো এডিটর',
    packageName: 'com.canva.editor',
    developer: 'Canva',
    developerVerified: true,
    category: 'Photography',
    categoryBn: 'ছবি ও ভিডিও এডিটিং',
    icon: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=80',
    rating: 4.8,
    ratingCount: 14500000,
    downloads: '100M+',
    downloadCountNum: 100000000,
    size: '48.2 MB',
    version: '2.280.0',
    updatedDate: 'May 16, 2025',
    minAndroid: 'Android 7.0+',
    architecture: 'Universal',
    sha256: 'abcdef88990011223344556677889900aabbccddeeff11223344556677889900',
    featured: false,
    editorsChoice: true,
    trendingRank: 11,
    badge: 'Editor Choice',
    shortDescription: 'Create stunning logos, social media posters, presentations, thumbnails, and AI artwork in seconds.',
    shortDescriptionBn: 'সহজেই তৈরি করুন লোগো, পোস্টার, ব্যানার, থাম্বনেইল ও প্রেজেন্টেশন।',
    fullDescription: 'Canva makes graphic design amazingly simple for everyone. Craft Instagram stories, YouTube thumbnails, resumes, flyers, and video animations with thousands of customizable templates and AI Magic Studio.',
    fullDescriptionBn: 'ক্যানভা ডিজাইনিং করার অন্যতম সহজ ও সেরা প্ল্যাটফর্ম। সোশ্যাল মিডিয়া পোস্ট, ব্যানার ও গ্রাফিক্স ডিজাইন করুন কোনো অভিজ্ঞতা ছাড়াই।',
    whatsNew: [
      'Magic Studio AI photo expand and magic grab tools',
      'Export in transparent vector SVG format',
      'Team collaboration live cursor previews'
    ],
    whatsNewBn: [
      'নতুন ম্যাজিক স্টুডিও এআই ফটো টুলস',
      'সহজে এসভিজি ও পিএনজি এক্সপোর্ট',
      'টিম কোলাবোরেশন সুবিধা'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.INTERNET',
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.CAMERA'
    ],
    reviews: [
      {
        id: 'r12',
        userName: 'Mehedi Hasan',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '5 days ago',
        comment: 'Thumbnail design on mobile is so easy now.',
        helpfulCount: 46,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '2.280.0', releaseDate: 'May 16, 2025', size: '48.2 MB', minAndroid: '7.0+', changes: ['Magic Studio updates'] }
    ],
    tags: ['Design', 'Graphic', 'Thumbnail', 'Canva', 'Editor']
  },

  // 12. VLC for Android
  {
    id: 'vlc-player',
    title: 'VLC for Android',
    titleBn: 'ভিএলসি মিডিয়া প্লেয়ার',
    packageName: 'org.videolan.vlc',
    developer: 'Videolabs',
    developerVerified: true,
    category: 'Tools',
    categoryBn: 'টুলস',
    icon: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&auto=format&fit=crop&q=80',
    rating: 4.6,
    ratingCount: 2100000,
    downloads: '100M+',
    downloadCountNum: 100000000,
    size: '35.4 MB',
    version: '3.5.4',
    updatedDate: 'April 28, 2025',
    minAndroid: 'Android 5.0+',
    architecture: 'Universal (Open Source)',
    sha256: '99887766554433221100aabbccddeeff99887766554433221100aabbccddeeff',
    featured: false,
    editorsChoice: true,
    trendingRank: 12,
    badge: 'Updated',
    shortDescription: '100% Free, open source and ad-free media player that plays any video and audio format, subtitles, and network streams.',
    shortDescriptionBn: 'সম্পূর্ণ ফ্রি ও বিজ্ঞাপনহীন ওপেন সোর্স ভিডিও ও অডিও প্লেয়ার। যেকোনো ফরম্যাট প্লে করে।',
    fullDescription: 'VLC for Android is the best open source video and music player, fast and easy! It plays most local video and audio files, network streams, DVD ISOs, with complete support for MKV, MP4, AVI, MOV, Ogg, FLAC, TS, M2TS, Wv and AAC.',
    fullDescriptionBn: 'ভিএলসি হলো বিশ্বসেরা ওপেন সোর্স মিডিয়া প্লেয়ার। সব ধরনের ভিডিও ও সাবটাইটেল সাপোর্ট করে কোনো অ্যাড ছাড়াই।',
    whatsNew: [
      'Hardware acceleration for AV1 and HEVC 10-bit playback',
      'Automatic online subtitle downloader fixes',
      'Smoother gestures for brightness and volume'
    ],
    whatsNewBn: [
      'হার্ডওয়্যার এক্সিলারেশন ও উন্নত এভি১ কোডেক সাপোর্ট',
      'অনলাইন সাবটাইটেল ডাউনলোডার উন্নত করা হয়েছে',
      'সহজ ভলিউম ও ব্রাইটনেস জেসচার'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80'
    ],
    permissions: [
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WAKE_LOCK',
      'android.permission.INTERNET'
    ],
    reviews: [
      {
        id: 'r13',
        userName: 'Shahed Zaman',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        comment: 'No ads, opens every MKV movie with Bangla subtitle. Perfect!',
        helpfulCount: 38,
        verifiedUser: true
      }
    ],
    versionHistory: [
      { version: '3.5.4', releaseDate: 'April 28, 2025', size: '35.4 MB', minAndroid: '5.0+', changes: ['Codec improvements'] }
    ],
    tags: ['Video Player', 'Media Player', 'Open Source', 'VLC', 'No Ads']
  }
];

export const mockCategories: { key: string; nameEn: string; nameBn: string; iconName: string; count: number }[] = [
  { key: 'All', nameEn: 'All Apps', nameBn: 'সকল অ্যাপস', iconName: 'LayoutGrid', count: 12 },
  { key: 'Games', nameEn: 'Games', nameBn: 'গেমস', iconName: 'Gamepad2', count: 2 },
  { key: 'Bangla', nameEn: 'Bangla Apps', nameBn: 'বাংলাদেশি অ্যাপস', iconName: 'Sparkles', count: 4 },
  { key: 'Finance', nameEn: 'Finance & Wallet', nameBn: 'ফাইন্যান্স ও ব্যাংকিং', iconName: 'CreditCard', count: 2 },
  { key: 'Social', nameEn: 'Social & Chat', nameBn: 'সোশ্যাল ও মেসেঞ্জার', iconName: 'MessageSquare', count: 1 },
  { key: 'Video', nameEn: 'Video & Media', nameBn: 'ভিডিও ও মিডিয়া', iconName: 'Video', count: 3 },
  { key: 'Tools', nameEn: 'Tools & Utilities', nameBn: 'টুলস ও ইউটিলিটি', iconName: 'Wrench', count: 2 },
  { key: 'Productivity', nameEn: 'AI & Productivity', nameBn: 'এআই ও প্রোডাক্টিভিটি', iconName: 'Bot', count: 1 },
  { key: 'Photography', nameEn: 'Photo Editing', nameBn: 'ছবি সম্পাদনা', iconName: 'Camera', count: 1 }
];
