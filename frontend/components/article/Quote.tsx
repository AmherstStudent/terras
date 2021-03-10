import styled from 'styled-components'

interface QuoteContent {
  quote: string
  source: string
  align?: string
  dropCap?: boolean
}

const QuoteWrapper = styled.blockquote`
  border-left: 3px solid #3f1f69;
  padding-bottom: 20px !important;
  padding-left: 2em !important;
  margin: 0 auto;
`
const QuoteCitation = styled.span`
  font-family: Baskerville;
  color: #595959;
`
const QuoteLine = styled.h6`
  font-family: Baskerville;
  font-weight: 300;
  font-size: 1.25em;
  line-height: 1.7em;
  color: #595959;
  margin-block-start: 0;
  margin-block-end: 0;
  width: 95%;
`

const Quote: React.FunctionComponent<QuoteContent> = (attributes: QuoteContent) => (
  <QuoteWrapper>
    <QuoteLine dangerouslySetInnerHTML={{ __html: attributes.quote }} />
    <QuoteCitation dangerouslySetInnerHTML={{ __html: attributes.source }} />
  </QuoteWrapper>
)

export default Quote
