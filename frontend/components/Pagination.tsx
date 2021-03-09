import { AuthorInterface } from './article/AuthorBio'
import styled from 'styled-components'
import { formatDate, TimeDate } from './util'
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
  padding: 1.25em 0;
  border-bottom: 0.8px solid #a39b9b;
`

const PostTitle = styled.h2`
  font-size: 1.75em;
  font-family: 'Cormorant';
  font-weight: bold;
  line-height: 1.25em;
  color: #000000;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 10px 0;
`
const Byline = styled.span`
  font-weight: 300;
  line-height: 150%;
  color: #595959;
  text-decoration: none;
`
const Excerpt = styled.div`
  font-family: var(--span-font);
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5em;
  color: #000000;
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
            <Link key={author.slug} href={{ pathname: `/article/${author.slug}` }} passHref>
              <LinkText itemprop="url" rel="author">{author.display_name + ', '}</LinkText>
            </Link>{' '}
            {author.reporter_title}
          </Byline>
        ))
        .reduce((prev, curr) => [prev, ' and ', curr])}
    </Byline>
  )
}

const NextButton = styled.button`
  height: 20px;
  margin: 2em 0;
  text-align: center;
  font-size: 2em;
  margin: 0 auto;
  color: purple;
  font-family: var(--span-font);
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  width: 100%;
`
const MiniImage = styled.img`
  width: 200px;
  flex: 25%;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const StyleLink = styled.a`
  text-decoration: none;
`

/// If less than have the next line
const PostBlock = (post: PostBlock) => {
  let issue: Issue = post?.issues?.nodes[0]
  let series = post?.seriesN?.nodes[0]
  let authors: AuthorInterface[] = post.coAuthors
  return (
    <Wrapper key={post.id}>
      <Link href={{ pathname: `/article/${post.slug}` }} passHref>
        <StyleLink>
          <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
        </StyleLink>
      </Link>
      <div>
        <Authors authors={authors} />
      </div>
      <Byline>
        <TimeDate unformattedDate={post.date} /> || Issue
      </Byline>
      <BioWrapper>
        <Excerpt> {post.excerpt}</Excerpt>
        {post.featuredImage ? <MiniImage src={post.featuredImage.sourceUrl} /> : ''}
      </BioWrapper>
    </Wrapper>
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
      {pageInfo.hasNextPage && <NextButton onClick={getMore}>See More</NextButton>}
    </>
  )
}
