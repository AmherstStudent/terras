import { NextPage } from 'next'
import Layout from '../components/layout'
import Navbar from '../components/base/Navbar'
import { useQuery } from '@apollo/react-hooks'
import { HomeDocument } from '../components/homepage/HomeQuery'
import Columns from '../components/homepage/Columns'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
const HomePageWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 10px;
  margin-top: 20px;
`

const SearchTool = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
}

const Search: NextPage = () => {
  const { loading, error, data } = useQuery(HomeDocument)
  let page = data && data.pageBy.blocks
  if (loading) return <p>Loading ...</p>
  return (
    <>
      <Navbar />

      <Layout>
        <HomePageWrapper>
          <Columns columns={page} />
        </HomePageWrapper>
      </Layout>
    </>
  )
}

export default Search
