import { NextPage } from 'next'
import Layout from '../components/layout'
import Navbar from '../components/base/Navbar'
import { gql, useQuery } from '@apollo/client'
import { HomeDocument } from '../components/homepage/HomeQuery'
import Columns from '../components/homepage/Columns'
import styled from 'styled-components'
import Theme from '../components/Theme'
const HomePageWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 10px;
  margin-top: 20px;
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument)
  let page = data && data.pageBy.blocks
  if (loading) return <p>Loading ...</p>
  return (
    <>
      <Theme>
        <Layout>
          <HomePageWrapper>
            <Columns columns={page} />
          </HomePageWrapper>
        </Layout>
      </Theme>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
