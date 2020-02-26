import styled from 'styled-components'
import Link from 'next/link'
import { formatDate, AuthorNames } from '../util'

const ArticleBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Category = styled.span`
  font-family: Halyard Text;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #3f1f69;
`
const ArticleImage = styled.img`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
`
const ArticleTextContent = styled.div`
  margin-top: 20px;
`
const ArticleTitle = styled.h2`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
`
const ArticleByline = styled.p`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin: 0;
  /* or 18px */
  color: #595959;
`
const ArticleBio = styled.p`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 172.1%;
  /* or 28px */
  color: #080808;
`

const SmallArticleBlock = (attributes: { authors; title; category; featuredImage; date; excerpt }) => {
  let authors = JSON.parse(attributes.authors)
  let titles =
    authors.length > 1
      ? authors
          ?.map(author => {
            return author.job_title
          })
          .join(' & ')
      : attributes.authors[0].job_title
  console.log(attributes.date)

  return (
    <ArticleBlockWrapper>
      {attributes.featuredImage && <ArticleImage src={attributes.featuredImage.url} />}
      <ArticleTextContent>
        <Category>{attributes.category}</Category>
        <ArticleTitle>{attributes.title}</ArticleTitle>
        <ArticleByline>
          by <AuthorNames authors={authors} /> {titles} || {formatDate(attributes.date)}
        </ArticleByline>
        <ArticleBio>{attributes.excerpt}</ArticleBio>
      </ArticleTextContent>
    </ArticleBlockWrapper>
  )
}

export default SmallArticleBlock
