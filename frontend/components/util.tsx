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
const API_URL = 'https://admin.amherststudent.com/graphql'
export const fetchAPI = async (query, variables = {}) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`)
  }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export const GET_ALL_POSTS_WITH_SLUG = `
  {
    posts(first: 1000) {
      edges {
        node {
          slug
        }
      }
    }
  }`

export const GET_ALL_PAGES_SLUGS = `
{
  pages(first: 50) {
    edges {
      node {
        slug
      }
    }
  }
}
`

export const getAllPostsSlugs = async () => {
  const resp = await fetchAPI(GET_ALL_POSTS_WITH_SLUG)
  const allBaseSlugs = resp.posts
  const paths = allBaseSlugs.edges.map(({ node }) => `/article/${node.slug}`)
  return paths
}

export const getAllPageSlugs = async () => {
  const resp = await fetchAPI(GET_ALL_PAGES_SLUGS)
  const allBaseSlugs = resp.pages;
  const paths = allBaseSlugs.edges.map(({ node }) => `/${node.slug}`)
  return paths
}