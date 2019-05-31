import styled from 'styled-components';
import { fontWeight, device, color } from '../../../../utils/styles';

export const RoomCard = styled.li`
  width: 100%;
  margin-bottom: 2.2em;
  border-bottom: 1px solid ${color.accent};

  @media ${device.laptop} {
    display: flex;
    padding-bottom: .5em;
  }
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  flex: .35;
`;

export const Image = styled.img`
    width:100%;
    height:auto;
`;

export const Content = styled.div`

  @media ${device.mobileL} {
    margin-top: .5em;
    display: flex;
    justify-content: space-between;
    flex: .65;
  }

  @media ${device.laptop} {
    margin-top: 0;
  }
`;

export const WrapperLeft = styled.div`
  padding-right: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: .7;

  @media ${device.laptop} {
    padding-left: .8em;
  }
`;

export const WrapperRight = styled.div`
  flex: .3;
  
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Icons = styled.div`
  display: none;
  font-size: 1.2rem;
  margin-top: .3em;

  @media ${device.laptop} {
    display: block;
  }

  .fas {
    margin-right: .3em;
  }
`;

export const Type = styled.p`
  background: ${color.accent};
  color: ${color.white};
  font-size: .8rem;
  padding: .2em .4em;
  border-radius: 3px;
  margin-bottom: .2em;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

export const Name = styled.h2`
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  font-size: 1.35rem;
  margin-top: .15em;

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }

  @media ${device.tablet} {
    font-size: 1.55rem;
  }
`;

export const Location = styled.p`
  font-size: .75rem;
  margin-bottom: .8em;

  @media ${device.mobileL} {
    font-size: .95rem;
  }
`;

export const Info = styled.p`
  font-size: .75rem;
  margin-bottom: .2em;

  @media ${device.mobileL} {
    font-size: .9rem;
  }

  span {
    font-weight: ${fontWeight.bold};
    font-size: 1.2rem;
  }
`;