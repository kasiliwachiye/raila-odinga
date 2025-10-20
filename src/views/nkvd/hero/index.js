import React from 'react';
import { BigTitle } from '../style';
import { HeroSection, NumberWrapper, SecondLineWrap, ImageWrapper } from './style';
import { SectionNumber, StyledImage } from '@styles';

const Hero = ({ data }) => {
  return (
    <HeroSection>
      <BigTitle>Reform agenda-</BigTitle>
      <SecondLineWrap>
        <ImageWrapper>
          <StyledImage
            image={data.nkvd_police1.childImageSharp.gatsbyImageData}
            alt="Raila Odinga and Uhuru Kenyatta during the handshake"
            style={{ position: 'absolute' }}
          />
        </ImageWrapper>
        <BigTitle>National unity</BigTitle>
      </SecondLineWrap>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>4</SectionNumber>
      </NumberWrapper>
    </HeroSection>
  );
};

export default Hero;
