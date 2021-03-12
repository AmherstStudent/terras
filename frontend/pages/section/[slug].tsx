import styled from 'styled-components'
import CategoryHead from '../../components/section/CategoryHead'
import SectionArticleList from '../../components/section/SectionArticleList'

const Wrapper = styled.div`
  grid-column: 1 / 3;
`

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

const Section = ({ name, categoryID }) => (
  <>
    <CategoryHead category={name} />
    <Wrapper>
      <SectionArticleList categoryID={categoryID} />
    </Wrapper>
  </>
)

Section.getInitialProps = async ({ query }) => {
  const category = categories.find(category => category.slug == query.slug)
  return { categoryID: category.id, name: category.name }
}

export const getStaticPaths = async () => {
  // const paths = getAllAuthorPaths()
  return {
    paths: [],
    fallback: true,
  }
}

export default Section
