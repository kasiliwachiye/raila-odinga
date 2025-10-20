import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SplitWrapper, Row } from '../style';

export const SecondPanel = styled.div`
  display: flex;
  width: 270vw;
`;
export const StyledImage = styled(GatsbyImage)`
  position: relative;
  width: ${props => (props.secondImage ? '45vw' : '50vw')};
  height: 80%;
  margin-top: -3vw;
  margin-left: 2vw;

  & [data-main-image] {
    object-fit: cover;
  }
`;
export const ParagraphWrapper = styled.div`
  width: 40vw;

  :first-child {
    margin-right: 5vw;
  }
`;
export const StyledSplitWrapper = styled(SplitWrapper)`
  margin-left: 2vw;
`;
export const StyledRow = styled(Row)`
  margin: 0 10vw;
`;
