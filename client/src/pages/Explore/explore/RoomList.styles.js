import styled from 'styled-components';
import { device, fontWeight, color } from '../../../utils/styles';

export const Rooms = styled.ul`
  width: 100%;
  margin-top: 1.5em;

  @media ${device.laptop} {
    max-width: 100%;
  }
`;

export const Results = styled.h1`
  font-size: .95rem;
  font-weight: ${fontWeight.regular};
  color: ${color.grey};
  text-transform: uppercase;
  margin-bottom: 1.5em;

  span {
    font-weight: ${fontWeight.bold};
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;