import styled from 'styled-components'
import { NewBlock } from '../article/RenderBlocks'

const MainRightSection = styled.div`
  grid-column: span 8;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`
const SideLeftSection = styled.div`
  grid-column: span 4;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`

const ThirdsSection = styled.div`
  grid-column: span 4;
  @media (max-width: 968px) {
    grid-column: 1/ -1;
  }
`

// So what we want to do is .map over each ColumnsComponent
// if core/columns.innerBlocks = 3 -
// return <ThirdsSection> <p> </ThirdSection>
// if 2

/// ADDD ERROR MESSAGE!

const InnerColumn = ({ size, block }) => {
  switch (size) {
    case 66.66:
      return (
        <MainRightSection>
          <NewBlock {...block} />
        </MainRightSection>
      )
      break
    case 33.33:
      return (
        <SideLeftSection>
          <NewBlock {...block} />
        </SideLeftSection>
      )
      break
    default:
      return (
        <ThirdsSection>
          <NewBlock {...block} />
        </ThirdsSection>
      )
  }
}
const Row = ({ column }) => {
  return column?.innerBlocks.map((row, i) => {
    return <InnerColumn key={i} size={row.attributes.width} block={row.innerBlocks && row.innerBlocks[0]} />
  })
}

const Columns = ({ columns }) => {
  if (columns?.length > 1) {
    return columns?.map((col, i) => {
      return <Row key={i} column={col} />
    })
  } else {
    return null
  }
}

export default Columns
