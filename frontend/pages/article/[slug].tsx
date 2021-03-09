import FeaturedImage from '../../components/article/FeaturedImage'
import ArticleHeader from '../../components/article/ArticleHeader'
import { NewBlock } from '../../components/article/RenderBlocks'
import AuthorBio from '../../components/article/AuthorBio'
import { Category } from '../../components/styles'
import FeaturedArticles from '../../components/article/FeaturedArticles'
import styled from 'styled-components'
import ArticleSEO from '../../components/article/ArticleSEO'
import DisqusComments from '../../components/article/disqus-comments'

// TODO: We're going to have add multiple themes, will be a mini refactor.

const ArticleAside = styled.aside`
  grid-column: 6 / -1;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }
`

const ArticleWrapped = styled.main`
  margin: 0 auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr min(75ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;

  & blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  & > * {
    grid-column: 2;
  }
`
const Article = ({ post: article }) => {
  if (article == undefined) {
    return <> Can't find </>
  }
  const elements = article?.blocks?.map(block => <NewBlock key={article.__typename} {...block} />)
  let authors = article.coAuthors
  return (
    <>
      <ArticleSEO {...article} />
      <ArticleWrapped itemscope itemtype="http://schema.org/Article">
        {article.featuredImage && <FeaturedImage {...article.featuredImage} />}

        <ArticleHeader
          title={article.title}
          description={article.excerpt.replace(/<[^>]*>?/gm, '')}
          coAuthors={article.coAuthors}
          date={article.date}
          section={article.categories.nodes[0]}
        />
        {elements}

        <AuthorBio authors={article.coAuthors} />
        <DisqusComments post={article} />
      </ArticleWrapped>
    </>
  )
}

export const GET_ALL_POSTS_WITH_SLUG = `
  {
    posts(first: 1000) {
      edges {
        node {
          slug
        }
      }
    }
  }`

const ArticleDoc = slug => {
  return `
  query {
    postBy(slug: "${slug}") {
      __typename
      title
      id
      date
      slug
      content
      excerpt
      featuredImage {
        sourceUrl
        altText
        srcSet
        sizes
      }
      categories {
        nodes {
          name
          slug
        }
      }
      coAuthors {
        id
        display_name
        slug
        bio
        avatar
        reporter_title
      }
      blocks {
        __typename
        ... on CoreHeadingBlock {
          __typename
          attributes {
            __typename
            ... on CoreHeadingBlockAttributes {
              __typename
              content
              level
            }
          }
        }
        ... on CoreImageBlock {
          attributes {
            __typename
            ... on CoreImageBlockAttributes {
              __typename
              url
              caption
            }
          }
        }
        ... on CoreMediaTextBlock {
          originalContent
          innerBlocks {
            __typename
            ... on CoreQuoteBlock {
              attributes {
                citation
                value
              }
            }
            ... on CoreParagraphBlock {
              attributes {
                ... on CoreParagraphBlockAttributesV3 {
                  __typename
                  content
                  dropCap
                  align
                }
              }
            }
          }
          attributes {
            ... on CoreMediaTextBlockAttributes {
              mediaUrl
            }
          }
        }
        ... on CoreQuoteBlock {
          __typename
          attributes {
            ... on CoreQuoteBlockAttributes {
              __typename
              quote: value
              source: citation
            }
          }
        }
        ... on CorePullquoteBlock {
          __typename

          attributes {
            ... on CorePullquoteBlockAttributesV2 {
              __typename
              value
              citation
            }
          }
        }
        ... on CoreListBlock {
          __typename
          attributes {
            values
          }
        }
        ... on CoreParagraphBlock {
          __typename
          name
          attributes {
            ... on CoreParagraphBlockAttributesV3 {
              __typename
              content
              dropCap
              align
            }
          }
        }
        ... on CoreGalleryBlock {
          __typename
          attributes {
            ... on CoreGalleryBlockAttributes {
              __typename
              ids
              images
              linkTo
            }
          }
        }
        ... on CoreHtmlBlock {
          __typename
          attributes {
            ... on CoreHtmlBlockAttributes {
              __typename
              html: content
            }
          }
        }
      }
    }
  }
`
}

const API_URL = 'https://admin.amherststudent.com/graphql'
const fetchAPI = async (query, variables = {}) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`)
  }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export const getStaticPaths = async () => {
  const data = await fetchAPI(GET_ALL_POSTS_WITH_SLUG)
  const allPosts = data.posts
  const paths = allPosts.edges.map(({ node }) => `/article/${node.slug}`)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const doc = ArticleDoc(params.slug)
  const post = await fetchAPI(doc)
  return { props: { post: post.postBy }, revalidate: 1 }
}

export default Article
