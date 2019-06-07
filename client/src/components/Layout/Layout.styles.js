import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Main = styled.main`
  height: 100%;
  padding-top: 80px;
  padding-bottom: 2em;
  min-height: calc(100vh - 400px);

  @media ${device.tablet} {
    padding-top: 100px;
    padding-bottom: 3.4em;
  }

  @media ${device.laptop} {
    padding-top: 120px;
  }
`;