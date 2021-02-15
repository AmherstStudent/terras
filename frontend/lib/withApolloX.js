import { ApolloClient } from 'apollo-client'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../_generated_/fragmentTypes.json'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = 'https://admin.amherststudent.com/graphql'

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
})

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
      connectToDevTools: process.browser,
      ssrMode: typeof window === 'undefined',
    }),
)
