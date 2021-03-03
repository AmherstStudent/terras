import styled from 'styled-components'

const FooterContent = styled.div`
  max-width: 1244px;
  color: white;
  margin: 0 auto;
`
const FootWrapper = styled.footer`
  padding-top: 2vh;
  background-color: #311a4d;
  padding-bottom: 2vh;
`

const InsidesGutts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px 0;
`
const BasicDescription = styled.div`
  max-width: 40%;
  font-size: 24px;
  font-family: Halyard-Text;
  font-weight: 200;
  padding-left: 24px;
`

const ListyStuff = styled.ul`
  column-count: 2;
  flex-grow: 1;
  margin: 0 0 36px;
  padding: 0;
  max-width: 40%;

  & li {
    list-style: none;
    margin-bottom: 5px;
    font-family: Halyard-Text;
    font-weight: 200;
    font-size: 18px;
    line-height: 1.5;
  }
  & li a {
    box-shadow: inset 0 -1px #df723d;
  }
`

const Footer = () => (
  <FootWrapper>
    <FooterContent>
      <InsidesGutts>
        <BasicDescription>
          <b>The Amherst Student</b> <br />
          Founded in 1868, the Student remains the source for all news Amherst.
        </BasicDescription>
        <ListyStuff>
          <li>
            <a>Donate</a>
          </li>
          <li>
            <a>Subscribe to our Newsletter</a>
          </li>
          <li>
            <a>Join The Team</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Advertising</a>
          </li>
          <li>
            <a>Podcasts</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </ListyStuff>
      </InsidesGutts>
    </FooterContent>
  </FootWrapper>
)

export default Footer
