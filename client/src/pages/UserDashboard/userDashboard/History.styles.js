import styled from 'styled-components';
import { color, fontWeight, fontFamily, tableStyles } from '../../../utils/styles';

export const HistoryWrapper = styled.div`

`;

export const Empty = styled.p`

`;

export const Table = styled.table`
  ${tableStyles};
`;

export const CommentBtn = styled.button`
  border: none;
  background: ${color.accent};
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  width: 100%;
  height: 24px;
  font-family: ${fontFamily.primary};
`;