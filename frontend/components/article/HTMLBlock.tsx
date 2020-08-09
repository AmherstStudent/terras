import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface HTMLProps {
  html: string
}

const Wrapper = styled.div`
  width: 100%;
  max-height: 800px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: overlay;
`

const HTMLBlock: FunctionComponent<HTMLProps> = (attributes: HTMLProps) => {
  return <Wrapper dangerouslySetInnerHTML={{ __html: attributes.html }} />
}

export default HTMLBlock
