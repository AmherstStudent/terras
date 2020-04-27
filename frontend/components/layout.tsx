import { FunctionComponent } from 'react'
import * as React from 'react'
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
      <link href="https://fonts.googleapis.com/css?family=Cormorant&display=swap" rel="stylesheet" />
      <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet" />
      <script dangerouslySetInnerHTML={{ __html: ga }} />
    </Head>
    <main>{children}</main>
    <Footer />
    <style jsx global>
      {`
        /* Text */
        @font-face {
          font-family: 'Halyard-Text';
          src: url('../fonts/HalyardTextLt.otf');
          font-style: normal;
          font-weight: 300;
        }

        @font-face {
          font-family: 'Halyard-Text';
          src: url('../fonts/HalyardTextLt-It.otf');
          font-style: italic;
          font-weight: 300;
        }

        @font-face {
          font-family: 'Halyard-Text';
          src: url('../fonts/HalyardText-Bd.otf');
          font-style: normal;
          font-weight: 700;
        }

        @font-face {
          font-family: 'Halyard-Text';
          src: url('../fonts/HalyardTextMedium.otf');
          font-style: normal;
          font-weight: 500;
        }

        @font-face {
          font-family: 'Halyard-Text';
          src: url('../fonts/HalyardTextBd-It.otf');
          font-style: italic;
          font-weight: 700;
        }

        /* Micro */
        @font-face {
          font-family: 'Halyard-Micro';
          src: url('../fonts/HalyardMic-Regular.otf');
          font-style: normal;
          font-weight: 400;
        }

        @font-face {
          font-family: 'Halyard-Micro';
          src: url('../fonts/HalyardMic-It.otf');
          font-style: italic;
          font-weight: 400;
        }
        @font-face {
          font-family: 'Halyard-Micro';
          src: url('../fonts/HalyardMicBd.otf');
          font-style: normal;
          font-weight: 700;
        }

        @font-face {
          font-family: 'Halyard-Micro';
          src: url('../fonts/HalyardMicBd-It.otf');
          font-style: italic;
          font-weight: 700;
        }

        :root {
          --header-font: 'Cormorant';
          --body-text: 'URWBaskervilleW01-Regular';
          --span-font: 'Halyard-Text';
          --base-font-size: 18px;
          --line-height: 172%;
        }
        html {
          background: #e5e5e5;
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
