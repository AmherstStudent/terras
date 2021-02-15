import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 0 auto;
  background: #311a4d;
  bottom: 0;
  width: 100vw;
`

const FooterContent = styled.div`
  max-width: 85%;
  padding: 0.25em 1em;
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 14px;
  color: #595959;
  color: white;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1200px) {
    margin: 0 5%;
  }
  width: 85%;
  display: flex;
`

const NewsyLinks = styled.ul`
  text-decoration: none;
  color: #000000;
  padding-left: 1em;
  flex-grow: 1;
  display: flex;
  align-items: center;
  li {
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
  li a {
    color: white !important;
  }
  font-family: 'Halyard-Text';
  font-weight: 200;
  /* ARTS & LIVING */

  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
  @media (max-width: 768px) {
    display: none;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <span>(c) 2020 The Amherst Student. All Rights Reserved.</span>
      {/* <NewsyLinks>
        <li>Contact us</li>
        <li>About</li>
        <li>Staff</li>
      </NewsyLinks> */}
    </FooterContent>
  </FooterWrapper>
)

export default Footer
