import { FunctionComponent } from 'react'
import Head from 'next/head'
import Footer from './base/Footer'
import ga from '../lib/ga'

type LayoutProps = {
  title?: string
  width?: 'full' | 'regular'
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title = 'The Amherst Student' }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="The Amherst Student covers news, politics, culture, opinion, photos, and video for the Amherst community by Amherst College student journalists."
      />
      <meta property="og:type" content="website" />
      <link href="https://fonts.googleapis.com/css?family=Cormorant&display=swap" rel="stylesheet" />
      <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet" />
      <script dangerouslySetInnerHTML={{ __html: ga }} />
    </Head>
    <main>{children}</main>
    <Footer />
    <style jsx global>
      {`
        body {
          width: 100vw;
          margin-top: 6em;
        }
        * {
          box-sizing: border-box;
        }
        :root {
          --header-font: 'Cormorant';
          --body-text: 'URWBaskervilleW01-Regular';
          --span-font: 'Halyard-Text';
          --span-text2: 'Halyard-Micro';
          --base-font-size: 18px;
          --line-height: 172%;
        }

        main {
          max-width: 1180px;
          margin: 0 auto;
          padding-bottom: 40px;
        }

        @media screen and (max-width: 1200px) {
          main {
            margin: 0 5%;
          }
        }

        h1 {
          font-family: var(--header-font);
          font-weight: 600;
        }

        p {
          color: #373a3c;
        }
      `}
    </style>
  </>
)

export default Layout
