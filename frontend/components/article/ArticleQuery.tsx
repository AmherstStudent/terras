import gql from 'graphql-tag'

export const ArticleDocument = gql`
  query Article($slug: String) {
    postBy(slug: $slug) {
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
