import styled from 'styled-components'
import { AuthorInterface } from './AuthorBio'
import { formatDate } from '../util'
import {Authors} from "../Pagination"


interface ArticleContent {
  section: any
  title: string
  description: string
  date: string
  coAuthors: AuthorInterface[]
}

const ArticleMeta = styled.header`
  grid-column: 1 / -1;
  margin-top: 40px;
  margin-bottom: 40px;
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
  font-family: var(--header-font);
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
  margin: 0;
  margin-bottom: 10px;
`
const ArticleByline = styled.p`
  font-family: var(--span-font);
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  font-style: normal;
  font-weight: 300;
  color: #595959;
`
const ArticleDescription = styled.h2`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 18px;
  line-height: 172.1%;
  color: #595959;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 15px;
  width: 95%;
`



const ArticleHeader = (attributes: ArticleContent) => {
  console.log(attributes.description)
  return (
    <ArticleMeta>
      <Section>{attributes.section.name}</Section>
      <ArticleTitle itemprop="name">{attributes.title}</ArticleTitle>
      <ArticleByline>
        by <Authors authors={attributes.coAuthors} /> | <time>{formatDate(attributes.date)}</time>
      </ArticleByline>
      <ArticleDescription> {attributes.description}</ArticleDescription>
    </ArticleMeta>
  )
}

export default ArticleHeader
