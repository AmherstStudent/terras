import Layout from '../components/layout'
import Navbar from "../components/base/Navbar"
import { gql, useQuery } from "@apollo/client";
import {NewBlock} from "../components/article/RenderBlocks"
import styled from "styled-components"

const HeaderText = styled.h2`
font-family: Cormorant;
font-style: normal;
font-weight: bold;
font-size: 2em;
color: #000000;
margin-top: .5em;
margin-bottom: .5em;
& > a {
  text-decoration: none;
  color: #000000;
}`


const Wrapper = styled.div`
display: grid;
grid-template-columns:
  1fr
  min(85ch, 100%)
  1fr;
& > * {
  grid-column: 2;
}
`

const Page = ({slug}) => {
  const { loading, error, data } = useQuery(PageDocument, {
    variables: {slug}
  })
  if (loading) return <p>Loading Post...</p>;
  if (error) return <p>Something wrong happened!</p>;
  // TODO: Add a 404 page
  const elements = data.pageBy.blocks.map(block => (
    <NewBlock {...block} />
  ))
  return (<>
    <Navbar /> 
    <Layout>
      <Wrapper>
      <HeaderText>{data.pageBy.title}</HeaderText>
      {elements}
      </Wrapper>
      
    </Layout>
    </>)
}

Page.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}

const PageDocument = gql`
query Page($slug: String) {
  pageBy(uri: $slug){
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
}


`

export default Page