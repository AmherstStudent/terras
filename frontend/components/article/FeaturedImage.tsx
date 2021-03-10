import styled from 'styled-components'

// Add Fragment
interface FeaturedImageInterface {
  src: string
  caption?: string
  alt?: string
  srcSet: string
  sizes: string
}
const FeaturedBaseImage = styled.img`
  border-bottom: 10px solid #3f1f69;
  max-height: 700px;
  object-fit: cover;
  width: 100%;
`

const FeaturedFigure = styled.figure`
  grid-column: 1 / 4 !important;
  color: #595959;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-family: 'Halyard-Text', sans-serif;
`

const FeaturedImage = (attributes: FeaturedImageInterface) => (
  <FeaturedFigure>
    <FeaturedBaseImage srcSet={attributes.srcSet} alt={attributes.alt} />
    <div dangerouslySetInnerHTML={{ __html: attributes.caption }} />
  </FeaturedFigure>
)


export default FeaturedImage
