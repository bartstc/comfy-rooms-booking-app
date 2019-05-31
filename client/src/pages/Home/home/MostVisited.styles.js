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
  grid-template-columns: 1fr;
  grid-row-gap: 1.1em;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: .8em;
    grid-row-gap: .8em;
  }

  @media ${device.laptop} {
    grid-column-gap: 1.2em;
    grid-row-gap: 1.2em;
  }
`;

export const Card = styled.li`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: .7em;
  background: url(${props => props.background ? props.background : '/images/Showcase.jpg'});
  background-size: cover;
  background-position: center;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobileL} {
    height: 310px;
  }

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.laptop} {
    height: 370px;
  }
`;

export const City = styled.h2`
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  font-size: 1.7rem;

  @media ${device.mobileL} {
    font-size: 2.3rem;
  }

  @media ${device.laptop} {
    font-size: 3.3rem;
  }
`;

export const Country = styled.p`
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

export const Price = styled.p`
  position: absolute;
  bottom: .7em;
  left: .7em;
  font-weight: ${fontWeight.regular};
  color: ${color.white};
  font-size: 1rem;
  background: ${color.accent};
  border-radius: 5px;
  padding: .4em;

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
`;