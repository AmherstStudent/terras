import styled from 'styled-components'

const SidePanel = styled.div`
  width: 25vw;
  min-height: calc(100vw - 32px);
  background: #3f1f69;
  z-index: 400;
  position: fixed;
`
const SidePanelWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`
const NavSections = styled.ul`
  font-family: Halyard Text;
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
    font-family: Halyard Text;
    font-style: italic;
    font-weight: 300;
    line-height: var(--line-height);
    font-size: var(--base-font-size);
  }
`

const SideNav = () => (
  <SidePanel>
    <SidePanelWrapper>
      <NavSections>
        <li>NEWS</li>
        <li>OPINION</li>
        <li>ARTS AND LIVING</li>
        <li>SPORTS</li>
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
