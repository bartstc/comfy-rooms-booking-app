import styled from 'styled-components';
import { fontWeight, device, color } from '../../../utils/styles';

export const Section = styled.section`
  padding: 0 .6em;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.1em;

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: .4em;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: .6em;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1em;
  }
`;

export const Type = styled.h2`
  font-weight: ${fontWeight.regular};
  font-size: 1rem;
  margin-top: .4em;
  margin-bottom: .2em;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const Count = styled.p`
  color: ${color.grey};
`;