import gql from 'graphql-tag'

export const HomeDocument = gql`
  query {
    pageBy(uri: "home") {
      blocks {
        name
        innerBlocks {
          name
          ... on CoreColumnBlock {
            attributes {
              ... on CoreColumnBlockAttributes {
                width
              }
            }
          }
          innerBlocks {
            __typename
            ... on HomeHeroImageBlock {
              attributes {
                ... on HomeHeroImageBlockAttributes {
                  title
                  authors
                  slug
                  issue
                  category
                  featuredImageAlt
                  featuredImageUrl
                  excerpt
                  date
                }
              }
            }
            ... on HomeSmallArticleBlock {
              attributes {
                ... on HomeSmallArticleBlockAttributes {
                  title
                  slug
                  issue
                  authors
                  category
                  featuredImageAlt
                  featuredImageUrl
                  excerpt
                  date
                }
              }
            }
            ... on HomeLargeArticleBlock {
              attributes {
                ... on HomeLargeArticleBlockAttributes {
                  title
                  slug
                  issue
                  authors
                  category
                  excerpt
                  date
                }
              }
            }
            ... on HomeHomepageQuoteBlock {
              attributes {
                ... on HomeHomepageQuoteBlockAttributes {
                  postID
                  postSlug
                  quote
                  source
                }
              }
            }
            ... on HomeFeaturedPostlistBlock {
              name
            }
          }
        }
      }
    }
  }
`
