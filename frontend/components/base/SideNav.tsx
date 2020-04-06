import styled from 'styled-components'
import Link from 'next/link'

const SidePanel = styled.div`
  width: 25vw;
  min-height: calc(100vw - 32px);
  min-width: 250px;
  height: 100vh;
  background: #3f1f69;
  z-index: 400;
  position: fixed;
  padding: 0 10px;
`
const SidePanelWrapper = styled.div`
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
  li {
    padding-bottom: 10px;
    padding-top: 10px;
    list-style-type: none;
    font-size: 28px;
  }
  a {
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
    font-weight: 300;
    line-height: var(--line-height);
    font-size: var(--base-font-size);
  }
`

const SideNav = () => (
  <SidePanel>
    <SidePanelWrapper>
      <NavSections>
        <Link href={{ pathname: '/section', query: { slug: 'news' } }} as="/section/news">
          <a>
            <li>NEWS</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section', query: { slug: 'opinion' } }} as="/section/opinion">
          <a>
            <li>OPINION</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section', query: { slug: 'arts-and-living' } }} as="/section/arts-and-living">
          <a>
            <li>ARTS AND LIVING</li>
          </a>
        </Link>
        <Link href={{ pathname: '/section', query: { slug: 'sports' } }} as="/section/sports">
          <a>
            <li>SPORTS</li>
          </a>
        </Link>
      </NavSections>
      <NavPages>
        <li>About</li>
        <li>Subscribe</li>
        <li>Advertisers</li>
        <li>Contact</li>
      </NavPages>
    </SidePanelWrapper>
  </SidePanel>
)

export default SideNav
