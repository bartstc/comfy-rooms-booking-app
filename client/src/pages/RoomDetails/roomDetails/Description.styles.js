import styled from 'styled-components';
import { device, fontFamily, fontWeight } from '../../../utils/styles';

export const Text = styled.p`
  font-family: ${fontFamily.secondary};
  font-weight: ${fontWeight.light};
  font-size: 1.1rem;
  line-height: 1.5em;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;