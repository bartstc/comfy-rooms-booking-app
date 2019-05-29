import styled from 'styled-components';
import { fontWeight, device, color, fontFamily } from '../../../utils/styles';

export const Section = styled.section`
  padding: 1em .6em;
  max-width: calc(1200px - 1.2em);
  margin: 0 auto;
  margin-top: 2.5em;
  background: ${color.lightGrey};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    padding: 2em .6em;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: .3em;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

export const Subtitle = styled.p`
  font-weight: ${fontWeight.light};
  font-family: ${fontFamily.secondary};
  font-size: 1rem;
  margin-bottom: 1.8em;
  max-width: 700px;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;