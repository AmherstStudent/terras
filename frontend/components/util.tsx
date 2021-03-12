import Link from 'next/link'
import styled from 'styled-components'

export const formatDate = (date: string) => {
  const updatedDate: Date = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate: string = updatedDate.toLocaleDateString('en-US', options)
  return formattedDate
}

export const TimeDate = ({ unformattedDate }) => {
  const updatedDate = new Date(unformattedDate)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = updatedDate.toLocaleDateString('en-US', options)
  return <time dateTime={unformattedDate}>{formattedDate}</time>
}

const AuthorName = styled.a`
  font-family: 'Halyard-Text';
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
  text-transform: capitalize;
`

const AuthorNameLink = author => {
  return (
    <Link href={{ pathname: `/author/${author.slug}` }} passHref>
      <AuthorName>
        {author.display_name}
        {',  '}
      </AuthorName>
    </Link>
  )
}

export const AuthorNames = ({ authors }) =>
  authors?.map(author => {
    return <AuthorNameLink key={author.id} {...author} />
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
  const allBaseSlugs = resp.pages
  const paths = allBaseSlugs.edges.map(({ node }) => `/${node.slug}`)
  return paths
}
