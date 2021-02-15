import gql from 'graphql-tag'

export const basicPostQuery = gql`
  fragment example on Post {
    title
    id
    date
    slug
    content
    excerpt
  }
`
