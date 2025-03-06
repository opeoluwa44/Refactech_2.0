import React, {useState} from 'react'
// import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import { 
    HeroContainer, 
    HeroBg, 
    HeroP, 
    HeroContent, 
    HeroH1, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    VideoBg,
    Button
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover =()=> {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>We Help Companies <br/> and Businesses <br/> Operate, Build <br/>and Deploy</HeroH1>
            <HeroP>their Softwares, Products and Services</HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection