import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Main = styled.main`
  padding-top: 80px;
  background: white;
  padding-bottom: 2em;

  @media ${device.tablet} {
    padding-top: 100px;
    padding-bottom: 3.4em;
  }

  @media ${device.laptop} {
    padding-top: 120px;
  }
`;