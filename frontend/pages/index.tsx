import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { HomeQuery } from '../graphql/HomeQuery'
import { fetchAPI } from '../graphql/request'
import Columns from '../components/homepage/Columns'
import styled from 'styled-components'

const HomePageWrapper = styled.main`
  display: grid;
  grid-column-gap: 18px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 24px;
  margin: 0 auto;
`

const Home: NextPage = ({ page }) => {
  return (
    <>
      <HomePageWrapper>
        <Columns columns={page} />
      </HomePageWrapper>
    </>
  )
}
export const getStaticProps = async () => {
  const resp = await fetchAPI(HomeQuery)
  // https://github.com/vercel/next.js/discussions/11180
  //need to return an arrror too
  return { props: { page: resp.pageBy.blocks }, revalidate: 6000 }
}

export default Home
