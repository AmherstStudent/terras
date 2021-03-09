import styled from 'styled-components'
import Link from 'next/link'


// TODO: Abstract, and create a sidebar panel component, sharing wwith FeaturedArticles
const BioSectonTitle = styled.h3`
  font-family: 'Halyard-Text';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160.7%;
  color: #000000;
  margin: 0;
  border-bottom: 5px solid black;
  margin-bottom: 12px;
  padding-bottom: 5px;
`
const AuthorName = styled.h2`
  font-family: 'Halyard-Text';
  margin: 0;
`
const Bio = styled.p`
  font-family: 'Halyard-Text';
  font-weight: 300;
  font-size: 1em;
  line-height: 1.25em;
  color: #000000;
  flex-shrink: 1;
  overflow-wrap: anywhere;
  height: auto;
`
const ReadMore = styled.a`
  text-decoration: none;
  font-size: 0.5em;
  font-weight: 300;
`
const Author = author => {
  return (
    <>
      <AuthorName>
        {author.display_name}{' '}
        <Link href={{ pathname: `/author/${author.slug}` }} passHref>
          <ReadMore>read more</ReadMore>
        </Link>
      </AuthorName>
      <Bio>{author.bio}</Bio>
    </>
  )
}
const AuthorBio = ( {authors} ) => {
  let title = authors.length > 1 ? "AUTHORS" : "AUTHOR"
  return (
    <>
      <BioSectonTitle>{title}</BioSectonTitle>
      {authors.map((author, i)=> (
        <Author key={i} {...author} />
      ))}
    </>
  )
}

export default AuthorBio
