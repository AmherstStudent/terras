import styled from 'styled-components'
import Link from 'next/link'
import { formatDate, AuthorNames } from '../util'

const ArticleBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Category = styled.span`
  font-family: var(--span-font);
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
  & > a {
    text-decoration: none;
    color: #000000;
  }
`
const ArticleByline = styled.p`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin: 0;
  /* or 18px */
  color: #595959;
`
const ArticleBio = styled.p`
  font-family: var(--span-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 172.1%;
  /* or 28px */
  color: #080808;
`

const SmallArticleBlock = (attributes: { authors; title; category; featuredImage; date; excerpt; slug }) => {
  let authors = JSON.parse(attributes.authors)
  let titles =
    authors.length > 1
      ? authors
          ?.map(author => {
            return author.job_title
          })
          .join(' & ')
      : attributes.authors[0].job_title

  return (
    <ArticleBlockWrapper>
      {attributes.featuredImage && <ArticleImage src={attributes.featuredImage.url} />}
      <ArticleTextContent>
        <Link href={{ pathname: '/section', query: { slug: attributes.category } }} as={'/section/' + attributes.category} passHref>
          <Category>{attributes.category}</Category>
        </Link>
        <ArticleTitle>
          <Link href={{ pathname: '/article', query: { slug: attributes.slug } }} as={'/article/' + attributes.slug} passHref>
            <a>{attributes.title}</a>
          </Link>
        </ArticleTitle>
        <ArticleByline>
          by <AuthorNames authors={authors} /> {titles} || {formatDate(attributes.date)}
        </ArticleByline>
        <ArticleBio dangerouslySetInnerHTML={{ __html: attributes.excerpt }} />
      </ArticleTextContent>
    </ArticleBlockWrapper>
  )
}

export default SmallArticleBlock
