type Request = {query: string; variables: {[key: string]: unknown}}

interface GQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string;
  extensions?: {
    type?: string;
  };
}

// This will be getting used at some point but the point is to clearly dictate timing, and jazz.
interface GQLFetchDetails {
  errors?: GQLError[];
  request: Request;
  duration: number;
}

interface GQLResponseBody {
  data: unknown;
  errors?: GQLError[];
}

const newFetchAPI = async (request: Request) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')


  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(request),
  }).catch((e: Response) => {
    // handle unexpected errors
    report({ message: `${e.statusText || e.status}` }, { env: env(), element });
    return Promise.reject(e);
  });

  const body = await res.json();

  if (!body.data && !Array.isArray(body.errors)){
    const errors = [{message: res.statusText, extensions: { type: res.status.toString() }}] as GQLError[];
    
    return {
      data: null,
      errors,
    }
  } 


}

/**
 * Given a bit that's true if the response was a 200, and a parsed JSON
 * representation of the response body, either returns the GraphQL
 * response (from the "data" key) or throws an exception with the
 * GraphQL errors attached.
 */
 function handleGraphqlResponse<T>(
  ok: boolean,
  json: GraphqlJsonResponse<T>
): T {
  if (ok && !json.errors && json.data) {
    return json.data;
  } else {
    throw makeGraphQLError(json.message, json.errors);
  }
}
function makeGraphQLError(
  message: string | null | undefined,
  errors: GraphqlErrorRecord[] = []
): GraphqlError {
  if (!message) {
    message = `${errors.map(e => e.message).join(', ')}`;
  }

  const e = new Error(message) as GraphqlError;
  e.errors = errors;
  // We can use this as a signal to not send this error to an exception
  // reporting service, since the server would have already sent it.
  e.source = 'server';
  return e;
}

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
