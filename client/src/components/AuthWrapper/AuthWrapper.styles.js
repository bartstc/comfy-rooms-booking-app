import styled from 'styled-components';
import { fontWeight, device, color } from '../../utils/styles';

export const AuthSection = styled.section`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 .6em;
`;

export const AuthForm = styled.form`
  width: 100%;
  max-width: 360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  input {
    margin-bottom: 1.1em;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  text-align: center;
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: .85rem;
  margin-top: .4em;
  margin-bottom: 1.5em;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }

  a {
    color: ${color.black};
    font-weight: ${fontWeight.bold};
    text-decoration: underline;
  }
`;