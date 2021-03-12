import { fetchAPI, gql } from './request'

const GET_ALL_POSTS_WITH_SLUG = gql`
  {
    posts(first: 1000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`

const GET_ALL_PAGES_SLUGS = gql`
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
const AUTHOR_PATHS = gql`
  {
    users {
      nodes {
        nicename
      }
    }
  }
`
const RSS_FEED = gql`
  {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          slug
          excerpt
          date
        }
      }
    }
  }
`
// perhaps create a function for looping over all articles
export const getAllPostsSlugs = async (): Promise<Array<string>> => {
  const resp = await fetchAPI(GET_ALL_POSTS_WITH_SLUG)
  const allBaseSlugs = resp.posts
  const paths: string[] = allBaseSlugs.edges.map(({ node }) => `/article/${node.slug}`)
  return paths
}

export const getAllPageSlugs = async (): Promise<Array<string>> => {
  const resp = await fetchAPI(GET_ALL_PAGES_SLUGS)
  const allBaseSlugs = resp.pages
  const paths: string[] = allBaseSlugs.edges.map(({ node }) => `/${node.slug}`)
  return paths
}

export const getAllAuthorPaths = async (): Promise<Array<string>> => {
  const resp = await fetchAPI(AUTHOR_PATHS)
  const allBaseSlugs = resp.users
  const paths: string[] = allBaseSlugs.nodes.map(({ node }) => `/author/${node.nicename}`)
  return paths
}

export const getRecentArticlesMeta = async () => {
    const resp = await fetchAPI(RSS_FEED)
    const articleList = resp.posts.edges
    return articleList
}
  