import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AboutSection, Row, Col } from './style';
import { StyledImage, Container, ImageAnim, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  let tl = gsap.timeline();
  let aboutSection = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    tl.to(image, {
      scrollTrigger: {
        trigger: aboutSection,
        pin: true,
        scrub: true,
        start: 'center center',
        end: 'bottom top',
        scroller: '#___gatsby',
      },
      scaleY: 0,
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [tl, aboutSection, image]);

  return (
    <AboutSection>
      <Container>
        <Row ref={el => (aboutSection = el)}>
          <Col>
            <ImageAnim ref={el => (image = el)} />
            <StyledImage
              image={data.early_life1.childImageSharp.gatsbyImageData}
              alt="Young Raila Odinga during his studies"
              style={{ position: 'absolute' }}
            />
          </Col>
          <Col>
            <ParaText number="01">
              Raila Amolo Odinga was born on 7 January 1945 in Maseno, Kisumu County, to
              independence leader Jaramogi Oginga Odinga and Mary Ajuma. Growing up in a household
              immersed in Kenya's liberation politics shaped his sense of public service.
            </ParaText>
            <ParaText number="02">
              He studied at Maranda High School before continuing his education in East Germany,
              attending the Herder Institute and the Technical University of Magdeburg. Returning in
              1970, he lectured in mechanical engineering at the University of Nairobi and
              co-founded the gas cylinder firm East African Spectre.
            </ParaText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
