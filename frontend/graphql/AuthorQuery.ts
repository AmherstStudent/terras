import { gql } from 'graphql-request'

const AuthorQuery = gql`
  query Author($cursor: String, $slug: String) {
    users(where: { nicename: $slug }) {
      nodes {
        id
        name
        description
        slug
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
  }
`

export default AuthorQuery
