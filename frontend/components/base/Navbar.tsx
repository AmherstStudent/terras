import { HamburgerArrow } from 'react-animated-burgers'
import styled from 'styled-components'
import { useState } from 'react'
import { FaTwitter, FaSearch, FaInstagram, FaFacebookF } from 'react-icons/fa'
import SideNav from './SideNav'
import Link from 'next/link'

const NavBarWrapper = styled.nav`
  height: 67px;
  padding: 16px 10px;
  width: 100vw;
  background: white;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 2;
  margin-bottom: 2em;
`

const NavBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 100%;
`
const Logo = styled.img`
  max-height: 20px;
  align-items: flex-start;
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
    color: black;
  }
  font-family: 'Halyard Text';
  font-weight: 200;
  /* ARTS & LIVING */

  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* or 62% */
  display: flex;
  align-items: center;
  color: #000000;
  @media (max-width: 768px) {
    display: none;
  }

  & a {
    text-decoration: none;
    color: #000000;
  }
`

const Socials = styled.ul`
  text-decoration: none;
  color: #000000;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
  li a {
    color: black;
  }
`

function Navbar() {
  let [isActive, setIsActive] = useState(false)
  function handleClick() {
    setIsActive(!isActive)
  }
  return (
    <>
      <NavBarWrapper>
        <NavBarContent>
          <HamburgerArrow buttonWidth={23} isActive={isActive} toggleButton={handleClick} />
          <a href="https://amherststudent.com">
            <Logo src="/logo.svg" alt="the Amherst Student" />
          </a>
          <NewsyLinks>
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
          </NewsyLinks>
          <Socials>
            <li>
              <a href="https://www.facebook.com/AmherstStudent/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/amherststudent/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AmherstStudent">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaSearch />
              </a>
            </li>
          </Socials>
        </NavBarContent>
      </NavBarWrapper>
      {isActive ? <SideNav /> : ''}
    </>
  )
}

export default Navbar
