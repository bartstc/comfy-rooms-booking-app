import styled from 'styled-components';
import { device, fontFamily, fontWeight, color } from '../../../utils/styles';

export const Text = styled.p`
  font-family: ${fontFamily.secondary};
  font-weight: ${fontWeight.light};
  font-size: 1.1rem;
  line-height: 1.5em;
  margin-bottom: .8em;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

export const Facilities = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: .7em;

  .fas {
    font-size: 1.5rem;
    color: ${color.grey};
    margin-right: .5em;
  }
`;

export const Facility = styled.li`
  display: flex;
  align-items: center;
  color: ${color.grey};
  margin-bottom: .6em;
`;