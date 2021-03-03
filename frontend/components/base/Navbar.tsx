import { HamburgerArrow } from 'react-animated-burgers'
import styled from 'styled-components'
import { useState } from 'react'
import { FaTwitter, FaSearch, FaInstagram, FaFacebookF } from 'react-icons/fa'
import SideNav from './SideNav'
import Link from 'next/link'

const NavBarWrapper = styled.nav`
  height: 67px;
  padding: 16px 10px;
  width: 85vw;
  background: white;
  margin: 0 auto;
  display: flex;
  position: static;
  top: 0;
  z-index: 2;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e9e9e9;
  padding-left: 5vw;
  padding-right: 5vw;
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
  font-family: 'Halyard-Text';
  font-weight: 200;
  /* ARTS & LIVING */

  font-weight: 300;
  font-size: 1rem;
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
            <Link href="/section/news">
              <a>
                <li>NEWS</li>
              </a>
            </Link>
            <Link href="/section/opinion">
              <a>
                <li>OPINION</li>
              </a>
            </Link>
            <Link href="/section/arts-and-living">
              <a>
                <li>ARTS AND LIVING</li>
              </a>
            </Link>
            <Link href="/section/sports">
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
              <Link href={{ pathname: '/search' }}>
                <a>
                  <FaSearch />
                </a>
              </Link>
            </li>
          </Socials>
        </NavBarContent>
      </NavBarWrapper>
      {isActive ? <SideNav /> : ''}
    </>
  )
}

export default Navbar
