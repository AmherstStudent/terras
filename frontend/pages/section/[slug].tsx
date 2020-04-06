import { NextPage } from 'next';
import Layout from '../../components/layout'
import Navbar from "../../components/base/Navbar"
import CategoryHead from "../../components/section/CategoryHead"
import styled from 'styled-components'
import SectionArticleList from "../../components/section/SectionArticleList"

const Wrapper = styled.div`
  grid-column: 1 / 3;

`

let categories = [
  {
    "id": "Y2F0ZWdvcnk6Mg==",
    "name": "Arts and Living",
    "slug": "arts-and-living"
  },
  {
    "id": "Y2F0ZWdvcnk6MQ==",
    "name": "News",
    "slug": "news"
  },
  {
    "id": "Y2F0ZWdvcnk6NA==",
    "name": "Opinion",
    "slug": "opinion"
  },
  {
    "id": "Y2F0ZWdvcnk6Mw==",
    "name": "Sports",
    "slug": "sports"
  }
]

const Section = ({name, categoryID}) => (<>
    <Navbar /> 
    <Layout>
      <CategoryHead category={name} />
      <Wrapper>
        <SectionArticleList categoryID={categoryID} />
      </Wrapper>
    </Layout>
    </>)



Section.getInitialProps = async ({ query }) => {
  let category = categories.find(category => category.slug == query.slug)
  return { categoryID: category.id, name: category.name }
}

export default Section