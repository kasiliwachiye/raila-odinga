import React from 'react';
import {
  HeroSection,
  NumberWrapper,
  BigTitleText,
  StyledImage,
  TopImage,
  MiddleImage,
  BottomImage,
  Row,
} from './style';
import { SectionNumber, Container } from '@styles';

const Hero = ({ data }) => {
  return (
    <HeroSection>
      <Container>
        <TopImage data-scroll data-scroll-speed={1}>
          <StyledImage
            image={data.prop_poster1.childImageSharp.gatsbyImageData}
            alt="Raila Odinga campaign rally"
            objectFit="contain"
          />
        </TopImage>
        <MiddleImage data-scroll data-scroll-speed={3}>
          <StyledImage
            image={data.prop_poster2.childImageSharp.gatsbyImageData}
            alt="Supporters during election campaigns"
            objectFit="contain"
          />
        </MiddleImage>
        <BottomImage data-scroll data-scroll-speed={2}>
          <StyledImage
            image={data.prop_poster3.childImageSharp.gatsbyImageData}
            alt="Queue at a Kenyan polling station"
            objectFit="contain"
          />
        </BottomImage>
        <NumberWrapper data-scroll data-scroll-speed={2}>
          <SectionNumber>3</SectionNumber>
        </NumberWrapper>
        <Row>
          <div data-scroll data-scroll-speed={1}>
            <BigTitleText>Elec</BigTitleText>
          </div>
          <div data-scroll data-scroll-speed={3}>
            <BigTitleText>tion</BigTitleText>
          </div>
          <div data-scroll data-scroll-speed={2}>
            <BigTitleText>s</BigTitleText>
          </div>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
