import styled from 'styled-components';
import { color, fontFamily, fontWeight, device } from '../../utils/styles';

export const ButtonWrapper = styled.button`
  width: 150px;
  height: 40px;
  background: ${color.black};
  border: 1px solid ${color.black};
  color: ${color.white};
  font-family: ${fontFamily.primary};
  font-weight: ${fontWeight.bold};
  font-size: .85rem;
  text-transform: uppercase;
  margin: 0 auto;
  transition: all .25s ease-in-out;
  cursor: pointer;

  @media ${device.mobileL} {
    margin: 0;
  }

  &:hover {
    background: ${color.white};
    color: ${color.black};
  }
`;