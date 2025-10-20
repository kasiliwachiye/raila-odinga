import React from 'react';
import { AboutSection, Row, Col, StyledImage, NormalText, Line1, Line2 } from './style';
import { ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Line1>
        <NormalText>
          Odinga contested national elections as a voice for multi-party democracy.
        </NormalText>
      </Line1>
      <Line2>
        <NormalText>
          His rallies drew diverse coalitions seeking constitutional change and accountable
          leadership.
        </NormalText>
      </Line2>
      <Row>
        <Col text>
          <ParaText number="01">
            He ran for president in 1997 and later joined the reformist National Rainbow Coalition
            that swept the 2002 polls, helping end KANU's long rule and paving the way for new
            alliances.
          </ParaText>
          <ParaText number="02">
            The disputed 2007 election sparked nationwide violence, leading to a mediated coalition
            government in which Odinga served as prime minister to stabilise the country.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            image={data.election4.childImageSharp.gatsbyImageData}
            alt="Raila Odinga on the campaign trail"
            objectFit="contain"
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;
