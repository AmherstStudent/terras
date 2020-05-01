import {ArticleDocument} from '../../components/article/ArticleQuery'

import Layout from "../../components/layout"
import {useQuery} from "@apollo/react-hooks"
import FeaturedImage from '../../components/article/FeaturedImage';
import ArticleHeader from '../../components/article/ArticleHeader'
import Navbar from '../../components/base/Navbar'
import {NewBlock} from "../../components/article/RenderBlocks"
import AuthorBio from "../../components/article/AuthorBio"
import FeaturedArticles from "../../components/article/FeaturedArticles"
import styled from "styled-components"
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

const Article = ({slug}) => {
  const { loading, error, data } = useQuery(ArticleDocument, {
    variables: {slug: slug}
  })
  if (loading) return <p>Loading Post...</p>;
  if (error) return <p>Something wrong happened!</p>;
  let article = data.postBy
  
  const elements = article.blocks.map(block => (
    <NewBlock key={article.__typename} {...block} />
  ))

  return (
    <>
    <Navbar />
    {article.featuredImage && (<FeaturedImage {...article.featuredImage} />)}
    <Layout>
      <ArticleSEO {...article} />
    <ArticleWrapper itemscope itemtype="http://schema.org/Article">
      <ArticleSEO {...article} />
      <ArticleHeader 
        title={article.title}
        description={article.excerpt.replace(/<[^>]*>?/gm, '')}
        coAuthors={article.coAuthors}
        date={article.date}
        section={article.categories.nodes[0]}
      />
        <ArticleContent>
          {elements}
          <AuthorBio authors={article.coAuthors}/>
        </ArticleContent>
        <ArticleAside>
          <FeaturedArticles />
        </ArticleAside>
        
      </ArticleWrapper>
      
    </Layout>
    </>
    
  )
}

Article.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}


export default Article;
