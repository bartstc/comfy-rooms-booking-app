import styled from 'styled-components';
import { color, fontWeight, fontFamily, device } from '../../../../utils/styles';

export const HotelCard = styled.li`
  width: 100%;
  padding: 1em;
`;

export const Title = styled.h3`
  font-size: 1.15rem;
  text-transform: uppercase;
  font-weight: ${fontWeight.regular};

  @media ${device.tablet} {
    font-size: 1.45rem;
  }
`;

export const ToggleBtn = styled.button`
  width: 100px;
  height: 28px;
  border: none;
  color: ${color.white};
  background: ${color.grey};
  margin-bottom: .4em;
  font-family: ${fontFamily.primary};
  font-weight: ${fontWeight.bold};
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

export const RoomsPanel = styled.div`

`;