import styled from 'styled-components'
import Link from 'next/link'

const SidePanel = styled.div`
  font-family: 'Halyard-Text', sans-serif;
  width: 25vw;
  height: 100vh;
  background: #3f1f69;
  position: fixed;
  padding: 0 10px;
  z-index: 2;
  @media (max-width: 1024px) {
    width: 45vw;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
  transition: 0.5s;
  padding: 20px; /* 0.5 second transition effect to slide in the sidenav */
`
const NavSections = styled.ul`
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

const NavPages = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-weight: 200;
    font-size: 18px;
    line-height: 1.7;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
  }
`

const SideNav = () => (
  <SidePanel>
    <NavSections>
      <Link href={{ pathname: '/section/news' }}>
        <a>
          <li>NEWS</li>
        </a>
      </Link>
      <Link href={{ pathname: '/section/opinion' }}>
        <a>
          <li>OPINION</li>
        </a>
      </Link>
      <Link href={{ pathname: '/section/arts-and-living' }}>
        <a>
          <li>ARTS AND LIVING</li>
        </a>
      </Link>
      <Link href={{ pathname: '/section/sports' }}>
        <a>
          <li>SPORTS</li>
        </a>
      </Link>
    </NavSections>
    <NavPages>
      <Link href={{ pathname: '/about' }} as="/about">
        <a>About</a>
      </Link>
      <Link href={{ pathname: '/subscribe' }} as="/subscribe">
        <a>Subscribe</a>
      </Link>
      <Link href={{ pathname: '/advertising' }} as="/advertising">
        <a>Advertising</a>
      </Link>
      <Link href={{ pathname: '/contactus' }} as="/contactus">
        <a>Contact Us</a>
      </Link>
    </NavPages>
  </SidePanel>
)

export default SideNav
