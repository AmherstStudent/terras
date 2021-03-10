import Link from 'next/link'
import styled from 'styled-components'

export const formatDate = (date: string) => {
  const updatedDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = updatedDate.toLocaleDateString('en-US', options)
  return formattedDate
}

export const TimeDate = ({ unformattedDate }) => {
  const updatedDate = new Date(unformattedDate)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = updatedDate.toLocaleDateString('en-US', options)
  return <time dateTime={unformattedDate}>{formattedDate}</time>
}

const AuthorName = styled.a`
  font-family: var(--span-font);
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
  text-transform: capitalize;
`
// Smart Strip tags
const SEO = props => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
    </>
  )
}

const AuthorNameLink = author => {
  return (
    <Link key={author.id} href={{ pathname: '/author', query: { id: author.id } }} as={'/author/' + author.id} passHref>
      <AuthorName>
        {author.display_name}
        {',  '}
      </AuthorName>
    </Link>
  )
}

export const AuthorNames = ({ authors }) =>
  authors?.map(author => {
    return <AuthorNameLink {...author} />
  })


// Get static paths 

