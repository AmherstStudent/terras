import { request } from 'graphql-request'
import PageDocument from '../graphql/PageDocument'
import { NewBlock } from '../components/article/RenderBlocks'
import styled from 'styled-components'
import { getAllPageSlugs } from '../components/util'
import { useRouter } from 'next/router'

const Wrapper = styled.main`
  margin: 0 auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr min(75ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;

  & > * {
    grid-column: 2;
  }
`

const Page = ({ page }) => {
  // if (loading) return <p>Loading Post...</p>
  // if (error) return <p>Something wrong happened!</p>
  // TODO: Add a 404 page
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const elements = page.blocks.map(block => <NewBlock {...block} />)
  return (

      <Wrapper>
        <h2>{page.title}</h2>
        {elements}
      </Wrapper>
  
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllPageSlugs()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const variables = { slug: params.slug }
  const resp = await request('https://admin.amherststudent.com/graphql', PageDocument, variables)
  return { props: { page: resp.pageBy }, revalidate: 10 }
}

export default Page
