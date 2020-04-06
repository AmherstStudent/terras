import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';

interface ApolloProps {
  apolloClient: any;
}
class MyApp extends App<ApolloProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);