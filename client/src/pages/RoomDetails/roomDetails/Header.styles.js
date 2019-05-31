import styled from 'styled-components';
import { fontWeight, device, color } from '../../../utils/styles';

export const HeaderWrapper = styled.header`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.2em;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  font-size: 1.4rem;
  margin-bottom: .4em;

  @media ${device.mobileL} {
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    font-size: 2.6rem;
  }
`;

export const Icons = styled.div`
  font-size: 1rem;
  margin-top: .2em;
  margin-bottom: 1.5em;

  .fas {
    margin-right: .3em;
  }

  .fa-male {
    font-size: 1.3rem;
  }
`;

export const Location = styled.p`
  font-size: .8rem;
  margin-bottom: .2em;
  color: ${color.grey};

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`;

export const Value = styled.p`
  font-weight: ${fontWeight.bold};
  font-size: 1.2rem;
  margin-bottom: .5em;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;