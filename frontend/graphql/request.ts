export function gql(chunks: TemplateStringsArray, ...variables: any[]): string {
  return chunks.reduce((accumulator, chunk, index) => `${accumulator}${chunk}${index in variables ? variables[index] : ''}`, '')
}

type ErrorType = {
  code: string
  message: string
}

const API_URL = 'https://admin.amherststudent.com/graphql'

export const fetchAPI = async (query: string, variables = {}) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  //   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //     headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`)
  //   }
  // console.log(query)
  // add a way to debug when dev mode

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()
  //   console.log(res)

  if (json.errors) {
    // depending on the type.
    throw new Error('Failed to fetch API')
  }
  //   (return json.data, and errors as array)

  return json.data
}
