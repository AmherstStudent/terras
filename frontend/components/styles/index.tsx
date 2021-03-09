import styled from 'styled-components'

const Theme = {
  breakPoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  colors: {
    amherstPurple: '#3f1f69',
  },
}

export const Category = styled.span`
  font-family: 'Halyard-Text';
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #3f1f69;
  margin: 12px 0;
`
