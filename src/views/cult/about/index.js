import React from 'react';
import { AboutSection, ParaWrapper, NormalText, Row } from './style';
import { Container } from '@styles';

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Row textTop>
          <ParaWrapper top>
            <NormalText>
              Odinga's legacy builds on the nationalist foundation laid by his father while carving
              a reformist path of his own.
            </NormalText>
          </ParaWrapper>
        </Row>
        <ParaWrapper>
          <NormalText>
            He remains a touchstone for opposition politics, urging unity, constitutionalism, and
            inclusive growth in Kenya's evolving democracy.
          </NormalText>
        </ParaWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
