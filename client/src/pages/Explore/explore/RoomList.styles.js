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
  color: ${color.accent};
  text-transform: uppercase;
  margin-bottom: 1.5em;

  span {
    font-weight: ${fontWeight.bold};
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const Warning = styled.p`
  font-size: 1rem;
  line-height: 1.9em;
  text-transform: uppercase;
`;