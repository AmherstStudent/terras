// import withApollo from 'next-with-apollo'

import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import { initApollo } from './toApollo'
// Polyfill fetch() on the server (used by apollo-client)

// let apolloClient = null

// export default withApollo(
//   ({ initialState, ctx }) =>
//     new ApolloClient({
//       link: link,
//       cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
//       ssrMode: !process.browser,
//       defaultOptions: {
//         watchQuery: {
//           fetchPolicy: 'cache-first',
//         },
//         query: {
//           fetchPolicy: 'cache-first',
//         },
//       },
//     }),
// )

export default App => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx) {
      const { Component, router } = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo()
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo} />)
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
