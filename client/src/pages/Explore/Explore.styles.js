import styled from 'styled-components';
import { device } from '../../utils/styles';

export const ExploreContainer = styled.section`
  padding: 0 .6em;
  max-width: 500px;
  margin: 0 auto;
  display: grid;

  @media ${device.laptop} {
    max-width: 1200px;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1em;
  }
`;