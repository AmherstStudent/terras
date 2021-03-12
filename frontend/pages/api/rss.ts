// give most recent 20
import { NextApiRequest, NextApiResponse } from 'next'
import { getRecentArticlesMeta } from '../../graphql'

const RSS = async (req: NextApiRequest, res: NextApiResponse) => {
  const articleMeta = await getRecentArticlesMeta()

  res.setHeader('Content-Type', 'text/xml')

  const articles = articleMeta
    .map(article => {
      return `
      <item>
       <title>${article.title}</title>
       <link>https://admin.amherststudent.com/article/${article.slug}</link>
       <description>{article.excerpt}</description>
      </item>
      
      `
    })
    .join('')

  const baseFeed = `
        <?xml version="1.0"?>
        <rss version="2.0">
        <channel>
            <title>Amherst Student</title>
            <link>http://amherststudent.com/</link>
            <description>Amherst College's student newspaper</description>
            ${articles}

        </channel>
        </rss>
    `
  res.write(baseFeed)
  res.end()
}

export default RSS
