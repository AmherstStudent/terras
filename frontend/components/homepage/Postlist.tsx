import styled from 'styled-components'
import Link from 'next/link'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { formatDate, AuthorNames } from '../util'

const TagsQuery = gql`
  query Tags {
    tag(id: "cG9zdF90YWc6NQ==") {
      name
      posts(where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          categories {
            nodes {
              name
              slug
            }
          }
          coAuthors {
            display_name
            id
            reporter_title
          }
        }
      }
    }
  }
`

const PostWrapper = styled.div`
  border-bottom: 0.5px rgba(0, 0, 0, 0.5) solid;
  padding: 10px 0;
`
const Category = styled.a`
  font-family: Halyard Text;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  & > a {
    text-decoration: none;
    color: #3f1f69;
  }
`
const Title = styled.h3`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin: 0;

  & > a {
    text-decoration: none;
    color: #000000;
  }
`
const Tagline = styled.p`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #595959;
  margin: 5px 0;
`

/// STEAL FROM TAGS PAGE
const Post = ({ date, title, authors, category, id, slug }) => {
  let titles =
    authors.length > 1
      ? authors
          ?.map(author => {
            return author.reporter_title
          })
          .join(' & ')
      : authors[0].reporter_title

  return (
    <PostWrapper>
      <Category>
        <Link key={id} href={{ pathname: '/section', query: { slug: category } }} passHref>
          <a>{category}</a>
        </Link>
      </Category>
      <Title>
        <Link key={id} href={{ pathname: '/article', query: { slug: slug } }} passHref>
          <a>{title}</a>
        </Link>
      </Title>
      <Tagline>
        by <AuthorNames authors={authors} />
        {titles} || <time>{formatDate(date)}</time>
      </Tagline>
    </PostWrapper>
  )
}
const PostlistWrapper = styled.div`
  height: 100%;
`
const Postlist = () => {
  const { loading, error, data } = useQuery(TagsQuery)
  let articles = data?.tag?.posts?.nodes
  return (
    <PostlistWrapper>
      {articles?.map(article => {
        return (
          <Post
            key={article.id}
            date={article.date}
            title={article.title}
            authors={article.coAuthors}
            category={article.categories.nodes[0].name}
            id={article.id}
            slug={article.slug}
          />
        )
      })}
    </PostlistWrapper>
  )
}

export default Postlist
