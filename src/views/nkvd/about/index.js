/* eslint react-hooks/exhaustive-deps: 0 */
import React from 'react';
import { AboutSection, Row, Col } from './style';
import { StyledImage, ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Row>
        <Col>
          <ParaText number="01">
            Odinga campaigned vigorously for Kenya's 2010 constitution, rallying support for a bill
            of rights, devolution, and independent institutions that rebalanced executive power.
          </ParaText>
          <ParaText number="02">
            Following the tense 2017 election, he forged a handshake with President Uhuru Kenyatta,
            opening space for the Building Bridges Initiative and cooperative reform dialogue.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            image={data.nkvd_police2.childImageSharp.gatsbyImageData}
            alt="Leaders after the 2018 handshake"
            style={{ position: 'absolute' }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;
