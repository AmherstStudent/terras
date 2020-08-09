import { AuthorInterface } from './article/AuthorBio'
import styled from 'styled-components'
import { formatDate } from './util'
import Link from 'next/link'
import React from 'react'
// TODO: Register article issue

interface IssueList {
  nodes: Issue[]
}

type Issue = {
  id?: string
  name: string
  slug?: string
}

type PostBlock = {
  id: string
  slug: string
  title: String
  excerpt: String
  coAuthors: AuthorInterface[]
  featuredImage: any
  date: string
  issues: IssueList
  seriesN: any
}

const Wrapper = styled.article`
  padding: 10px 0;
`

const PostTitle = styled.h2`
  font-size: 28px;
  font-family: 'Cormorant';
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 10px 0;
`
const Byline = styled.span`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
`
const Excerpt = styled.div`
  font-family: var(--span-font);
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  color: #000000;
  line-height: 23px;
  margin: 0;
  flex: 75%;
  margin-top: 1em;
  margin-bottom: 1em;
`
const LinkText = styled.a`
  font-weight: 500;
  color: #595959;
  text-decoration: none;
`

const BioWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Authors = ({ authors }) => {
  return (
    <Byline>
      {authors
        .map(author => (
          <Byline itemprop="author" itemscope itemtype="http://schema.org/Person" key={author.slug}>
            <Link key={author.slug} href={{ pathname: '/author', query: { id: author.slug } }} as={'/author/' + author.slug} passHref>
              <LinkText itemprop="url">{author.display_name + ','}</LinkText>
            </Link>{' '}
            {author.reporter_title}
          </Byline>
        ))
        .reduce((prev, curr) => [prev, ' and ', curr])}
    </Byline>
  )
}

const MiniImage = styled.img`
  width: 200px;
  flex: 25%;
  @media (max-width: 700px) {
    width: 100%;
  }
`
const IssueLink = (issue: Issue) => (
  <Link href={{ pathname: '/issue', query: { slug: issue.slug } }} as={'/issue/' + issue.slug} passHref>
    <LinkText>{issue.name}</LinkText>
  </Link>
)
const StyleLink = styled.a`
  text-decoration: none;
`
const htmlDecode = (html: String) => {
  const regex = /(<([^>]+)>)/gi
  const result = html.replace(regex, '').replace('[&hellip;]', '[...]')
  return result.replace('&nbsp;', '')
}
/// If less than have the next line
const PostBlock = (post: PostBlock) => {
  let issue: Issue = post?.issues?.nodes[0]
  let series = post?.seriesN?.nodes[0]
  let authors: AuthorInterface[] = post.coAuthors
  return (
    <React.Fragment key={post.id}>
      <Wrapper>
        <Link href={{ pathname: '/article', query: { slug: post.slug } }} as={'/article/' + post.slug} passHref>
          <StyleLink>
            <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
          </StyleLink>
        </Link>
        <div>
          by <Authors authors={authors} />
        </div>
        <Byline>
          {formatDate(post.date)} || Issue <IssueLink {...issue} />
        </Byline>
        <BioWrapper>
          <Excerpt> {htmlDecode(post.excerpt)}</Excerpt>
          {post.featuredImage ? <MiniImage src={post.featuredImage.sourceUrl} /> : ''}
        </BioWrapper>
      </Wrapper>
      <hr />
    </React.Fragment>
  )
}

interface PostListProps {
  articles: Array<PostBlock>
  getMore: Function
  pageInfo?: PageInfo
}
interface PageInfo {
  hasNextPage: Boolean
  cursor: string
}

export const PostList = ({ articles, getMore, pageInfo }: PostListProps) => {
  return (
    <>
      {articles.map(article => (
        <PostBlock key={article.id} {...article} />
      ))}
      {pageInfo.hasNextPage && <NextButton onClick={getMore}>Next Articles</NextButton>}
    </>
  )
}

const NextButton = styled.button`
  background: black;
  height: 20px;
  text-align: right;
  font-size: 14px;
  color: white;
  font-family: var(--span-font);
`

interface PaginationProps {
  pageInfo: PageInfo
  entries: Array<PostBlock>
  cursor: number
  getMore: Function
}
