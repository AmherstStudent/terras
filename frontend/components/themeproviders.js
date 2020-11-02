import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    darkPurple: '#FFFDF9',
    amherstPurple: '#FFFDF9',
    paragraphColor: '#06B49A',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
