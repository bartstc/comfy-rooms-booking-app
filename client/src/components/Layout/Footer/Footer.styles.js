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
  margin-top: 2em;

  @media ${device.tablet} {
    height: 320px;
    margin-top: 3.4em;
  }
`;

export const FooterTitle = styled.p`
  text-align: center;
  font-weight: ${fontWeight.bold};
  font-size: 1.4rem;
  color: ${color.white};

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  margin: 0 auto;
  color: ${color.white};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5em 0;

  @media ${device.tablet} {
    margin-bottom: 1.1em;
    font-size: 2.2rem;
  }
`;

export const SocialItem = styled.li`

`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid ${color.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.grey};
  padding-top: .5em;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooInfo = styled.p`
  line-height: 1.8rem;
`;