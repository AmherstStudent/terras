import { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import { HomeDocument } from '../components/homepage/HomeQuery'
import Columns from '../components/homepage/Columns'
import styled from 'styled-components'

const HomePageWrapper = styled.main`
  display: grid;
  grid-column-gap: 18px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 18px;
  margin-top: 24px;
  min-height: 100vh;
  margin: 0 auto;
`

const Ad = styled.img`
  grid-column: 1 / -1;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument)
  let page = data && data.pageBy.blocks
  if (loading) return <p>Loading ...</p>
  return (
    <>
      <HomePageWrapper>
        <Columns columns={page} />
        <a href="https://www.amherst.edu/news/campus_community_events/virtual/presidents-colloquium">
          {' '}
          <Ad src="colloq.png" />
        </a>
      </HomePageWrapper>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
