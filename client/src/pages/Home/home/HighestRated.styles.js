import styled from 'styled-components';
import { color, fontWeight, device } from '../../../utils/styles';

export const Section = styled.section`
  padding: 0 .6em;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardList = styled.ul`
  width: 100%;
  display: grid;
  grid-row-gap: 2em;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: .8em;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1em;
  }
`;

export const Name = styled.h2`
  font-weight: ${fontWeight.regular};
  font-size: 1.35rem;
  margin-top: .3em;
`;

export const Location = styled.p`
  font-size: .9rem;
  margin-bottom: .8em;
`;

export const Price = styled.p`
  font-size: 1rem;
  margin-bottom: .2em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Rating = styled.p`
  background: ${color.accent};
  color: ${color.white};
  font-weight: ${fontWeight.bold};
  font-size: .9rem;
  border-radius: 5px;
  padding: .3em;
  margin-right: .8em;
`;

export const Opinions = styled.p`
  color: ${color.accent};
  font-size: .9rem;
`;