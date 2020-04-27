import gql from 'graphql-tag'

export const FRAGMENT_exampleObject = gql`
  fragment example on User {
    name
  }
`
