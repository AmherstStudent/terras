import { HamburgerArrow } from 'react-animated-burgers'
import styled from 'styled-components'
import { useState } from 'react'
import { FaTwitter, FaSearch, FaInstagram, FaFacebookF } from 'react-icons/fa'
import SideNav from './SideNav'

const NavBarWrapper = styled.nav`
  height: 32px;
  padding: 16px 10px;
  background: white;
  margin: 0 auto;
  display: flex;
`

const NavBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 100%; /* Let it fill the entire space horizontally */
`
const Logo = styled.img`
  max-height: 18px;
  align-items: flex-start;
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
          <HamburgerArrow buttonWidth={24} isActive={isActive} toggleButton={handleClick} />
          <Logo src="/logo.svg" alt="the Amherst Student" />
          <Socials>
            <li>
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a>
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
