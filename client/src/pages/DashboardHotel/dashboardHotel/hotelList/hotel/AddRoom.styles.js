import styled from 'styled-components';
import { color, device, fontWeight, fontFamily } from '../../../../../utils/styles';

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

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.span`
  height: 1.4em;
`;

export const Limiter = styled.div`
  width: 290px;

  @media ${device.laptop} {
    width: 100%;
  }
`;