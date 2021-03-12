import '../components/globals.css' // SPOILER OF STYLING 👉👈
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import * as gtag from '../lib/ga'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const client = new ApolloClient({
  uri: 'https://admin.amherststudent.com/graphql',
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
