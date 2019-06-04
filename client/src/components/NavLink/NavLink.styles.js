import styled from 'styled-components';
import { color, fontFamily, fontWeight, device } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
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

  &.light {
    background: ${color.white};
    border: 1px solid ${color.white};
    color: ${color.black};

    &:hover {
      background: ${color.black};
      color: ${color.white};
    }
  }
`;