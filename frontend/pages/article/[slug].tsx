import {ArticleDocument} from '../../components/article/ArticleQuery'

import Layout from "../../components/layout"
import { gql, useQuery } from "@apollo/client";
import FeaturedImage from '../../components/article/FeaturedImage';
import ArticleHeader from '../../components/article/ArticleHeader'
import Navbar from '../../components/base/Navbar'
import {NewBlock} from "../../components/article/RenderBlocks"
import AuthorBio from "../../components/article/AuthorBio"
import FeaturedArticles from "../../components/article/FeaturedArticles"
import styled from "styled-components"
import Theme from '../../components/Theme'
import ArticleSEO from "../../components/article/ArticleSEO"


// TODO: We're going to have add multiple themes, will be a mini refactor.

const ArticleWrapper = styled.article`
  display: grid; 
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
`

const ArticleContent = styled.section`
  grid-column: 1 / 6;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }

`
const ArticleAside = styled.aside`
  grid-column: 6 / -1;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-column: 1/ -1;
  }
`
const ArticleWrapped = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns:
    1fr
    min(80ch, 100%)
    1fr;

  /* Body Text */
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1em;
  line-height: 172%;
 
  & blockquote {
    background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  }
  
  
& > * {
  grid-column: 2;
  
}

`
const Article = ({slug}) => {
  const { loading, error, data } = useQuery(ArticleDocument, {
    variables: {slug: slug}
  })
  console.log(error)
  if (loading) return <p>Loading Post...</p>;
  if (error) return `<p>Something wrong happened! ${error} </p>`;
  let article = data.postBy
  
  const elements = article.blocks.map(block => (
    <NewBlock key={article.__typename} {...block} />
  ))

  return (
    <Theme>
    {article.featuredImage && (<FeaturedImage {...article.featuredImage} />)}
  
      {/* <ArticleSEO {...article} /> */}
    <ArticleWrapped itemscope itemtype="http://schema.org/Article">
    <ArticleHeader 
        title={article.title}
        description={article.excerpt.replace(/<[^>]*>?/gm, '')}
        coAuthors={article.coAuthors}
        date={article.date}
        section={article.categories.nodes[0]}
      />
          {elements}
          <AuthorBio authors={article.coAuthors}/>
  
    </ArticleWrapped>
   
  
    </Theme>
    
  )
}

Article.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}



export default Article;
