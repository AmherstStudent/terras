import styled from 'styled-components'
const QuoteBlockWrapper = styled.div`
  background-color: #3f1f69;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  & > * {
    padding: 70px 50px 30px 50px;
  }
`

const Quote = styled.h2`
  font-family: var(--header-font);
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
`

const Citation = styled.span`
  font-family: var(--header-font);
  color: rgba(255, 255, 255, 1);
  align-self: end;
`

// add corresponding story
const QuoteBlock = (attributes: { quote; source }) => (
  <QuoteBlockWrapper>
    <Quote>{attributes.quote}</Quote>
    <Citation> {attributes.source} </Citation>
  </QuoteBlockWrapper>
)

export default QuoteBlock
