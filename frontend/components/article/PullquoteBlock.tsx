import styled from 'styled-components'

interface QuoteContent {
  value: string
  citation: string
}

const QuoteWrapper = styled.figure`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding-top: 2em;
  padding-bottom: 4em;
`
const QuoteCitation = styled.span`
  font-family: Halyard Micro;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  text-align: center;

  color: rgba(0, 0, 0, 0.4);
`
const QuoteLine = styled.h6`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  text-align: center;
  color: #3f1f69;
  margin: 0;
`

const Pullquote = (attributes: QuoteContent) => (
  <QuoteWrapper>
    <QuoteLine dangerouslySetInnerHTML={{ __html: attributes.value }} />
    <QuoteCitation dangerouslySetInnerHTML={{ __html: attributes.citation }} />
  </QuoteWrapper>
)

export default Pullquote
