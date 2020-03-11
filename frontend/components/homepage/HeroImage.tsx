import styled from 'styled-components'
import Link from 'next/link'
import { formatDate, AuthorNames } from '../util'

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const HeroImg = styled.img`
  max-width: 97%;
  width: 97%;
`

const Card = styled.div`
  background-color: white;
  width: 65%;
  bottom: -2.5%;
  left: 30%;
  position: absolute;
  padding: 20px 30px;
  padding-right: 10px;
`
const Category = styled.span`
  font-family: var(--span-font);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  /* or 0% */
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #3f1f69;
`
const CardTitle = styled.h1`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 40px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
  & > a {
    text-decoration: none;
    color: #000000;
  }
`
const AuthorsTagline = styled.span`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */
  color: #595959;
`

const AuthorUnderline = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 9px;
  background-color: #3f1f69;
  margin: 15px 0;
`

const HeroImage = (attributes: { authors; featuredImageUrl; category; title; date; slug; }) => {
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
    <HeroImageWrapper>
      {attributes.featuredImageUrl && <HeroImg src={attributes.featuredImageUrl} />}
      <Card>
        <Category>{attributes.category}</Category>
        <CardTitle><Link href={{ pathname: '/article', query: { slug: attributes.slug } }} as={"/article/" + attributes.slug } passHref><a>{attributes.title}</a></Link></CardTitle>
        <AuthorsTagline>
          by <AuthorNames authors={authors} /> {titles} || {formatDate(attributes.date)}
        </AuthorsTagline>
        <AuthorUnderline />
      </Card>
    </HeroImageWrapper>
  )
}

export default HeroImage
