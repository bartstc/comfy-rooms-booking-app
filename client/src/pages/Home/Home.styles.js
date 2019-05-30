import styled from 'styled-components';
import { fontWeight, device } from '../../utils/styles';

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2.5em;
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 1.4rem;
    margin-top: 3em;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
    margin-top: 3em;
  }
`;