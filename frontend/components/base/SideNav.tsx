import styled from 'styled-components'
import Link from 'next/link'

const SidePanel = styled.div`
  width: 25vw;
  min-height: calc(100vw - 32px);
  width: 25vw;
  height: 100vh;
  background: #3f1f69;
  position: fixed;
  padding: 0 10px;
  top: 67px; /* Stay at the top */
  z-index: 2;
  @media (max-width: 1024px) {
    width: 45vw;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`
const SidePanelWrapper = styled.nav`
  margin: 0 auto;
  width: 90%;
`
const NavSections = styled.ul`
  font-family: var(--span-font);
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 15px;
  border-bottom: 5px solid white;
  & li {
    padding-bottom: 10px;
    padding-top: 10px;
    list-style-type: none;
    font-size: 28px;
  }
  & a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
  }
`

const NavPages = styled.ul`
  font-weight: normal;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  li {
    list-style-type: none;
    font-family: var(--span-font);
    text-decoration: none;

    font-weight: 300;
    line-height: var(--line-height);
    font-size: var(--base-font-size);
  }
  a {
    text-decoration: none;
    color: white;
  }
`

const SideNav = () => (
  <SidePanel>
    <SidePanelWrapper>
      <NavSections>
        <Link href={{ pathname: '/section/[slug]', query: { slug: 'news' } }}>
          <a>
            <li>NEWS</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section/[slug]', query: { slug: 'opinion' } }}>
          <a>
            <li>OPINION</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section/[slug]', query: { slug: 'arts-and-living' } }}>
          <a>
            <li>ARTS AND LIVING</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section/[slug]', query: { slug: 'sports' } }}>
          <a>
            <li>SPORTS</li>
          </a>
        </Link>
      </NavSections>
      <NavPages>
        <Link href={{ pathname: '/about' }} as="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href={{ pathname: '/subscribe' }} as="/subscribe">
          <a>
            <li>Subscribe</li>
          </a>
        </Link>
        <Link href={{ pathname: '/advertising' }} as="/advertising">
          <a>
            <li>Advertising</li>
          </a>
        </Link>
        <Link href={{ pathname: '/contactus' }} as="/contactus">
          <a>
            <li>Contact Us</li>
          </a>
        </Link>
      </NavPages>
    </SidePanelWrapper>
  </SidePanel>
)

export default SideNav
