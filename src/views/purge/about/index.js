import React from 'react';
import { BigTitleText, Row } from '../style';
import { SecondPanel, StyledImage, ParagraphWrapper, StyledSplitWrapper, StyledRow } from './style';
import { ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <SecondPanel>
      <Row>
        <StyledImage
          image={data.purge_rubble.childImageSharp.gatsbyImageData}
          alt="Supporters calling for Odinga's release"
        />
      </Row>
      <StyledSplitWrapper>
        <Row>
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="02">
                Detained at Kamiti Maximum Security Prison after the coup attempt, Odinga spent
                years in solitary confinement while his family campaigned publicly for his release.
              </ParaText>
            </ParagraphWrapper>
            <ParagraphWrapper>
              <ParaText number="03">
                He was freed in 1988 but arrested again within months for speaking out on
                single-party rule, enduring renewed interrogations before gaining conditional
                freedom in 1989.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
          <BigTitleText>February 1988</BigTitleText>
        </Row>
        <Row>
          <BigTitleText>August 1987—</BigTitleText>
          <StyledImage
            secondImage
            image={data.purge_soldiers.childImageSharp.gatsbyImageData}
            alt="Pro-reform demonstrators during Odinga detentions"
          />
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="04">
                International human rights organisations and church leaders rallied around his case,
                turning the imprisonment into a focal point for Kenya's pro-democracy movement.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
        </Row>
      </StyledSplitWrapper>
    </SecondPanel>
  );
};

export default About;
