import styled from 'styled-components';
import { device, fontWeight, color } from '../../../utils/styles';

export const FilterList = styled.div`
  padding-top: 1.4em;
  width: 100%;
`;

export const Title = styled.p`
  font-size: .95rem;
  font-weight: ${fontWeight.bold};
  color: ${color.accent};
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;