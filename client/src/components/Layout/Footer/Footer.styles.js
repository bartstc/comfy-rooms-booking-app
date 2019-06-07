import styled from 'styled-components';
import { color, fontWeight, fontFamily, device } from '../../../utils/styles';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4em .6em;
  height: 400px;
`;

export const Register = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2em;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: .3em;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

export const Subtitle = styled.p`
  font-weight: ${fontWeight.light};
  font-family: ${fontFamily.secondary};
  font-size: 1rem;
  margin-bottom: .7em;
  max-width: 700px;
  line-height: 1.4em;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid ${color.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.accent};
  padding-top: .5em;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooInfo = styled.p`
  line-height: 1.8rem;
`;