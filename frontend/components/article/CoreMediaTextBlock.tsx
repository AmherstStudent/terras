import styled from 'styled-components'

const FullBleedImage = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  position: relative;
  min-height: 65vh;
  margin: 0 auto;
  background-size: cover;
  background-position: 50% 50%;

  background-image: url(${props => props.url});
`

const FullBleedImageContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FullBleedQuote = styled.p`
  line-height: 2em;
  width: 75%;
`

const FullBleedHighlight = styled.h2`
  font-size: 4em;
`
const CoreMediaText = block => {
  console.log(block)
  let innerBlock = block.innerBlocks[0]
  console.log(innerBlock.attributes)
  return (
    <>
      <FullBleedImage url={block.attributes.mediaUrl}>
        <FullBleedImageContent>
          <FullBleedQuote dangerouslySetInnerHTML={{ __html: innerBlock?.attributes?.value }}></FullBleedQuote>
          <FullBleedHighlight dangerouslySetInnerHTML={{ __html: innerBlock?.attributes?.content }}></FullBleedHighlight>
        </FullBleedImageContent>
      </FullBleedImage>
    </>
  )
}

export default CoreMediaText
