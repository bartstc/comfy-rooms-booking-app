import styled from 'styled-components';
import { color, fontWeight, device } from '../../../../utils/styles';

export const Container = styled.div`
  width: 100%;
  padding: 1.6em 1em;
`;

export const Title = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: ${fontWeight.regular};

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const Description = styled.div`

`;

export const Info = styled.p`
  font-size: .8rem;
  font-weight: ${fontWeight.light};

  @media ${device.tablet} {
    font-size: 1rem;
  }

  span {
    color: ${color.grey};
  }
`;