import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Link from 'next/link'
import { formatDate, TimeDate } from '../util'
import { Authors } from '../Pagination'
const TagsQuery = gql`
  query Tags {
    tag(id: "cG9zdF90YWc6MTcx") {
      name
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          slug
          date
          coAuthors {
            reporter_title
            display_name
            id
          }
        }
      }
    }
  }
`
const FeaturedWrapper = styled.div`
  width: 100%;
`
const FeaturedArticlesTitle = styled.h3`
  font-family: var(--span-text2);
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.25em;
  line-height: 160.7%;
  color: #000000;
  border-bottom: 5px solid black;
  padding-bottom: 5px;
  margin: 0;
`

export type AuthorInt = {
  display_name: string
  avatar: string
  slug: string
  bio: string
  id: number
  reporter_title: string
}

const ArticleTitle = styled.h5`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 147.7%;
  color: #000000;
  margin: 0;
  a {
    text-decoration: none;
    color: black;
  }
`
const ArticleByline = styled.span`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 0.8em;
  line-height: 133.2%;
  /* or 15px */
`

const ArticleWrapper = styled.div`
  padding: 20px 0;
  border-bottom: solid black 1px;
`
const Article = article => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <ArticleWrapper>
      <ArticleTitle>
        <Link href={{ pathname: `/article/${article.slug}` }} passHref>
          <a>{article.title}</a>
        </Link>
      </ArticleTitle>

      <ArticleByline>
        by <Authors authors={article.coAuthors} /> | <TimeDate unformattedDate={article.date} />
      </ArticleByline>
    </ArticleWrapper>
  )
}

const FeaturedArticles = () => {
  const { loading, error, data } = useQuery(TagsQuery)
  const articles: Array<Object> = data?.tag?.posts?.nodes

  return (
    <FeaturedWrapper>
      <FeaturedArticlesTitle>Featured Articles</FeaturedArticlesTitle>
      {articles?.map(article => {
        return <Article {...article} />
      })}
    </FeaturedWrapper>
  )
}

export default FeaturedArticles
