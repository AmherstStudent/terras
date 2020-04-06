import styled from 'styled-components'

const CategoryWrapper = styled.header`
  background-image: url('https://assets.forwardcdn.com/images/cropped/amherst-college-buildings-img-6512-1500990972.JPG');
  height: 400px;
  width: 100%;
  grid-column: span 12;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-top: 20px;
`

const Box = styled.div`
  top: 15px;
  left: 10px;
  position: absolute;
  /* Rectangle 35 */
  margin: 0 auto;
  
  padding: 0;
  text-align: center;
  width: 177px;
  padding: 10px 0;
  background: #3F1F69;
  font-family: Halyard Text;
  text-transform: uppercase;
  color: white;
`

const CategoryHead = ({ category }) => (
  <CategoryWrapper>
    <Box>{category}</Box>
  </CategoryWrapper>
)

export default CategoryHead
