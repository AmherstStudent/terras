import { NextPage } from 'next';
import Layout from '../components/layout'
import Navbar from "../components/base/Navbar"
import {useQuery} from "@apollo/react-hooks"
import {HomeDocument} from '../components/homepage/HomeQuery'
import Columns from "../components/homepage/Columns"
import styled from 'styled-components'

const HomePageWrapper = styled.div`
  display:grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 10px;
  margin-top: 20px;
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument);
  let page = data && data.pageBy.blocks;
  if (loading) return <p>Loading ...</p>;
  return (<>
    <Navbar />
    
    <Layout>
      <HomePageWrapper>
      <Columns columns={page} />
      </HomePageWrapper>
    </Layout>
    </>
  )
}


Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
