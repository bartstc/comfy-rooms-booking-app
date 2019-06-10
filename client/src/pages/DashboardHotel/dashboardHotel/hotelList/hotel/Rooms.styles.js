import styled from 'styled-components';
import { color, fontWeight, fontFamily, tableStyles } from '../../../../../utils/styles';

export const Table = styled.table`
  ${tableStyles};
`;

export const DeleteBtn = styled.button`
  border: none;
  background: red;
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  width: 100%;
  height: 24px;
  font-family: ${fontFamily.primary};
`;

export const Warning = styled.p`
  color: red;
  line-height: 1.8em;
`;