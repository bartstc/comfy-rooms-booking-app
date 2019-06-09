import styled from 'styled-components';
import { fontWeight, device } from '../../../utils/styles';

export const Choice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2em;
  padding: 0 1em;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  text-align: center;
  margin: 2.8em 0 1em 0;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: ${fontWeight.light};
  margin-bottom: .4em;
  max-width: 400px;
  line-height: 1.4em;

  @media ${device.tablet} {
    font-size: 1.1rem;
    line-height: 1.5em;
  }

  span {
    font-weight: ${fontWeight.bold};
  }
`;