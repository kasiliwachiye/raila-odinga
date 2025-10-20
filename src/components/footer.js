import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-color: var(--footer);
  padding-top: 20vh;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.bottom && `padding: 20vh 0 5vw;`};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinksList = styled.ul`
  padding: 0;
  margin: 0;
`;
const LinkWrapper = styled.li`
  list-style: none;
  padding: 0 0 1vw;
  margin: 0;
`;
const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 16vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  line-height: 85%;
`;
const StyledLink = styled.a`
  position: relative;
  font-size: 2vw;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;

  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :hover:before {
    transform: scaleX(1);
  }
`;
const SmallText = styled.p`
  position: relative;
  font-size: 2vw;
  margin: 0;
`;
const BoldTitle = styled(SmallText)`
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <BigTitle>Thanks for</BigTitle>
            <BigTitle>scrolling!</BigTitle>
          </Col>
          <Col>
            <LinksList>
              <LinkWrapper>
                <BoldTitle>Sources used</BoldTitle>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.britannica.com/biography/Raila-Odinga"
                  target="_blank"
                  rel="noopener noreferrer">
                  britannica.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.bbc.com/news/world-africa-12375431"
                  target="_blank"
                  rel="noopener noreferrer">
                  bbc.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.nation.africa/kenya/news/politics/raila-odinga-biography-3792790"
                  target="_blank"
                  rel="noopener noreferrer">
                  nation.africa
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.theguardian.com/world/2018/mar/09/uhuru-kenyatta-raila-odinga-handshake"
                  target="_blank"
                  rel="noopener noreferrer">
                  theguardian.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.aljazeera.com/news/2022/9/5/raila-odinga-accepts-supreme-court-ruling"
                  target="_blank"
                  rel="noopener noreferrer">
                  aljazeera.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://au.int/en/pressreleases/20181020/au-chairperson-appoints-raila-odinga-high-representative"
                  target="_blank"
                  rel="noopener noreferrer">
                  au.int
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.theafricareport.com/264537/raila-odinga-legacy-questions-after-2022-election/"
                  target="_blank"
                  rel="noopener noreferrer">
                  theafricareport.com
                </StyledLink>
              </LinkWrapper>
            </LinksList>
          </Col>
        </Row>
        <Row bottom>
          <SmallText>&copy; 2025</SmallText>
          <div>
            <StyledLink
              href="https://www.kasili.dev"
              target="_blank"
              rel="noopener noreferrer">
              Website by Kasili
            </StyledLink>
          </div>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
