import styled from 'styled-components'
import CategoryHead from '../../components/section/CategoryHead'
import SectionArticleList from '../../components/section/SectionArticleList'
import { getCategories } from '../../graphql'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

const categories = [
  {
    id: 'Y2F0ZWdvcnk6Mg==',
    name: 'Arts and Living',
    slug: 'arts-and-living',
  },
  {
    id: 'Y2F0ZWdvcnk6MQ==',
    name: 'News',
    slug: 'news',
  },
  {
    id: 'Y2F0ZWdvcnk6NA==',
    name: 'Opinion',
    slug: 'opinion',
  },
  {
    id: 'Y2F0ZWdvcnk6Mw==',
    name: 'Sports',
    slug: 'sports',
  },
]

const Wrapper = styled.main`
  margin: 0 auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr min(100ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;

  & > * {
    grid-column: 2;
  }
`

const Section = ({ slug }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const category = categories.find(category => category.slug === slug)
  return (
    <>
      <Head>
        <title>{category.name} | Amherst Student</title>
      </Head>
      <Wrapper>
        <CategoryHead category={category.name} />
        <SectionArticleList categoryID={category.id} />
      </Wrapper>
    </>
  )
}

// Section.getInitialProps = async ({ query }) => {
//   const category = categories.find(category => category.slug == query.slug)
//   return { categoryID: category.id, name: category.name }
// }

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = getAllAuthorPaths()
  // Get all categories, create it into a slug
  const paths = await getCategories()
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { slug: params.slug }, revalidate: 1 }
}

export default Section
