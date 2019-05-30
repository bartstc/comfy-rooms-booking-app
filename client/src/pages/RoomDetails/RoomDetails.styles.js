import styled from 'styled-components';
import { color, fontWeight, fontFamily, device } from '../../utils/styles';

export const DetailsContainer = styled.article`
  padding: 0 .6em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5em 0;
`;

export const Key = styled.p`
  color: ${color.grey};
  text-transform: uppercase;
  font-size: .8rem;

  @media ${device.mobileL} {
    font-size: .9rem;
  }
`;

export const Text = styled.p`
  font-family: ${fontFamily.secondary};
  font-weight: ${fontWeight.light};
  font-size: 1.1rem;
  line-height: 1.5em;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;
