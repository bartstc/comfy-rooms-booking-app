import styled from 'styled-components';
import { color, fontWeight, device, fontFamily, tableStyles } from '../../../utils/styles';

export const Container = styled.div`
  width: 100%;
  padding: 1.6em 1em;
`;

export const Title = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: ${fontWeight.regular};

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const Description = styled.div`

`;

export const Info = styled.p`
  font-size: .8rem;
  font-weight: ${fontWeight.light};

  @media ${device.tablet} {
    font-size: 1rem;
  }

  span {
    color: ${color.grey};
  }
`;

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

export const AddBtn = styled.button`
  border: none;
  background: ${color.grey};
  font-weight: ${fontWeight.bold};
  color: ${color.white};
  width: 100px;
  height: 30px;
  font-family: ${fontFamily.primary};
  margin-top: .5em;
`;