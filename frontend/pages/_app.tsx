import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApolloX'

interface ApolloProps {
  apollo: any
}

class MyApp extends App<ApolloProps> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
