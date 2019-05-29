import styled from 'styled-components';
import { device } from '../../utils/styles';

export const CardItem = styled.li`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 100%;
    margin: 0;
  }

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;

export const CardImage = styled.div`
  height: 220px;
  background: url(${props => props.background ? props.background : '/images/Showcase.jpg'});
  background-size: cover;
  background-position: center;

  @media ${device.mobileL} {
    height: 320px;
  }

  @media ${device.tablet} {
    height: 290px;
  }

  @media ${device.laptop} {
    height: 170px;
  }
`;

export const CardImageOverlay = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const CardContent = styled.div`

`;