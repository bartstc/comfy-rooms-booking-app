import styled from 'styled-components';
import { color, fontWeight, fontFamily, tableStyles } from '../../../utils/styles';

export const HistoryWrapper = styled.div`

`;

export const Empty = styled.p`

`;

export const Table = styled.table`
  ${tableStyles};
  td.btn {
    padding: 0;
  }
`;

export const Btn = styled.button`
  border: none;
  background: ${props => props.grayedOut ? color.grey : color.accent};
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  width: 100%;
  height: 28px;
  font-family: ${fontFamily.primary};
`;