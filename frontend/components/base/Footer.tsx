import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #444;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
`

const FooterContent = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 14px;
  color: #595959;
  color: white;
  @media screen and (max-width: 1200px) {
    margin: 0 5%;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <span>(c) 2020 The Amherst Student. All Rights Reserved.</span>
    </FooterContent>
  </FooterWrapper>
)

export default Footer
