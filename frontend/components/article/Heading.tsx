// CoreHEADINGBLCOKS
import React, { ReactNode } from 'react'
import styled from 'styled-components'

// align, anchor, content, level (h2, 3, etc.),

interface HeadingContent {
  className?: String
  anchor?: string
  align?: string
  textcolor?: String
  content: String
  level: Number
}

const HeadingLevel1 = styled.h1`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 40px;
`

const H2 = styled.h2`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`

const H3 = styled.h3`
  font-family: Halyard Text;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`

const Heading = (attributes: HeadingContent) => {
  switch (attributes.level) {
    case 1:
      return <HeadingLevel1>{attributes.content}</HeadingLevel1>
    case 2:
      return <H2>{attributes.content}</H2>
    case 3:
      return <H3>{attributes.content}</H3>
  }
}
export default Heading
