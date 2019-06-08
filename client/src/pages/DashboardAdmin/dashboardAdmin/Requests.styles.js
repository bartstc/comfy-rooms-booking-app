import styled from 'styled-components';
import { tableStyles, color, fontWeight, fontFamily } from '../../../utils/styles';

export const Table = styled.table`
  ${tableStyles};
`;

export const Empty = styled.p`

`;

export const AcceptBtn = styled.button`
  border: none;
  background: ${color.accent};
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  width: 100%;
  height: 24px;
  font-family: ${fontFamily.primary};
`;