import styled from 'styled-components'
import {Category} from "../styles/index"
import { formatDate } from '../util'
import { Authors } from '../Pagination'

const ArticleMeta = styled.header`
  margin-top: 24px;
  margin-bottom: 24px;
`

const ArticleTitle = styled.h1`
  font-family: 'Cormorant';
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 42px;
    line-height: 125%;
  }
`
const ArticleByline = styled.p`
  
  color: #595959;
`
const ArticleDescription = styled.h2`
  font-family: Halyard-Text;
  font-weight: 200;
  font-size: 1.2em;
  line-height: 1.7;
  color: #595959;
`

const ArticleHeader = attributes => {
  return (
    <ArticleMeta>
      <Category>{attributes.section.slug}</Category>
      <ArticleTitle itemprop="name" dangerouslySetInnerHTML={{ __html: attributes.title }} />
      <ArticleByline>
        by <Authors authors={attributes.coAuthors} /> | <time>{formatDate(attributes.date)}</time>
      </ArticleByline>
      <ArticleDescription dangerouslySetInnerHTML={{ __html: attributes.description }} />
    </ArticleMeta>
  )
}

export default ArticleHeader
