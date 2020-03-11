import { NextPage } from 'next';
import Layout from '../../components/layout'
import Navbar from "../../components/base/Navbar"
import {useQuery} from "@apollo/react-hooks"
import gql from 'graphql-tag';
import CategoryHead from "../../components/section/CategoryHead"
import styled from 'styled-components'
import {AuthorNames, formatDate} from "../../components/util"
import Link from 'next/link'
const Title = styled.h2`
font-family: Cormorant;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 34px;
color: #000000;
& > a {
  text-decoration: none;
  color: black;
}
`
const SubText = styled.p`
font-family: Halyard Text;
font-style: italic;
font-weight: 300;
font-size: 16px;
line-height: 23px;
color: #000000;
`
const Wrapper = styled.div`
  grid-column: span 4;

`
const Section = ({slug}) => {
  let categoryTitle = slug.replace(/-/g, ' ');
  const { loading, error, data } = useQuery(CategoryDocument, {
    variables: {category: categoryTitle}
  })
  if (loading) return <p>Loading Post...</p>;
  if (error) return <p>Something wrong happened!</p>;
  let articles = data.posts.nodes
    return (<>
    <Navbar /> 
    <Layout>
      <CategoryHead category={categoryTitle} />
      <Wrapper>
      {articles.map((article) => (<>
        <Title><Link href={{ pathname: '/article', query: { slug: article.slug } }} as={"/article/" + article.slug } passHref><a>{article.title}</a></Link></Title>
        <AuthorNames authors={article.coAuthors} /> {formatDate(article.date)}
        <SubText dangerouslySetInnerHTML={{__html: article.excerpt}}/>
        <hr />
        
      </>))}
      </Wrapper>
    </Layout>
    </>)
}

const CategoryDocument = gql`
query CategoryPage($category: String) {
  posts(where:{categoryName: $category}){
    nodes{
      title
      excerpt
      date
      slug
      coAuthors{
        display_name
        slug
        job_title
        id
      }
      issues{
        nodes{
          name
        }
      }
    }
  }
}

`

Section.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}

export default Section