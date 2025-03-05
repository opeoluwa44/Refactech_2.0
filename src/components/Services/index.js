import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>Digital Transformation</ServicesH2>
                <ServicesP>Transform your business with our expert digital solutions.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2}/>
                <ServicesH2>Our Expertise</ServicesH2>
                <ServicesP>Our team of experts offer a range of services designed to help you succeed.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3}/>
                <ServicesH2>Tailored Solutions</ServicesH2>
                <ServicesP>We offer tailored solutions designed to meet your specific needs and goals.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services