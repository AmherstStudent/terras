// import Embed from './Embed'
import Gallery from './Gallery'
import Heading from './Heading'
import Image from './Image'
import List from './List'
import Paragraph from './Paragraph'
import Quote from './Quote'
import React from 'react'
import HeroImage from '../homepage/HeroImage'
import SmallArticleBlock from '../homepage/SmallArticleBlock'
import LargeArticleBlock from '../homepage/LargeArticleBlock'
import QuoteBlock from '../homepage/QuoteBlock'
import Postlist from '../homepage/Postlist'

// import SpotifyEmbed from './SpotifyEmbed'
// import Quote from './Quote'

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
  // 'core/pullquote': Pullquote,
  // TODO: 'core-embed/spotify': SpotifyEmbed,
  // TODO: Recursively do columns
}

const HomepageBlocks = {}

interface BaseBlock {
  __typename: string
  attributes: object
}

export const NewBlock = (block: BaseBlock) => {
  let Component = Blocks[block.__typename]
  if (Component == null || undefined) {
    return <p>Couldn't find anything</p>
  }

  return <Component {...block.attributes} />
}
