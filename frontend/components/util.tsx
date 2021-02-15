import Link from 'next/link'
import styled from 'styled-components'

export const formatDate = (date: string) => {
  let updatedDate = new Date(date)
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  let formattedDate = updatedDate.toLocaleDateString('en-US', options)
  return formattedDate
}

export const TimeDate = ({ unformattedDate }) => {
  let updatedDate = new Date(unformattedDate)
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  let formattedDate = updatedDate.toLocaleDateString('en-US', options)
  return <time dateTime={unformattedDate}>{formattedDate}</time>
}

const AuthorName = styled.a`
  font-family: var(--span-font);
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
  text-transform: capitalize;
`

const AuthorNameLink = author => {
  return (
    <Link key={author.id} href={{ pathname: '/author', query: { id: author.id } }} as={'/author/' + author.id} passHref>
      <AuthorName>
        {author.display_name}
        {',  '}
      </AuthorName>
    </Link>
  )
}

export const AuthorNames = ({ authors }) =>
  authors?.map(author => {
    return <AuthorNameLink {...author} />
  })

// const paginatedFetch = async (contentType, allContentNodes) => {
//   fetch
//   if .limit
//   const response
//   const {data} = response
//   if (!data?.(contentType)?.nodes)

//   if (nodes && nodes.length) {
//     nodes.forEach(node => {
//       node = normalizeNode({ node, nodeTypeName })
//       allContentNodes.push(node)
//     })

//     // MediaItem type is incremented in createMediaItemNode
//     if (nodeTypeName !== `MediaItem`) {
//       store.dispatch.logger.incrementActivityTimer({
//         typeName: nodeTypeName,
//         by: nodes.length,
//       })
//     }
//   }

//   if (
//     hasNextPage &&
//     endCursor &&
//     (!settings.limit || settings.limit > allContentNodes.length)
//   ) {
//     return paginatedWpNodeFetch({
//       ...variables,
//       contentTypePlural,
//       nodeTypeName,
//       query,
//       allContentNodes,
//       helpers,
//       settings,
//       after: endCursor,
//       headers,
//     })
//   } else {
//     return allContentNodes
//   }
// }
