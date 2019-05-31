import styled from 'styled-components';
import { color, fontWeight, device } from '../../../utils/styles';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 220px;
  background: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 .6em;

  @media ${device.tablet} {
    height: 320px;
  }

  a {
    color: ${color.white};
    margin-bottom: 1.5em;
    font-size: 1rem;
    text-decoration: underline;

    @media ${device.tablet} {
      font-size: 1.4rem;
    }
  }
`;

export const FooterTitle = styled.p`
  text-align: center;
  font-weight: ${fontWeight.bold};
  font-size: 1.2rem;
  color: ${color.white};

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  margin: 0 auto;
  color: ${color.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5em 0;

  @media ${device.tablet} {
    margin-bottom: 1.1em;
    font-size: 1.8rem;
  }
`;

export const SocialItem = styled.li`

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