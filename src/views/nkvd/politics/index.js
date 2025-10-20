/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BigTitle } from '../style';
import { Row, Col } from '../about/style';
import {
  PoliticsSection,
  ParaWrapper,
  NormalText,
  FirstLine,
  SecondLine,
  ImageWrapper,
  SpinningText,
} from './style';
import { ParaText, StyledImage } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Politics = ({ data }) => {
  let scrollContainer = useRef(null);
  let label = useRef(null);

  useEffect(() => {
    gsap.to(label, {
      rotation: 360,
      scrollTrigger: {
        scroller: '#___gatsby',
        trigger: scrollContainer,
        start: '-40% top',
        toggleActions: 'play, pause, reverse, pause',
        scrub: true,
      },
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <PoliticsSection ref={el => (scrollContainer = el)}>
      <FirstLine>
        <BigTitle>Reform</BigTitle>
        <ImageWrapper>
          <StyledImage
            image={data.reforms4.childImageSharp.gatsbyImageData}
            alt="Leaders affirming the 2010 constitution"
            style={{ position: 'absolute' }}
          />
        </ImageWrapper>
      </FirstLine>
      <SecondLine>
        <SpinningText ref={el => (label = el)}>Dialogue</SpinningText>
        <BigTitle>Governance</BigTitle>
      </SecondLine>
      <Row>
        <Col>
          <ParaText number="03">
            Odinga championed the 2010 constitutional referendum, arguing for devolution,
            independent commissions, and safeguards against executive overreach to improve service
            delivery.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            image={data.reforms3.childImageSharp.gatsbyImageData}
            alt="Constitutional referendum celebrations"
            style={{ position: 'absolute' }}
          />
        </Col>
      </Row>
      <Row bottom pt>
        <ParaWrapper top>
          <NormalText>
            The 2018 handshake with President Kenyatta set up joint taskforces that examined
            electoral justice, inclusivity, and national cohesion.
          </NormalText>
        </ParaWrapper>
        <ParaWrapper bottom>
          <NormalText>
            These dialogues fed into the Building Bridges Initiative proposals, focusing on shared
            prosperity and taming polarising winner-take-all politics.
          </NormalText>
        </ParaWrapper>
      </Row>
      <Row pt>
        <Col smaller>
          <StyledImage
            image={data.reforms5.childImageSharp.gatsbyImageData}
            alt="African Union infrastructure briefing"
            style={{ position: 'absolute' }}
          />
        </Col>
        <Col reverse smaller np>
          <ParaText number="04">
            As the African Union High Representative for Infrastructure, he promoted continental
            transport corridors while advocating domestic reforms that aligned Kenya with regional
            integration goals.
          </ParaText>
        </Col>
      </Row>
    </PoliticsSection>
  );
};

export default Politics;
