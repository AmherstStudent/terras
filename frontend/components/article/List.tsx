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
    font-family: var(--body-text);
    line-height: var(--line-height);
    font-size: var(--base-font-size);
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
