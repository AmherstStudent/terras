import styled from 'styled-components'
import Link from 'next/link'
import { formatDate } from '../util'
import { Authors } from '../Pagination'


const Category = styled.span`
  font-family: 'Halyard-Text';
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #3f1f69;
  margin: 12px 0;
`

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
const HeroTitle = styled.a`
  line-decoration: none;
  & h1 {
    font-family: Cormorant;
    font-size: 2em;
  }
`
const HeroText = styled.p`
  line-height: 1.5;
  font-weight: 200;
`

const HeroImage = (attributes: { authors; excerpt; featuredImageUrl; category; title; date; slug }) => (
  <HeroContainer>
    <HeroImageWrap src={attributes?.featuredImageUrl} />
    <Category>{attributes.category}</Category>
    <Link href={`/article/${attributes.slug}`}>
      <HeroTitle>
        <h1>{attributes.title}</h1>
      </HeroTitle>
    </Link>
    <HeroText>{attributes.excerpt}</HeroText>
    <Authors authors={JSON.parse(attributes.authors)} /> &middot; <time>{formatDate(attributes.date)}</time>
  </HeroContainer>
)
export default HeroImage
