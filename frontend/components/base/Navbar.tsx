import { HamburgerArrow } from 'react-animated-burgers'
import styled from 'styled-components'
import { useState } from 'react'
import { FaTwitter, FaSearch, FaInstagram, FaFacebookF } from 'react-icons/fa'
import SideNav from './SideNav'
import Link from 'next/link'

const Socials = styled.ul`
  text-decoration: none;
  color: #000000;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3;
  li {
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
  li a {
    color: black;
  }
`

const NavWrap = styled.div`
  width: 100%;
`
const Nav = styled.nav`
  /* width: min(calc(100% - 48px), 1280px); */
  max-width: 1316px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 12px 0;
  & a {
    transition: 0.3s all ease-in-out;
  }
  border-bottom: 1px solid #e9e9e9;
`
const LeftMenu = styled.div`
  grid-column: 1;
  font-family: 'Halyard-Text';
  font-weight: 200;
  /* ARTS & LIVING */
  font-weight: 300;
  line-height: 20px;
  /* or 62% */
  text-transform: uppercase;
  & a {
    text-decoration: none;
    color: black;
    margin-left: 15px;
    font-size: 16px;
  }
  & a:hover {
    border-bottom: 4px solid rgba(63, 31, 105, 0.8);
  }
  @media screen and (max-width: 992px) {
    & a {
      display: none;
    }
  }
  align-self: center;
`

const LogoImage = styled.img`
  grid-column: 2;
  max-height: 21px;
  align-self: center;
`
function Navbar() {
  const [isActive, setIsActive] = useState(false)
  function handleClick() {
    setIsActive(!isActive)
  }
  return (
    <>
      <NavWrap>
        <Nav>
          <LeftMenu>
            <HamburgerArrow buttonWidth={21} isActive={isActive} toggleButton={handleClick} />
            <Link href="/section/news">
              <a>News</a>
            </Link>
            <Link href="/section/arts-and-living">
              <a href="#">Arts and Living</a>
            </Link>
            <Link href="/section/news">
              <a href="#">Sports</a>
            </Link>
            <Link href="/section/opinion">
              <a href="#">Opinion</a>
            </Link>
          </LeftMenu>
          <LogoImage src="/logo.svg" alt="the Amherst Student" />
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
        </Nav>
      </NavWrap>
      {isActive ? <SideNav /> : ''}
      {/* I want to push the page down actually */}
    </>
  )
}

export default Navbar
