import styled from 'styled-components';
import { device } from '../../../utils/styles';

export const Slide = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.background ? props.background : '/images/Showcase.jpg'});
  background-position: center;
  background-size: cover;

  @media ${device.mobileL} {
    height: 420px;
  }

  @media ${device.tablet} {
    height: 560px;
  }

  @media ${device.laptop} {
    height: 660px;
  }
`;