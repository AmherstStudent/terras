import React from 'react'
import styled from 'styled-components'
// TODO: Set styling for alignment, and dropCap

const BodyText = styled.p`
  font-family: var(--body-text);
  line-height: var(--line-height);
  font-size: var(--base-font-size);
  color: #373a3c;
`
interface ParagraphContent {
  content: String
  align?: String
  dropCap?: Boolean
  className?: String
}

const Paragraph = (attributes: ParagraphContent) => <BodyText>{attributes.content}</BodyText>

export default Paragraph
