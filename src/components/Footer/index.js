import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle,
    FooterLink,
    FooterLogoBox,
    FooterLogo,
    FooterLogoContainer,
    FooterLogoWrap,
    WebsiteRights,
    Address,
    MailAddress,
    Phone
} from './FooterElements'

const Footer = () => {
    const toggleHome =()=> {
            scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to="/signin">Contact</FooterLink>
                        <FooterLink to="/signin">Support</FooterLink>
                        <FooterLink to="/signin">Destinations</FooterLink>
                        <FooterLink to="/signin">Sponsorships</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin">Submit Video</FooterLink>
                        <FooterLink to="/signin">Ambassadors</FooterLink>
                        <FooterLink to="/signin">Agency</FooterLink>
                        <FooterLink to="/signin">Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Socials</FooterLinkTitle>
                        <FooterLink href='/' target='_blank'>Facebook</FooterLink>
                        <FooterLink href='/' target='_blank'>Twitter</FooterLink>
                        <FooterLink href='/' target='_blank'>LinkedIn</FooterLink>
                        <FooterLink href='/' target='_blank'>Telegram</FooterLink>
                        <FooterLink href='/' target='_blank'>Youtube</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterLogoContainer>
                <FooterLogoWrap>
                    <FooterLogoBox>
                        <FooterLogo to='/' onClick={toggleHome}>RefacTech</FooterLogo>
                        <WebsiteRights>RefacTech©{new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </FooterLogoBox>
                    <FooterLogoBox>
                        <Address>53, St. Finbarrs Road, Akoka, Lagos</Address>
                        <MailAddress>Email us: enquiry@refactech.io</MailAddress>
                        <Phone>Call us: +234-808-173-3641</Phone>
                    </FooterLogoBox>
                </FooterLogoWrap>
            </FooterLogoContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer