export interface AppVersion {
  version: string;
  releaseDate: string;
  size: string;
  apkUrl?: string;
  minAndroid: string;
  changes: string[];
}

export interface AppReview {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  helpfulCount: number;
  verifiedUser?: boolean;
}

export interface AppItem {
  id: string;
  title: string;
  titleBn?: string;
  packageName: string;
  developer: string;
  developerVerified: boolean;
  category: AppCategory;
  categoryBn?: string;
  icon: string;
  bannerImage: string;
  rating: number;
  ratingCount: number;
  downloads: string;
  downloadCountNum: number;
  size: string;
  version: string;
  updatedDate: string;
  minAndroid: string;
  architecture: string;
  sha256: string;
  featured?: boolean;
  editorsChoice?: boolean;
  trendingRank?: number;
  badge?: 'Hot' | 'New' | 'Editor Choice' | 'Updated' | 'Bangla Special' | 'MOD/PRO';
  shortDescription: string;
  shortDescriptionBn?: string;
  fullDescription: string;
  fullDescriptionBn?: string;
  whatsNew: string[];
  whatsNewBn?: string[];
  screenshots: string[];
  permissions: string[];
  reviews: AppReview[];
  versionHistory: AppVersion[];
  tags: string[];
  isLocalSubmission?: boolean;
}

export type AppCategory = 
  | 'All'
  | 'Games'
  | 'Social'
  | 'Tools'
  | 'Video'
  | 'Photography'
  | 'Productivity'
  | 'Finance'
  | 'Bangla'
  | 'Education';

export interface FilterState {
  category: AppCategory;
  searchQuery: string;
  sortBy: 'popular' | 'rating' | 'newest' | 'size';
  onlyVerified: boolean;
  onlyBangla: boolean;
}

export interface DownloadHistoryItem {
  appId: string;
  title: string;
  icon: string;
  version: string;
  size: string;
  timestamp: number;
}
