import { NextPage } from 'next';
import Layout from "../../components/layout"
import {useQuery} from "@apollo/react-hooks"
import gql from 'graphql-tag';
import FeaturedImage from '../../components/article/FeaturedImage';
import ArticleHeader from '../../components/article/ArticleHeader'
import Navbar from '../../components/base/Navbar'
import {NewBlock} from "../../components/article/RenderBlocks"
import AuthorBio from "../../components/article/AuthorBio"
import FeaturedArticles from "../../components/article/FeaturedArticles"
import styled from "styled-components"
import ArticleSEO from "../../components/article/ArticleSEO"
import { dedentBlockStringValue } from 'graphql/language/blockString';

// TODO: We're going to have add multiple themes, will be a mini refactor.
const ArticleDocument = gql`
query Article($slug: String) {
  postBy(slug: $slug) {
    __typename
    title
    id
    date
    desiredSlug
    excerpt
    featuredImage {
      sourceUrl
      altText
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
      job_title
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
    }
  }
}`; 

const ArticleWrapper = styled.article`
  display: grid; 
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
`

const ArticleContent = styled.section`
  grid-column: 1 / 6;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }

`
const ArticleAside = styled.aside`
  grid-column: 6 / -1;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }
`
const Article = ({slug}) => {
  const { loading, error, data } = useQuery(ArticleDocument, {
    variables: {slug: slug}
  })
  if (loading) return <p>Loading Post...</p>;
  if (error) return <p>Something wrong happened!</p>;
  let article = data.postBy
  
  const elements = article.blocks.map(block => (
    <NewBlock key={article.__typename} {...block} />
  ))

  return (
    <>
    <Navbar />
    {article.featuredImage ? <FeaturedImage src={article.featuredImage.sourceUrl} alt={article.featuredImage.altText}/> : ""}
    <Layout>
    <ArticleWrapper>
      <ArticleSEO {...article} />
      <ArticleHeader 
        title={article.title}
        description={article.excerpt.replace(/<[^>]*>?/gm, '')}
        coAuthors={article.coAuthors}
        date={article.date}
        section={article.categories.nodes[0]}
      />
        <ArticleContent>
          {elements}
          <AuthorBio authors={article.coAuthors}/>
        </ArticleContent>
        <ArticleAside>
          <FeaturedArticles />
        </ArticleAside>
        
      </ArticleWrapper>
      
    </Layout>
    </>
    
  )
}

Article.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}


export default Article;
