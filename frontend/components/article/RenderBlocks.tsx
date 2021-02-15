// import Embed from './Embed'
import Gallery from './Gallery'
import Heading from './Heading'
import Image from './Image'
import List from './List'
import Paragraph from './Paragraph'
import Quote from './Quote'
import Pullquote from './PullquoteBlock'

import React from 'react'
import HeroImage from '../homepage/HeroImage'
import SmallArticleBlock from '../homepage/SmallArticleBlock'
import LargeArticleBlock from '../homepage/LargeArticleBlock'
import QuoteBlock from '../homepage/QuoteBlock'
import Postlist from '../homepage/Postlist'
import HTMLBlock from './HTMLBlock'
import styled from 'styled-components'

const MainRightSection = styled.div`
  grid-column: span 8;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`
const SideLeftSection = styled.div`
  grid-column: span 4;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`

const ThirdsSection = styled.div`
  grid-column: span 4;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`
// import SpotifyEmbed from './SpotifyEmbed'
// import Quote from './Quote'
// export const query = graphql`
//   fragment Blocks on WP_Block {
//     ...CoreParagraphBlock
//     ...CoreHeadingBlock
//     ...UnknownBlock
//   }
// `;

const Blocks = {
  // 'core/embed': Embed,
  // 'core/gallery': Gallery,
  CoreHeadingBlock: Heading,
  CoreImageBlock: Image,
  CoreListBlock: List,
  CoreParagraphBlock: Paragraph,
  CoreQuoteBlock: Quote,
  HomeHeroImageBlock: HeroImage,
  HomeSmallArticleBlock: SmallArticleBlock,
  HomeLargeArticleBlock: LargeArticleBlock,
  HomeHomepageQuoteBlock: QuoteBlock,
  HomeFeaturedPostlistBlock: Postlist,
  CoreHtmlBlock: HTMLBlock,
  CorePullquoteBlock: Pullquote,
  // TODO: 'core-embed/spotify': SpotifyEmbed,
  // TODO: Recursively do columns
  // TODO: Add Group Columns
}

const HomepageBlocks = {}

interface BaseBlock {
  __typename: string
  attributes: object
}

export const NewBlock = (block: BaseBlock) => {
  let Component = Blocks[block.__typename]
  if (Component == null || undefined) {
    console.log(block.__typename)
    console.log(block.attributes)
    return <p>Couldn't find anything</p>
  }

  return <Component {...block.attributes} />
}
