import { useQuery, gql } from '@apollo/client'
import { PostList } from '../../components/Pagination'
import styled from 'styled-components'
import { GetStaticPaths } from 'next'
import { getAllAuthorPaths } from '../../graphql'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  grid-column: 1 / 3;
`

const Author = ({ slug }) => {
  // const { fetchMore, loading, error, data, variables } = useQuery(AuthorQuery, {
  //     variables: { cursor: '', slug: slug },
  //   })
  //   if (loading) return <p>Loading Post...</p>
  //   if (error) return <p>Something wrong happened! {variables} </p>

  //   let { users: {nodes } } = data
  //   let {name, description, posts: { nodes: articles, pageInfo }}  = nodes[0]
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  return (
    <>
      tm
      {/*         
        <h1>{name}</h1>
        <p>{description}</p>
        <Wrapper>

        <PostList
          articles={articles || []}
          pageInfo={pageInfo}
          getMore={() =>
            fetchMore({
              variables: {
                cursor: data.users.nodes[0].posts.pageInfo.endCursor,
                slug: slug,
              },
              updateQuery: (previousResult: any, { fetchMoreResult }) => {
                const newNodes = fetchMoreResult.users.nodes[0].posts.nodes
                const pageInfo = fetchMoreResult.users.nodes[0].posts.pageInfo
                debugger;
                return newNodes.length
                  ? {
                      users: {
                        
                        nodes: [
                        {name: fetchMoreResult.users.nodes[0].name,
                          id: fetchMoreResult.users.nodes[0].id,
                        posts: {
                          nodes: [...fetchMoreResult.users.nodes[0].posts.nodes, ...newNodes],
                          pageInfo,
                          __typename: fetchMoreResult.users.nodes[0].posts.__typename,
                        },
                        __typename: fetchMoreResult.users.nodes[0].__typename}
                      ],
                        __typename: fetchMoreResult.users.__typename

                      },
                      
                    }
                  : previousResult
              },
            })
          }
        />
              </Wrapper> */}
    </>
  )
}

// (
//     <>
//     <Navbar />
//     <Layout>
//         <p>
//             {slug}
//             Page currently uploading with author content, will be available in T-2 hours.</p>
//     </Layout>
//     </>
// )

Author.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}

// TODO: ISsue with querying
export const getStaticPaths = async () => {
  // const paths = getAllAuthorPaths()
  return {
    paths: [],
    fallback: true,
  }
}

export default Author

// const SectionArticleList = ({ slug }) => {
//   const { fetchMore, loading, error, data, variables } = useQuery(AuthorQuery, {
//     variables: { cursor: '', slug: slug },
//   })
//   if (loading) return <p>Loading Post...</p>
//   if (error) return <p>Something wrong happened! {variables} </p>
//   // const {posts: articles, pageInfo} = category
//   let {
//     users: {
//       name,
//       posts: { nodes: articles, pageInfo },
//     },
//   } = data

//   return (
//     <PostList
//       articles={articles || []}
//       pageInfo={pageInfo}
//       getMore={() =>
//         fetchMore({
//           variables: {
//             cursor: data.category.posts.pageInfo.endCursor,
//             slug: slug,
//           },
//           updateQuery: (previousResult: any, { fetchMoreResult }) => {
//             const newNodes = fetchMoreResult.category.posts.nodes
//             const pageInfo = fetchMoreResult.category.posts.pageInfo
//             return newNodes.length
//               ? {
//                   category: {
//                     name: previousResult.category.name,
//                     posts: {
//                       nodes: [...previousResult.category.posts.nodes, ...newNodes],
//                       pageInfo,
//                       __typename: previousResult.category.posts.__typename,
//                     },
//                     __typename: previousResult.category.__typename,
//                   },
//                 }
//               : previousResult
//           },
//         })
//       }
//     />
//   )
// }
