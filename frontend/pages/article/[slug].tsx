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

  display: grid;
  grid-template-columns:
    1fr
    min(80ch, 100%)
    1fr;
  font-family:'URWBaskervilleW01-Regular';
  /* This past November marked the fifth anniversary of Amherst Uprising, a multi-day sit-in of Frost Library led by students who that demanded attention and change surrounding racism on campus. Yet for many, the Uprising never ended — and, it didn’t begin in November 2015. Rather, it marked just a moment in a decades-long struggle for racial justice and Black equality within the institution. The activism bred by Amherst Uprising was not new or unprecedented, but embodied traditions set by Amherst students in the decades prior to the 2015 sit-in. In the spring of 1969, for instance, the college experienced two moratoriums on classes — one initiated by the college to reflect on the Vietnam War, civil rights and coeducation in light of uprisings at Columbia and UC Berkeley;, another staged by the Afro- American Society to address the role of racism on campus. With these Out of the moratoriaum came the college’s Black studies department, which was approved by the faculty voted in favor of that spring and officially founded two years later in 1971. Or take the divestment movement of the late 1970s, in which Amherst students pressed the college to pull investments from apartheid in South Africa. Students succeeded and, which the college fully divesteding in 1985. The 2015 sit-in was not an isolated moment — Uprising has continually happened at the college, and will continue to happen. */

  /* Body Text */
  font-family: Baskerville;
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
  margin-bottom: 34px;
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
    <>
    <Navbar />
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
   
  
    </>
    
  )
}

Article.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}



export default Article;
