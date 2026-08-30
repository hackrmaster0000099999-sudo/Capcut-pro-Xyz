export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://capcut-pro-apk.vercel.app/sitemap.xml',
  };
}
