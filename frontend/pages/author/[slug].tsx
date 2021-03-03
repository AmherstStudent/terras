import { useQuery, gql } from '@apollo/client';
import { PostList } from '../../components/Pagination'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 1 / 3;

`

const Author = ({slug}) => {
    const { fetchMore, loading, error, data, variables } = useQuery(AuthorQuery, {
        variables: { cursor: '', slug: slug },
      })
      if (loading) return <p>Loading Post...</p>
      if (error) return <p>Something wrong happened! {variables} </p>
       
      let { users: {nodes } } = data
      let {name, description, posts: { nodes: articles, pageInfo }}  = nodes[0]
     
    
      return (
        <>
        
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
              </Wrapper>

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

export default Author;



const AuthorQuery = gql`
query Author($cursor: String, $slug: String) {
    users(where: { nicename: $slug }) {
      nodes {
        id
        name
        description
        slug
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
  }
`

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

