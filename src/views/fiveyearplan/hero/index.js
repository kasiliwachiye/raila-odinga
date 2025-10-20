import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  HeroWrapper,
  BigTitle,
  ColItem,
  SubTitle,
  NumberWrapper,
  ParaWrapper,
  NormalText,
  AboutText,
  SplitWrapper,
  CaptionText,
} from './style';
import { StyledImage, SectionNumber, Container, Overflow } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let tl = gsap.timeline();
  let heroSection = useRef(null);
  let titleText = useRef([]);

  useEffect(() => {
    titleText.current.forEach(el => {
      tl.from(el, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play none none none',
          scroller: '#___gatsby',
          scrub: true,
        },
        yPercent: -100,
      });
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [tl, heroSection, titleText]);

  return (
    <Container>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>1</SectionNumber>
      </NumberWrapper>
      <HeroWrapper ref={el => (heroSection = el)}>
        <ColItem>
          <BigTitle>
            <Overflow>
              <div ref={el => (titleText.current[0] = el)}>Early</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[1] = el)}>Life</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[2] = el)}>Years</div>
            </Overflow>
          </BigTitle>
          <Overflow>
            <SubTitle ref={el => (titleText.current[3] = el)}>Jan 7, 1945—Early Career</SubTitle>
          </Overflow>
        </ColItem>
        <ColItem image>
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            image={data.early_life.childImageSharp.gatsbyImageData}
            alt="People during the Five Year Plan"
            style={{ position: 'absolute' }}
          />
        </ColItem>
      </HeroWrapper>
      <AboutText>
        <SplitWrapper>
          <ParaWrapper top>
            <CaptionText>Born in Maseno, Kenya on 7 January 1945</CaptionText>
            <CaptionText>Son of Jaramogi Oginga Odinga and Mary Ajuma</CaptionText>
            <CaptionText>Engineer trained in East Germany before returning</CaptionText>
          </ParaWrapper>
          <ParaWrapper top>
            <NormalText>
              Raila Odinga's formative experiences bridged family activism, science education, and a
              deep curiosity about post-independence governance.
            </NormalText>
          </ParaWrapper>
        </SplitWrapper>
        <ParaWrapper>
          <NormalText>
            His early work as an engineer blended technical expertise with a growing interest in
            Kenya's push for inclusive politics.
          </NormalText>
        </ParaWrapper>
      </AboutText>
    </Container>
  );
};

export default Hero;
