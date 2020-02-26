import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Link from 'next/link'
import AuthorInterface from './AuthorBio'
const TagsQuery = gql`
  query Tags {
    tag(id: "cG9zdF90YWc6NQ==") {
      name
      posts(where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          slug
          date
          coAuthors {
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
  font-family: 'Halyard Micro';
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 18px;
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
  job_title: string
}

const ArticleTitle = styled.h5`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 147.7%;
  color: #000000;
  margin: 0;
`
const ArticleByline = styled.span`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 11px;
  line-height: 133.2%;
  /* or 15px */
`

const Author: React.FunctionComponent<AuthorInt> = author => {
  return (
    <Link key={author.id} href={{ pathname: '/author', query: { id: author.id } }} passHref>
      <span>
        {author.display_name}
        {', '}
      </span>
    </Link>
  )
}
const ArticleWrapper = styled.div`
  padding: 20px 0;
  border-bottom: solid black 1px;
`
const Article = article => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <ArticleWrapper>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleByline>
        {' '}
        By{' '}
        {article.coAuthors?.map(author => {
          return <Author {...author} />
        })}{' '}
        | <time>{new Date(article.date).toLocaleDateString('en-US', options)}</time>
      </ArticleByline>
    </ArticleWrapper>
  )
}

// const coAuthors: React.FunctionComponent<{AuthorInterface}> = (coAuthors) => {
//   return ()
// }

const FeaturedArticles = () => {
  const { loading, error, data } = useQuery(TagsQuery)
  let articles: Array<Object> = data?.tag?.posts?.nodes
  console.log(articles)

  // let authorNames = articles.coAuthors.map(function(author) {
  //   return <><Link key={author.id} href={{pathname:"/author", query: {id: author.id}}} passHref>
  //       <h5>{author.display_name}</h5>
  //   </Link>{ ","} </>
  // })
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
