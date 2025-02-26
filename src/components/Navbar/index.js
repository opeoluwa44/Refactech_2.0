import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">RefacTech</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="technology">Technology</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sign-up">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar