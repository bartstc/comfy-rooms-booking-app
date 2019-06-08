import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Title = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;