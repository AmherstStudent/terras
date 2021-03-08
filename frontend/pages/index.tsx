import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
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

const AdWrapper = styled.a`
  max-width: 80vw;
  grid-column: 1 / -1;
  margin: 0 auto;
`
const Ad = styled.img`
  grid-column: 1 / -1;
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 80vw;
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument)
  let page = data && data.pageBy.blocks
  if (loading) return <p>Loading ...</p>
  return (
    <>
      <HomePageWrapper>
        <Columns columns={page} />
        <AdWrapper href="https://www.amherst.edu/news/campus_community_events/virtual/presidents-colloquium">
          {' '}
          <Ad src="colloq.png" />
        </AdWrapper>
      </HomePageWrapper>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
