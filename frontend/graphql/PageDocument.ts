import { gql } from './request'

const PageDocument = gql`
  query Page($slug: String) {
    pageBy(uri: $slug) {
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
export default PageDocument
