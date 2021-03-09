import styled from 'styled-components'
import { formatDate } from '../util'
import { Authors } from '../Pagination'

const ArticleMeta = styled.header`
  margin-top: 24px;
  margin-bottom: 24px;
`
const Section = styled.span`
  font-family: var(--span-font);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #3f1f69;
  text-transform: uppercase;
  text-decoration: none;
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
  font-family: Halyard Micro;
  font-size: 0.85em;
  line-height: 150%;
  font-style: normal;
  font-weight: 300;
  color: #595959;
`
const ArticleDescription = styled.h2`
  font-family: Halyard Micro;
  font-weight: 300;
  font-size: 18px;
  line-height: 172.1%;
  color: #595959;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 15px;
  width: 95%;
`

const ArticleHeader = attributes => {
  return (
    <ArticleMeta>
      <Section>{attributes.section.slug}</Section>
      <ArticleTitle itemprop="name" dangerouslySetInnerHTML={{ __html: attributes.title }} />
      <ArticleByline>
        by <Authors authors={attributes.coAuthors} /> | <time>{formatDate(attributes.date)}</time>
      </ArticleByline>
      <ArticleDescription dangerouslySetInnerHTML={{ __html: attributes.description }} />
    </ArticleMeta>
  )
}

export default ArticleHeader
