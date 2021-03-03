
import FeaturedImage from '../../components/article/FeaturedImage';
import ArticleHeader from '../../components/article/ArticleHeader'
import {NewBlock} from "../../components/article/RenderBlocks"
import AuthorBio from "../../components/article/AuthorBio"
import FeaturedArticles from "../../components/article/FeaturedArticles"
import styled from "styled-components"
import ArticleSEO from "../../components/article/ArticleSEO"


// TODO: We're going to have add multiple themes, will be a mini refactor.



const ArticleAside = styled.aside`
  grid-column: 6 / -1;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }
`


const ArticleWrapped = styled.main`
  margin-top: 15px;
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;

  /* Body Text */
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 1.30em;
  line-height: 1em;
 
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
const Article = ({post : article}) => {

  const elements = article.blocks.map(block => (
    <NewBlock key={article.__typename} {...block} />
  ))

  return (
    <>
    
   {(article.featuredImage) && (<FeaturedImage {...article.featuredImage} />)}
  
      {/* <ArticleSEO {...article} /> */}
    <ArticleWrapped itemscope itemtype="http://schema.org/Article">
    <ArticleHeader 
        title={article.title}
        description={article.excerpt.replace(/<[^>]*>?/gm, '')}
        coAuthors={article.coAuthors}
        date={article.date}
        section={article.categories.nodes[0]}
      />
      {elements}

      <AuthorBio authors={article.coAuthors}/>
  
    </ArticleWrapped>
</>
  )
}


export const GET_ALL_POSTS_WITH_SLUG = `
  {
    posts(first: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }`;

  const ArticleDoc = (slug) => {return `
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
`}

  const API_URL = 'https://admin.amherststudent.com/graphql';
  const fetchAPI = async (query,variables={}) => {
    const headers = new Headers();
  
    headers.append('Content-Type', 'application/json');
  
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);
    }
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();
    if (json.errors) {
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  }

export const getStaticPaths = async () => {
  const data = await fetchAPI(GET_ALL_POSTS_WITH_SLUG);
  const allPosts = data.posts;
  const paths = allPosts.edges.map(({node}) => `/article/${node.slug}`)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const doc = ArticleDoc(params.slug)
  const post = await fetchAPI(doc);
  return {props: {post: post.postBy}, revalidate: 1}
}



export default Article;
