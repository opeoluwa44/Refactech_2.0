import React, {useState} from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    HeroP, 
    HeroContent, 
    HeroH1, 
    HeroBtnWrapper, 
    Button, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover =()=> {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>

        </HeroBg>
        <HeroContent>
            <HeroH1>Where innovation meets Tech</HeroH1>
            <HeroP>Sign up for a new account today</HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection