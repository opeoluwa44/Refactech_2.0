import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 80px 30px;
    height:800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, 
        transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-bottom:0;

    @media screen and (max-width:760px) {
        font-size: 40px;
    }
    
    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    font-size: 24px;
    color: #fff;
    margin-top: 16px;
    text-align: center;
    max-width: 600px;

     @media screen and (max-width:760px) {
        font-size: 24px;
    }
    
    @media screen and (max-width:480px) {
        font-size: 18px;
    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px; 
`
export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index:1;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-image: linear-gradient(
        270deg,
        rgba(255,255,255,0)48%,
        rgba(255,255,255,0.7)75%,
        rgba(255,255,255,0)100%
        );
        background-repeat: no-repeat;
        transform: skew(-15deg);
        animation: bg-move 4s linear infinite;
        z-index: -1;
    }
    
    @keyframes bg-move {
        0% {
            background-position: -500px 0; 
        }
        100% {
            background-position: 1000px 0;
        }
    }
        

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#01bf71')}
    }
`