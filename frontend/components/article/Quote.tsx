import styled from 'styled-components'

interface QuoteContent {
  quote: string
  source: string
  align?: string
  dropCap?: Boolean
}

const QuoteWrapper = styled.blockquote`
  border-left: 3px solid #3f1f69;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`
const QuoteCitation = styled.span`
  font-family: var(--header-font);
  font-style: italic;
`
const QuoteLine = styled.h6`
  font-family: var(--span-font);
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 172.1%;
  color: #595959;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 95%;
`

const Quote: React.FunctionComponent<QuoteContent> = (attributes: QuoteContent) => (
  <QuoteWrapper>
    <QuoteLine>{attributes.quote.replace(/<[^>]*>?/gm, '')}</QuoteLine>
    <QuoteCitation>{attributes.source}</QuoteCitation>
  </QuoteWrapper>
)

export default Quote
