import styled from 'styled-components'
import Link from 'next/link'
import { formatDate, AuthorNames } from '../util'
import { Authors } from '../Pagination'

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
  position: absolute;
  bottom: -2.5%;
  left: 30%;
  padding: 20px 30px;
  padding-right: 10px;
  @media (max-width: 680px) {
    position: static;
    bottom: 0;
    background-color: transparent;
    left: 0;
    padding: 0px;
    margin: 0;
    padding-top: 20px;
    max-width: 85%;
    width: 97%;
  }
`
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
const CardTitle = styled.h1`
  font-family: 'Cormorant';
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
  font-family: 'Halyard-Text';
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
// const HeroImageX = (attributes: { authors; featuredImageUrl; category; title; date; slug }) => {
//   let authors = JSON.parse(attributes.authors)

//   return (
//     <HeroImageWrapper>
//       {attributes.featuredImageUrl && <HeroImg src={attributes.featuredImageUrl} />}
//       <Card>
//         <Category>{attributes.category}</Category>
//         <CardTitle>
//           <Link href={{ pathname: '/article', query: { slug: attributes.slug } }} as={'/article/' + attributes.slug} passHref>
//             <a dangerouslySetInnerHTML={{ __html: attributes.title }} />
//           </Link>
//         </CardTitle>
//         <AuthorsTagline>
//           <Authors authors={authors} /> &middot; <time>{formatDate(attributes.date)}</time>
//         </AuthorsTagline>
//         <AuthorUnderline />
//       </Card>
//     </HeroImageWrapper>
//   )
// }

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
