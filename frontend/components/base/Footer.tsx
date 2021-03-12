import styled from 'styled-components'
import Link from 'next/link'
const FooterContent = styled.div`
  max-width: 1244px;
  color: white;
  display: flex;
  flex-direction: row;
  font-family: 'Halyard-Text', sans-serif;
  margin: 0 auto;
  /* @media (max-width: 768px) { */
  @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 48px);
  }
  justify-content: space-around;
`
const FootWrapper = styled.footer`
  background-color: #311a4d;
  padding-bottom: 128px;
  margin-top: 24px;
  padding: 128px 24px;
`

const BasicDescription = styled.div`
  font-size: 24px;
  font-weight: 200;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    flex-basis: 400px;
  }
`

const ListyStuff = styled.nav`
  list-style-type: none;
  column-count: 2;
  @media (max-width: 600px) {
    column-count: 1;
    font-size: 28px;
  }
  & a {
    font-weight: 200;
    font-size: 18px;
    line-height: 1.7;
    box-shadow: inset 0 -1px #df723d;
    text-decoration: none;
    color: white;
  }
`

const footerLinks = [
  { link: '/masthead', title: 'About Us' },
  { link: '/podcasts', title: 'Podcasts' },
  { link: '/advertising', title: 'Advertising' },
  { link: '/contact-us', title: 'Contact Us' },
  { link: '/careers', title: 'Join The Team' },
  { link: '/privacy', title: 'Privacy' },
  { link: '/subscribe', title: 'Subscribe' },
]

const Footer = () => (
  <FootWrapper>
    <FooterContent>
      <BasicDescription>
        <b>The Amherst Student</b> <br />
        Founded in 1868, the Student remains the source for all news Amherst.
      </BasicDescription>
      <ListyStuff>
        {footerLinks.map(linkCombo => (
          <li>
            <Link href={linkCombo.link} passHref>
              <a>{linkCombo.title}</a>
            </Link>
          </li>
        ))}
      </ListyStuff>

      {/* <ListyStuff>
        <li>
          <Link href="/donate" passHref>
            <a>Donate</a>
          </Link>
        </li>
        <li>
          <Link href="/subscribe" passHref>
            <a>Subscribe to our Newsletter</a>
          </Link>
        </li>
        <li>
          <Link href="/careers" passHref>
            <a>Join The Team</a>
          </Link>
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
      </ListyStuff> */}
    </FooterContent>
  </FootWrapper>
)

export default Footer
