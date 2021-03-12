import styled from 'styled-components'
import Link from 'next/link'
import { formatDate } from '../util'
import { Authors } from '../Pagination'
import { Category } from '../styles'

const HeroContainer = styled.section`
  padding: 18px;
  font-family: 'Halyard-Text';
  height: 100%;
`
const HeroImageWrap = styled.img`
  width: 100%;
  height: auto;
  max-height: 50%;
  vertical-align: middle;
`
const HeroTitle = styled.h1`
  font-family: 'Cormorant';
  font-size: 2em;
  & a {
    text-decoration: none;
    color: black;
  }
`
const HeroText = styled.p`
  line-height: 1.5;
  font-weight: 200;
  color: #595959;
`

const HeroImage = (attributes: { authors; excerpt; featuredImageUrl; category; title; date; slug }) => (
  <HeroContainer>
    <HeroImageWrap src={attributes?.featuredImageUrl} />
    <Category>{attributes.category}</Category>
    <HeroTitle>
      <Link href={`/article/${attributes.slug}`}>
        <a>{attributes.title}</a>
      </Link>
    </HeroTitle>
    <HeroText>{attributes.excerpt}</HeroText>
    <Authors authors={JSON.parse(attributes.authors)} /> &middot; <time>{formatDate(attributes.date)}</time>
  </HeroContainer>
)
export default HeroImage
