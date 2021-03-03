import Footer from './base/Footer'
import Navbar from './base/Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Cormorant&display=swap" rel="stylesheet" />
        <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
