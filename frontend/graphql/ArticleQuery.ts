import { gql } from 'graphql-request'

const ArticleQuery = gql`
  query Article($slug: String) {
    postBy(uri: $slug) {
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

export default ArticleQuery
