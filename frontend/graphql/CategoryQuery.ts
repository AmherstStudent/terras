import { gql } from 'graphql-request'

const CategoryQuery = gql`
  query Category($cursor: String, $categoryID: ID!) {
    category(id: $categoryID) {
      name
      posts(first: 10, after: $cursor) {
        nodes {
          title
          excerpt(format: RENDERED)
          date
          slug
          featuredImage {
            sourceUrl
            altText
          }
          coAuthors {
            display_name
            avatar
            slug
            reporter_title
            id
          }
          issues {
            nodes {
              id
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

export default CategoryQuery