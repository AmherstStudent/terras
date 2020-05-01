import styled from 'styled-components'

// Add Fragment
interface FeaturedImageInterface {
  src: string
  caption?: string
  alt?: string
  srcSet: string
  sizes: string
}
const FeaturedImage = styled.img<FeaturedImageInterface>`
  width: 100%;
  border-bottom: 10px solid #3f1f69;
  max-height: 600px;
  object-fit: cover;
`
export default FeaturedImage
