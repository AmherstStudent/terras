import styled from 'styled-components'
import Link from 'next/link'
import { formatDate, AuthorNames } from '../util'
const ArticleBlockWrapper = styled.div`
  margin-bottom: 20px;
  height: 100%;
  width: 100%;
`
const Category = styled.a`
  font-family: Halyard Text;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #3f1f69;
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
  margin: 50px 0;
`
const AuthorUnderline = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 9px;
  background-color: #3f1f69;
  margin: 20px 0;
`

const AuthorName = styled.a`
  font-family: Halyard Text;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
  text-transform: capitalize;
`

const LargeArticleBlock = (attributes: { article; date; category; authors; title; excerpt; slug; }) => {
  let authors = JSON.parse(attributes.authors)

  let titles =
    authors.length > 1
      ? authors
          ?.map(author => {
            return author.job_title
          })
          .join(' & ')
      : authors[0].job_title

  return (
    <ArticleBlockWrapper>
      <ArticleTextContent>
        <Category>{attributes.category}</Category>
        <ArticleTitle><Link href={{ pathname: '/article', query: { slug: attributes.slug } }} as={"/article/" + attributes.slug } passHref><a>{attributes.title}</a></Link></ArticleTitle>
        <ArticleByline>
          by <AuthorNames authors={authors} /> {titles}
        </ArticleByline>
        <ArticleByline>{formatDate(attributes.date)}</ArticleByline>
        <AuthorUnderline />
      </ArticleTextContent>
      <ArticleBio dangerouslySetInnerHTML={{__html: attributes.excerpt}}/>
    </ArticleBlockWrapper>
  )
}

export default LargeArticleBlock
