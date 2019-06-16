import styled from 'styled-components';
import { color } from '../../utils/styles';

export const Preview = styled.div`
  position: absolute;
  top: 50px;
  left: 30px;
  width: 200px;
  height: 100px;
  background: ${color.white};
  display: none;
`;

export const PinWrapper = styled.div`
  position: relative;

  &:hover ${Preview} {
    display: block;
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