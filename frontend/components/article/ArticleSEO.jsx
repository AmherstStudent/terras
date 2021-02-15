import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Head from 'next/head'

{
  /* <meta property="og:title" content="<?php the_title(); ?>" />
<meta property="og:type" content="article" />
<meta property="og:url" content="<?php the_permalink(); ?>"/>
<meta property="og:description" content="<?php echo esc_attr( wp_strip_all_tags( esc_html( get_the_excerpt() ) ) ); ?>" />
<meta name="description" content="<?php echo esc_attr( wp_strip_all_tags( esc_html( get_the_excerpt() ) ) ); ?>" /> */
}

export default article => {
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
  article.coAuthors.forEach(function(coAuthor) {
    let author = {
      '@type': 'Person',
      '@context': 'http://schema.org',
      name: `${coAuthor.display_name}`,
      url: `amherststudent.com/author/${coAuthor.slug}`,
    }
    authors.push(author)
  })

  data['author'] = authors
  return (
    <Head>
      <title dangerouslySetInnerHTML={{ __html: article.title + '| Amherst Student' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ data }) }}></script>
    </Head>
  )
}
