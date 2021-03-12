import FeaturedImage from '../../components/article/FeaturedImage'
import ArticleHeader from '../../components/article/ArticleHeader'
import { NewBlock } from '../../components/article/RenderBlocks'
import AuthorBio from '../../components/article/AuthorBio'
import FeaturedArticles from '../../components/article/FeaturedArticles'
import styled from 'styled-components'
import ArticleSEO from '../../components/article/ArticleSEO'
import DisqusComments from '../../components/article/disqus-comments'
import { useRouter } from 'next/router'
import { getAllPostsSlugs, getArticle } from '../../graphql'

const ArticleWrapped = styled.main`
  margin: 0 auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr min(75ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;

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
const Article = ({ post: article }) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <ArticleWrapped>
        <h1>Article loading</h1>
      </ArticleWrapped>
    )
  }
  if (article == undefined) {
    return <> Can't find </>
  }
  const elements = article?.blocks?.map(block => <NewBlock key={article.__typename} {...block} />)
  return (
    <>
      <ArticleSEO {...article} />
      <ArticleWrapped itemscope itemtype="http://schema.org/Article">
        {article.featuredImage && <FeaturedImage {...article.featuredImage} />}

        <ArticleHeader
          title={article.title}
          description={article.excerpt.replace(/<[^>]*>?/gm, '')}
          coAuthors={article.coAuthors}
          date={article.date}
          section={article.categories.nodes[0]}
        />
        {elements}

        <AuthorBio authors={article.coAuthors} />
        <DisqusComments post={article} />
        <FeaturedArticles />
      </ArticleWrapped>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllPostsSlugs()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const article = await getArticle(params.slug)
  return { props: { post: article }, revalidate: 1 }
}

export default Article
