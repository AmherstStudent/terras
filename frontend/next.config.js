module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/google-news.xml',
        destination: '/api/googleNews',
      },
      {
        source: '/rss.xml',
        destination: '/api/rss',
      },
    ]
  },
}
