import styled from 'styled-components'

interface QuoteContent {
  value: string
  citation: string
}

const QuoteWrapper = styled.blockquote`
  border-left: 3px solid #3f1f69;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`
const QuoteCitation = styled.span`
  font-family: Halyard Text;
  font-style: italic;
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
`

const Pullquote = (attributes: QuoteContent) => (
  <figure>
    <QuoteLine dangerouslySetInnerHTML={{ __html: attributes.value }} />
    <QuoteCitation dangerouslySetInnerHTML={{ __html: attributes.citation }} />
  </figure>
)

export default Pullquote
