import React from 'react';
import {
  ResultsSection,
  Row,
  TopRow,
  Col,
  BigTitle,
  NormalText,
  StyledImage,
  TopImage,
  BottomImage,
  HalfRow,
  HalfCol,
} from './style';
import { Container, ParaText } from '@styles';

const Results = ({ data }) => {
  return (
    <ResultsSection>
      <Container>
        <TopRow>
          <BigTitle>Early</BigTitle>
          <BigTitle>Influences</BigTitle>
        </TopRow>
        <Row>
          <Col image>
            <TopImage data-scroll data-scroll-speed={2}>
              <StyledImage
                image={data.early_life2.childImageSharp.gatsbyImageData}
                alt="Raila Odinga as a young engineer"
                objectFit="contain"
              />
            </TopImage>
            <BottomImage data-scroll data-scroll-speed={1}>
              <StyledImage
                image={data.early_life3.childImageSharp.gatsbyImageData}
                alt="Archival material from Raila Odinga's early career"
                objectFit="contain"
              />
            </BottomImage>
          </Col>
          <Col>
            <NormalText>
              Odinga's formative years blended scientific study with exposure to Kenya's push for
              inclusive democracy.
            </NormalText>
          </Col>
        </Row>
        <HalfRow>
          <HalfCol>
            <ParaText number="03">
              At the University of Nairobi he mentored engineering students while building links to
              industry that supported Kenya's young manufacturing sector.
            </ParaText>
          </HalfCol>
          <HalfCol>
            <ParaText number="04">
              Family expectations and international exposure kept him engaged with debates on
              governance, pointing him toward public advocacy beyond the workshop.
            </ParaText>
          </HalfCol>
        </HalfRow>
      </Container>
    </ResultsSection>
  );
};

export default Results;
