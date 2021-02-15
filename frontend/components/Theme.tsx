import React from 'react'
import Navbar from './base/Navbar'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Footer from './base/Footer'
import ga from '../lib/ga'

export const GlobalFonts = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
@font-face {
    font-family: 'Halyard-Text';
    src: url('fonts/HalyardTextLt.otf');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Halyard-Text';
    src: url('fonts/HalyardTextLt-It.otf');
    font-style: italic;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Halyard-Text';
    src: url('fonts/HalyardText-Bd.otf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Halyard-Text';
    src: url('fonts/HalyardTextMedium.otf');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Halyard-Text';
    src: url('fonts/HalyardTextBd-It.otf');
    font-style: italic;
    font-weight: 700;
  }

  /* Micro */
  @font-face {
    font-family: 'Halyard-Micro';
    src: url('fonts/HalyardMic-Regular.otf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halyard-Micro';
    src: url('fonts/HalyardMic-It.otf');
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
    src: url('fonts/HalyardMicBd-It.otf');
    font-style: italic;
    font-weight: 700;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    max-width: 100vw;
    padding-top: 1.5em;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
`
export const OrganizationSEO = {
  '@context': 'http://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'The Amherst Student',
  logo: {
    '@context': 'http://schema.org',
    '@type': 'ImageObject',
    url: 'https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png',
    height: 40,
    width: 250,
  },
  url: 'https://www.amherststudent.com',
  '@id': 'https://www.amherststudent.com',
  foundingDate: '1862-09-18',
}

// Create a wikipedia
const Theme: React.FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet" />

    <GlobalFonts />
    <GlobalStyle />
    <body>{children}</body>
  </>
)

export default Theme
