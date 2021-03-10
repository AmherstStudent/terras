import React from 'react'
import styled from 'styled-components'
// TODO: Set styling for alignment, and dropCap

const BodyText = styled.p`
  font-family: 'Baskerville';
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.8em;
  margin: 0;
  margin-bottom: 1.2em;
`
interface ParagraphContent {
  content: string
  align?: string
  dropCap?: boolean
  className?: string
}

const Paragraph = (attributes: ParagraphContent) => <BodyText dangerouslySetInnerHTML={{ __html: attributes.content }} />

export default Paragraph
