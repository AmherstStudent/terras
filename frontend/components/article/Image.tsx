import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.figure`
  margin: 0 auto;
  margin-bottom: 20px;
`
const Picture = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
const Caption = styled.figcaption`
  font-family: var(--header-font);
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
`

// For this image wrapper, we might want to consider the full-screen vs. within col.
const Image = (attributes: ImageContent) => (
  //We'll begin to add later
  <ImageWrapper>
    <Picture src={attributes.url} alt={attributes.alt} />
    {attributes.caption ? <Caption>{attributes.caption}</Caption> : <Caption />}
  </ImageWrapper>
)
export interface ImageContent {
  className?: String
  url: string
  alt: string
  caption?: string
  align?: string
}
export default Image
