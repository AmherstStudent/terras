import withApollo from 'next-with-apollo'
import { InMemoryCache } from 'apollo-boost'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../fragmentTypes.json'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const link = new HttpLink({
  uri: 'https://admin.amherststudent.com/graphql',
  fetch,
})

export default withApollo(
  ({ initialState, ctx }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache({ fragmentMatcher }).restore(initialState),
      ssrMode: !process.browser,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-first',
        },
        query: {
          fetchPolicy: 'cache-first',
        },
      },
    }),
)
