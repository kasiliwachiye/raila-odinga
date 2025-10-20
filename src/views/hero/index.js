/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, Power4 } from 'gsap';
import {
  SectionWrapper,
  ImageWrapper,
  BigTitle,
  ImageContainer,
  FooterWrapper,
  SectionFooter,
  FooterText,
} from './style';
import { Container, StyledImage, ImageAnim, Overflow } from '@styles';

const Hero = ({ data }) => {
  let tl = new TimelineLite();
  let topText = useRef([]);
  let bottomText = useRef([]);
  let image = useRef([]);

  useEffect(() => {
    tl.staggerFrom(
      topText.current,
      1.3,
      { scale: 0, yPercent: -100, delay: 0.5, ease: Power4.easeInOut },
      0.02,
    )
      .fromTo(
        image.firstElementChild,
        { scaleY: 1 },
        { scaleY: 0, ease: Power4.easeInOut, duration: 2.5 },
        '-=0.9',
      )
      .fromTo(
        image.lastElementChild,
        { scale: 1.3 },
        { scale: 1, ease: Power4.easeInOut, duration: 1.5 },
        '-=2.2',
      )
      .staggerFrom(
        bottomText.current,
        1.3,
        { scale: 0, yPercent: -100, ease: Power4.easeInOut },
        0.02,
        '-=2.2',
      );
  }, [tl]);

  return (
    <>
      <SectionWrapper>
        <Overflow aria-label="Odinga's Path">
          <BigTitle>
            <div ref={el => (topText.current[0] = el)}>O</div>
            <div ref={el => (topText.current[1] = el)}>d</div>
            <div ref={el => (topText.current[2] = el)}>i</div>
            <div ref={el => (topText.current[3] = el)}>n</div>
            <div ref={el => (topText.current[4] = el)}>g</div>
            <div ref={el => (topText.current[5] = el)}>a</div>
            <div ref={el => (topText.current[6] = el)}>'s</div>{' '}
            <div ref={el => (topText.current[7] = el)} className="break">
              P
            </div>
            <div ref={el => (topText.current[8] = el)}>a</div>
            <div ref={el => (topText.current[9] = el)}>t</div>
            <div ref={el => (topText.current[10] = el)}>h</div>
          </BigTitle>
        </Overflow>
        <Overflow aria-label="In Kenya's Story">
          <BigTitle smaller>
            <div ref={el => (bottomText.current[0] = el)}>I</div>
            <div ref={el => (bottomText.current[1] = el)}>n</div>{' '}
            <div ref={el => (bottomText.current[2] = el)} className="break">
              K
            </div>
            <div ref={el => (bottomText.current[3] = el)}>en</div>
            <div ref={el => (bottomText.current[4] = el)}>ya's</div>
            <div ref={el => (bottomText.current[5] = el)} className="break">
              {' '}
            </div>
            <div ref={el => (bottomText.current[6] = el)}>S</div>
            <div ref={el => (bottomText.current[7] = el)}>t</div>
            <div ref={el => (bottomText.current[8] = el)}>ory</div>
          </BigTitle>
        </Overflow>
        <ImageWrapper>
          <ImageContainer ref={el => (image = el)} data-scroll data-scroll-id="image">
            <ImageAnim />
            <StyledImage
              data-scroll
              data-scroll-speed={-1}
              image={data.raila.childImageSharp.gatsbyImageData}
              alt="Raila Amolo Odinga"
              style={{ position: 'absolute' }}
              loading="eager"
            />
          </ImageContainer>
        </ImageWrapper>
      </SectionWrapper>
      <FooterWrapper>
        <Container>
          <SectionFooter>
            <FooterText>Scroll down</FooterText>
            <FooterText>2025</FooterText>
          </SectionFooter>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Hero;
