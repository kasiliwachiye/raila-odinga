import React from 'react';
import { BigTitleText } from '../style';
import { SecondLine, ImageWrapper, ImageContainer, ParaBox, FirstPanel } from './style';
import { StyledImage, ParaText } from '@styles';
import { SplitWrapper, Row } from '../style';

const Hero = ({ data }) => {
  return (
    <FirstPanel>
      <SplitWrapper>
        <Row>
          <BigTitleText>Years of Detention</BigTitleText>
          <ParaBox>
            <ParaText number="01">
              Following the 1982 attempted coup, Raila Odinga was detained without trial for six
              years, accused of abetting the uprising. The experience deepened his resolve to press
              for political pluralism despite intense surveillance.
            </ParaText>
          </ParaBox>
        </Row>
        <SecondLine>
          <ImageWrapper>
            <ImageContainer>
              <StyledImage
                image={data.detention_1.childImageSharp.gatsbyImageData}
                alt="Raila Odinga speaking after release"
                style={{ position: 'absolute' }}
              />
            </ImageContainer>
          </ImageWrapper>
          <BigTitleText>Reform Struggle</BigTitleText>
        </SecondLine>
      </SplitWrapper>
    </FirstPanel>
  );
};

export default Hero;
