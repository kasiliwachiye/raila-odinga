import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  AboutSection,
  Row,
  Col,
  ImageWrapper,
  StyledImage,
  TopLine,
  SecondLine,
  ThirdLine,
  BigTitle,
} from './style';
import { Container, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Close = ({ data }) => {
  let textRef = useRef([]);
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: 'none' } })
        .to(textRef.current[0], { left: '5.1%' }, 0)
        .to(textRef.current[1], { left: '5.1%' }, 0)
        .to(textRef.current[2], { left: '5.1%' }, 0);

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: 'top bottom',
        end: '+=2000 bottom',
        scroller: '#___gatsby',
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <AboutSection ref={el => (sectionContainer = el)}>
      <Container>
        <TopLine ref={el => (textRef.current[0] = el)}>
          <BigTitle>A lasting legacy</BigTitle>
        </TopLine>
        <SecondLine ref={el => (textRef.current[1] = el)}>
          <BigTitle>Shared memory</BigTitle>
        </SecondLine>
        <ThirdLine ref={el => (textRef.current[2] = el)}>
          <BigTitle>National tributes</BigTitle>
        </ThirdLine>
        <Row>
          <Col>
            <ParaText number="01">
              Odinga's legacy rests on decades of opposition leadership, coalition building, and a
              reputation for speaking out during constitutional crises.
            </ParaText>
            <ParaText number="02">
              He has often led national mourning after the passing of major figures and disaster
              victims, offering unity during sombre vigils for leaders such as Jaramogi Oginga
              Odinga and Mwai Kibaki.
            </ParaText>
          </Col>
          <Col>
            <ImageWrapper>
              <StyledImage
                image={data.cult_poster2.childImageSharp.gatsbyImageData}
                alt="Raila Odinga at a national memorial service"
              />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default Close;
