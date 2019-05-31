import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Main = styled.main`
  padding-top: 80px;
  padding-bottom: 2em;
  min-height: calc(100vh - 220px);

  @media ${device.tablet} {
    padding-top: 100px;
    padding-bottom: 3.4em;
    min-height: calc(100vh - 320px);
  }

  @media ${device.laptop} {
    padding-top: 120px;
  }
`;