import about from '../../images/aboutUs.svg'
import discover from '../../images/discover.svg'
import career from '../../images/career.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About us',
    headline:'We Transform Ideas into Digital Reality',
    description: 'we help businesses bring their ideas to life Online. With expert consultation and tailored solutions, we navigate the digital landscape together, driving seamless, scalable, and impactful online experiences.',
    buttonLabel: 'Learn more',
    imgStart: false,
    img: about,
    alt: 'about team',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Discover',
    headline:'Unlock your Digital Potential',
    description: 'Bring your ideas to life Online, stay ahead of the competition with innovative solutions, transform your digital presence and drive real results.',
    buttonLabel: 'Explore',
    imgStart: true,
    img: discover,
    alt: 'discover team',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjFour = {
    id: 'career',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Career',
    headline:'Join Our Team of Innovators',
    description: 'We are passionate about building a team of talented and driven individuals who share our vision for digital excellence. if you are looking for a challenging and rewarding career, we would love to hear from you.',
    buttonLabel: 'Apply',
    imgStart: true,
    img: career,
    alt: 'career',
    dark: false,
    primary: false,
    darkText: true
}