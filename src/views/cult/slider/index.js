import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SliderSection, SliderRow, StyledImage, ImageContainer, TextRow, Col } from './style';
import { Container, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Slider = ({ data }) => {
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: 'none' } })
        .to(sectionContainer, { xPercent: '-=50' });

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: 'top bottom',
        end: ' +=2000 top',
        scroller: '#___gatsby',
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <SliderSection>
      <SliderRow ref={el => (sectionContainer = el)}>
        <ImageContainer>
          <StyledImage
            image={data.legacy3.childImageSharp.gatsbyImageData}
            alt="Raila Odinga addressing a rally"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            image={data.legacy4.childImageSharp.gatsbyImageData}
            alt="Supporters celebrating electoral reforms"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            image={data.legacy5.childImageSharp.gatsbyImageData}
            alt="Community meeting with Odinga allies"
          />
        </ImageContainer>
      </SliderRow>
      <Container>
        <TextRow>
          <Col>
            <ParaText number="03">
              In his later years Odinga mentored emerging leaders, championed civic education, and
              toured counties to support devolved development agendas.
            </ParaText>
          </Col>
          <Col>
            <ParaText number="04">
              His 2022 presidential bid emphasised social protection and infrastructure, and after
              the Supreme Court upheld the results he urged peace, reinforcing his role as an elder
              statesman.
            </ParaText>
          </Col>
        </TextRow>
      </Container>
    </SliderSection>
  );
};

export default Slider;
