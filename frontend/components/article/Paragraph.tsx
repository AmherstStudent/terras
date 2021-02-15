import React from 'react'
import styled from 'styled-components'
// TODO: Set styling for alignment, and dropCap

const BodyText = styled.p`
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  line-height: 1.75em;
  margin: 0;
  margin-bottom: 1.2em;
`
interface ParagraphContent {
  content: String
  align?: String
  dropCap?: Boolean
  className?: String
}

const Paragraph = (attributes: ParagraphContent) => <BodyText dangerouslySetInnerHTML={{ __html: attributes.content }} />

export default Paragraph
