import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Main = styled.main`
  padding-top: 60px;

  @media ${device.tablet} {
    padding-top: 80px;
  }
`;