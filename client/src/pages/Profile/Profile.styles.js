import styled from 'styled-components';
import { color, fontWeight, device } from '../../utils/styles';

export const ProfileContainer = styled.section`
  padding: 0 .6em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1em;
  }
`;

export const UserData = styled.div`

`;

export const Title = styled.h2`
  width: 100%;
  font-size: 1rem;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  margin-bottom: .1em;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const UserInfo = styled.p`
  font-size: .9rem;

  span {
    font-weight: ${fontWeight.bold};
  }
`;

export const HistoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 1.7em;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 1em;
`;

export const OfferInfo = styled.p`
  font-size: 1rem;
  line-height: 1.3em;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  span {
    color: ${color.accent};
  }
`;