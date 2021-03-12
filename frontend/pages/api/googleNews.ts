import { NextApiRequest, NextApiResponse } from 'next'
import { getRecentArticlesMeta } from '../../graphql'

const RSS = async (req: NextApiRequest, res: NextApiResponse) => {
  const articleMeta = await getRecentArticlesMeta()

  res.setHeader('Content-Type', 'text/xml')

  const articles = articleMeta
    .map(article => {
      return `
      <url>
   <loc>https://admin.amherststudent.com/article/${article.slug}</loc>
   <news:news>
   <news:publication>
     <news:name>The Amherst Student</news:name>
     <news:language>en</news:language>
   </news:publication>
   <news:publication_date>${article.updatedAt}</news:publication_date>
     <news:title>${article.title}</news:title>
    </news:news>
  </url>
      
      `
    })
    .join('')

  const baseFeed = `
     <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
        ${articles}

    </urlset>

    `
  res.write(baseFeed)
  res.end()
}

export default RSS
