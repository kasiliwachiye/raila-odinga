import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const AboutSection = styled.div`
  margin-top: -80vh;
`;
export const Row = styled.div`
  display: flex;
  padding-top: 10vh;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;

  :first-child {
    padding-right: 5.1vw;
  }

  div :last-child {
    padding-top: 4vw;
  }
`;
export const StyledImage = styled(GatsbyImage)`
  width: 100%;

  & [data-main-image] {
    object-fit: cover;
  }
`;
export const NormalText = styled.p`
  font-size: 3.25vw;
  line-height: 110%;
  margin: 0;
`;
export const Line1 = styled.div`
  width: 65%;
`;
export const Line2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  p {
    width: 85%;
  }
`;
