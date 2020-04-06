import styled from 'styled-components'
import Link from 'next/link'

export interface AuthorInterface {
  display_name: string
  avatar: string
  slug: string
  bio: string
  id: number
  reporter_title: string
}

// TODO: Abstract, and create a sidebar panel component, sharing wwith FeaturedArticles
const BioSectonTitle = styled.h3`
  font-family: Halyard-Micro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160.7%;
  color: #000000;
  margin: 0;
  border-bottom: 5px solid black;
  padding-bottom: 5px;
`

const BioSection = styled.div`
  margin-top: 20px;
`
const AuthorBioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
`
const AuthorImageContainer = styled.div`
  text-align: left;
  margin-right: 10px;
`
const AuthorImage = styled.img`
  min-width: 100px;
  width: auto;
  height: auto;
  min-height: 100px;
  background-color: #c4c4c4;
  border-radius: 50%;
`
const Bio = styled.p`
  font-family: var(--span-font);
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 141.2%;
  color: #000000;
  flex-shrink: 1;
  overflow-wrap: anywhere;
  height: auto;
`

const AuthorBio = (props: { authors: Array<AuthorInterface> }) => {
  return (
    <>
      <BioSection>
        <BioSectonTitle>{props.authors.length > 1 ? 'AUTHORS' : props.authors[0].display_name}</BioSectonTitle>

        {props.authors.map((author, id) => (
          <AuthorBioWrapper key={id}>
            <AuthorImageContainer>
              <Link href={author.slug}>
                <AuthorImage src={author.avatar} />
              </Link>
            </AuthorImageContainer>
            <Bio>{author.bio}</Bio>
          </AuthorBioWrapper>
        ))}
      </BioSection>
    </>
  )
}

export default AuthorBio
