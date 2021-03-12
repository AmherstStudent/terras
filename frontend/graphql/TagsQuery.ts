import { gql } from 'graphql-request'

const TagsQuery = gql`
  query Tags {
    tag(id: "cG9zdF90YWc6NQ==") {
      name
      posts(where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          categories {
            nodes {
              name
              slug
            }
          }
          coAuthors {
            display_name
            id
            reporter_title
          }
        }
      }
    }
  }
`
