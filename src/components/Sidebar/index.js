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
            <SidebarLink for="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink for="discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink for="services" onClick={toggle}>Services</SidebarLink>
            <SidebarLink for="career" onClick={toggle}>Career</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/">Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar