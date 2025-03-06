import styled from "styled-components";
import { Link } from "react-scroll";

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