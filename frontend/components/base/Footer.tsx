import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #444;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
`

const FooterContent = styled.div`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #595959;
  max-width: 1100px;
  margin: 0 auto;
  color: white;
`

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <span>(c) 2020 The Amherst Student. All Rights Reserved.</span>
    </FooterContent>
  </FooterWrapper>
)

export default Footer
