import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src=''/>
                <ServicesH2>Digital Transformation</ServicesH2>
                <ServicesP>Transform your business with our expert digital solutions.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src=''/>
                <ServicesH2>Our Expertise</ServicesH2>
                <ServicesP>Our team of experts offer a range of services designed to help you succeed.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src=''/>
                <ServicesH2>Tailored Solutions</ServicesH2>
                <ServicesP>We offer tailored solutions designed to meet your specific needs and goals.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services