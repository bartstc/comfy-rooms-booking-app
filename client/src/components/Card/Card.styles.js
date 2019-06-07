import styled from 'styled-components';
import { device, color } from '../../utils/styles';

export const CardItem = styled.li`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  color: ${color.black};

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
  background: url(${props => props.background ? props.background : '/images/not_available.jpg'});
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

export const CardContent = styled.div`
  padding: .5em;
`;