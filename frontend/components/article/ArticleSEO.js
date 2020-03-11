import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const ArticleSEO = article => {
  // for loop authors to put it into []
  let images = []
  if (article.featuredImage) {
    images = [article.featuredImage.sourceUrl]
  }
  let authors = []
  for (let authori of article.coAuthors) {
    authors += authori.display_name
  }
  return (
    <>
      <ArticleJsonLd
        url={'amherststudent.com/article/' + article.slug}
        title={article.title}
        images={images}
        datePublished={article.date}
        // dateModified="2015-02-05T09:00:00+08:00"
        authorName={article.coAuthors[0].display_name}
        publisherName="The Amherst Student"
        publisherLogo="https://www.amherststudent.com//logo.svg"
        description={article.excerpt}
      />

      <NextSeo
        title={article.title}
        description={article.excerpt}
        site_name="The Amherst Student"
        openGraph={{
          title: article.title,
          description: article.excerpt,
          type: 'article',
          article: {
            publishedTime: article.date,
            section: article.section,
            authors: { authors },
          },
          images: images,
        }}
      />
    </>
  )
}
export { ArticleSEO }
// const ArticleSEO = (article) => {
//   return <NextSeo
//           title={article.title}
//           description={article.excerpt}
//           locale="en_US"
//           site_name="The Amherst Student"
//           openGraph={{
//             title: article.title,
//             description: article.excerpt,
//             type: 'article',
//             article: {
//               publishedTime: article.createdAt,
//               section: article.category
//             },
//             images: [{url: article.featuredImage ? article.featuredImage.url : '',}],
//           }}
//           twitter={{
//             site: '@amherststudent',
//             cardType: 'summary_large_image',
//           }} />
// }

// // // TODO: A yikes.
// // const ArticleSEO = ({ article }) => (
// //     <>
// //       <NextSeo
// //         title={article.title}
// //         description={article.excerpt}
// //         locale="en_US"
// //         site_name="The Amherst Student"
// //         openGraph={{
// //           title: article.title,
// //           description: article.excerpt,
// //           url: urlLink(article.slug),
// //           type: 'article',
// //           article: {
// //             publishedTime: article.createdAt,
// //             modifiedTime: article.updatedAt,
// //             section: article.category.name,
// //             authors: [article.author.username],
// //           },
// //           images: [
// //             {
// //               url: article.featuredImage ? article.featuredImage.url : '',
// //             },
// //           ],
// //         }}
//         // twitter={{
//         //   site: '@amherststudent',
//         //   cardType: 'summary_large_image',
//         // }}
// //       />

//       <ArticleJsonLd
//         url={`https://amherststudent.com/article/${article.slug}`}
//         title={article.title}
//         images={[
//           article.featuredImage
//             ? article.featuredImage.url
//             : 'https://amherststudent.com/static/logo.jpg',
//         ]}
//         datePublished={article.createdAt}
//         dateModified={article.updatedAt}
//         authorName={article.author.username}
//         publisherName="The Amherst Student"
//         publisherLogo="https://amherststudent.com/static/logo.jpg"
//         description={article.excerpt}
//       />
// //     </>
