import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink for="about" onClick={toggle}
            to="about"
            smooth={true} duration={500}
            spy={true} exact='true' offset={-80}
            >About</SidebarLink>
            <SidebarLink for="discover" onClick={toggle}
            to="discover"
            smooth={true} duration={500}
            spy={true} exact='true' offset={-80}
            >Discover</SidebarLink>
            <SidebarLink for="services" onClick={toggle}
            to="services"
            smooth={true} duration={500}
            spy={true} exact='true' offset={-80}
            >Services</SidebarLink>
            <SidebarLink for="career" onClick={toggle}
            to="career"
            smooth={true} duration={500}
            spy={true} exact='true' offset={-80}
            >Career</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/">Join us</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar