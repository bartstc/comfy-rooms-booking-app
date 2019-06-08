import styled from 'styled-components';
import { fontWeight, device } from '../../utils/styles';

export const Container = styled.section`
  padding: 0 .6em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: .4em;

  @media ${device.tablet} {
    display: flex;
    aling-items: center;
    justify-content: space-between;
  }
`;

export const Welcome = styled.h1`
  font-size: 1.3rem;
  font-weight: ${fontWeight.light};
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 1.9rem;
  }
`;