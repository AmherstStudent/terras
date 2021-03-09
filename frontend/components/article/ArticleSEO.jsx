import React from 'react'
import Head from 'next/head'

const ArticleSEO = article => {
  let articleUrl = `https://amherststudent.com/article/${article.slug}`
  let data = {
    '@context': 'http://schema.org/',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://amherststudent.com/article/${article.slug}`,
    },
    articleSection: `${article.categories.nodes[0].name}`,
    headline: `${article.title}`,
    datePublished: `${article.date}`,
    dateModified: `${article.date}`,
    description: `${article.excerpt.replace(/(<([^>]+)>)/gi, '').trim()}`,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'The Amherst Student',
      url: 'https://amherststudent.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://amherststudent.com/logo.jpg',
      },
    },
  }

  if (article.featuredImage) {
    data['image'] = {
      '@type': 'ImageObject',
      url: article.featuredImage.sourceUrl,
    }
  } else {
    data['image'] = {}
  }

  let authors = []
  article.coAuthors.forEach(function (coAuthor) {
    let author = {
      '@type': 'Person',
      name: `${coAuthor.display_name}`,
      url: `amherststudent.com/author/${coAuthor.slug}`,
    }
    authors.push(author)
  })

  data['author'] = authors
  return (
    <Head>
      <title>{article.title}</title>
      <meta name="description" content={article.excerpt} />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@amherststudent" key="twhandle" />

      <meta property="og:url" content={articleUrl} key="ogurl" />
      <meta property="og:image" content={article?.featuredImage?.sourceUrl} key="ogimage" />
      <meta property="og:site_name" content="amherststudent.com" key="ogsitename" />
      <meta property="og:title" content={article.title | 'The Amherst Student'} key="ogtitle" />
      <meta property="og:description" content={article.excerpt} key="ogdesc" />

      <title dangerouslySetInnerHTML={{ __html: article.title + '| Amherst Student' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ data }) }}></script>
    </Head>
  )
}

export default ArticleSEO
