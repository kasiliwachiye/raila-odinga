import React from 'react';
import {
  CloseSection,
  TopImage,
  BottomImage,
  StyledImage,
  Row,
  NormalText,
  HalfCol,
  BottomImageWrap,
} from './style';
import { ParaText } from '@styles';

const Close = ({ data }) => {
  return (
    <CloseSection>
      <Row>
        <Row row>
          <TopImage data-scroll data-scroll-speed={2}>
            <StyledImage
              image={data.prop_poster5.childImageSharp.gatsbyImageData}
              alt="Supporters waving Raila Odinga banners"
              objectFit="contain"
            />
          </TopImage>
          <NormalText>
            Odinga continued to press for credible polls through civic education and observer
            engagement across the country.
          </NormalText>
        </Row>
        <Row>
          <BottomImageWrap>
            <BottomImage>
              <StyledImage
                image={data.prop_poster6.childImageSharp.gatsbyImageData}
                alt="Election officials during a results briefing"
                objectFit="contain"
              />
            </BottomImage>
          </BottomImageWrap>
          <Row row>
            <HalfCol>
              <ParaText number="03">
                He challenged the 2013 presidential tally at the Supreme Court and later saw the
                2017 poll annulled, exposing systemic weaknesses in vote transmission and tallying.
              </ParaText>
            </HalfCol>
            <HalfCol>
              <ParaText number="04">
                Grassroots networks around his campaigns pushed for biometric registration,
                transparent results portals, and inclusive electoral commissions to rebuild public
                trust.
              </ParaText>
            </HalfCol>
          </Row>
        </Row>
      </Row>
    </CloseSection>
  );
};

export default Close;
