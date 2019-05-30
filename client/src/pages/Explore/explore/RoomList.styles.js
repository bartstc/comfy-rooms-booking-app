import styled from 'styled-components';
import { device } from '../../../utils/styles';

export const Rooms = styled.ul`
  width: 100%;

  @media ${device.laptop} {
    max-width: 100%;
  }
`;