// CoreListBlcok attributes
// CoreListBlock - ordered, reveresed, start num, values

import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ListContent {
  values: string
  ordered?: Boolean
  className?: string
}

const UnorderedList = styled.ul`
  margin-top: 10px;
  margin-bottom: 15px;

  li {
    font-family: Baskerville;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.75em;
    margin: 0;
    margin-bottom: 1.2em;

    color: #373a3c;
  }
`

const List: FunctionComponent<ListContent> = (attributes: ListContent) => {
  function createMarkup() {
    return { __html: attributes.values }
  }
  if ('ordered' in attributes) {
    return <ol className={attributes.className}>{attributes.values}</ol>
  } else {
    return <UnorderedList dangerouslySetInnerHTML={createMarkup()}></UnorderedList>
  }
}

export default List
