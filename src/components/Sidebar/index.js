import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink for="about">About</SidebarLink>
            <SidebarLink for="services">Services</SidebarLink>
            <SidebarLink for="Career">Career</SidebarLink>
            <SidebarLink for="Technology">Technology</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/">Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar