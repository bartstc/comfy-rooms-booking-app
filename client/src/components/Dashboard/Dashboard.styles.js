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
  margin-bottom: 1.6em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    aling-items: center;
    justify-content: space-between;
  }
`;

export const Welcome = styled.h1`
  font-size: 1.3rem;
  font-weight: ${fontWeight.light};
  margin-bottom: .5em;

  @media ${device.tablet} {
    font-size: 1.9rem;
  }
`;