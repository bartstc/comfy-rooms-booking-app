import styled from 'styled-components';
import { color } from '../../utils/styles';

export const Popup = styled.div`
  position: absolute;
  top: 50px;
  left: 30px;
  width: 300px;
  height: 75px;
  padding: .2em;
  background: ${color.white};
  display: none;
`;

export const PinWrapper = styled.div`
  position: relative;

  &:hover ${Popup} {
    display: flex;
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.2em;
`;

export const Navigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1em;
`;

export const Image = styled.img`
  width: 90px;
`;

export const Info = styled.div`
  padding-left: .4em;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
`;

export const Desc = styled.p`
  font-size: .9em;
  color: ${color.grey};
`;