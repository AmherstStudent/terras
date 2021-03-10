import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { HomeDocument } from '../components/homepage/HomeQuery'
import Columns from '../components/homepage/Columns'
import styled from 'styled-components'

const HomePageWrapper = styled.main`
  display: grid;
  grid-column-gap: 18px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 24px;
`

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument)
  const page = data && data.pageBy.blocks
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Please </p>
  return (
    <>
      <HomePageWrapper>
        <Columns columns={page} />
      </HomePageWrapper>
    </>
  )
}

export default Home
