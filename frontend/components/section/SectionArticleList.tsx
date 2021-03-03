import { PostList } from '../../components/Pagination'
import { useQuery, gql } from '@apollo/client'
const CategoryQuery = gql`
  query Category($cursor: String, $categoryID: ID!) {
    category(id: $categoryID) {
      name
      posts(first: 10, after: $cursor) {
        nodes {
          title
          excerpt(format: RENDERED)
          date
          slug
          featuredImage {
            sourceUrl
            altText
          }
          coAuthors {
            display_name
            avatar
            slug
            reporter_title
            id
          }
          issues {
            nodes {
              id
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

const SectionArticleList = ({ categoryID }) => {
  const { fetchMore, loading, error, data, variables } = useQuery(CategoryQuery, {
    variables: { cursor: '', categoryID: categoryID },
  })
  if (loading) return <p>Loading Post...</p>
  if (error) return <p>Something wrong happened! {variables} </p>
  // const {posts: articles, pageInfo} = category
  let {
    category: {
      name,
      posts: { nodes: articles, pageInfo },
    },
  } = data

  return (
    <PostList
      articles={articles || []}
      pageInfo={pageInfo}
      getMore={() =>
        fetchMore({
          variables: {
            cursor: data.category.posts.pageInfo.endCursor,
            categoryID: categoryID,
          },
          updateQuery: (previousResult: any, { fetchMoreResult }) => {
            const newNodes = fetchMoreResult.category.posts.nodes
            const pageInfo = fetchMoreResult.category.posts.pageInfo
            return newNodes.length
              ? {
                  category: {
                    name: previousResult.category.name,
                    posts: {
                      nodes: [...previousResult.category.posts.nodes, ...newNodes],
                      pageInfo,
                      __typename: previousResult.category.posts.__typename,
                    },
                    __typename: previousResult.category.__typename,
                  },
                }
              : previousResult
          },
        })
      }
    />
  )
}

export default SectionArticleList
