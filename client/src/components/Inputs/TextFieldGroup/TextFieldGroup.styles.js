import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1em;

  @media ${device.laptop} {
    max-width: ${props => props.narrow ? '160px' : 'auto'};
    margin-bottom: ${props => props.narrow ? '0' : '1.1em'};
  }
`;

export const Label = styled.label`
  font-size: .9rem;
  font-weight: ${fontWeight.regular};
  margin-bottom: .3em;
`;

export const Input = styled.input`
  width: 290px;
  height: 38px;
  background: ${color.lightGrey};
  font-family: ${fontFamily.primary};
  font-size: 1.1rem;
  font-weight: ${fontWeight.light};
  padding-left: .8em;
  margin-bottom: .2em;
  border: none;
  color: ${color.black};
  border: ${props => props.error !== '' ? '1px solid red' : 'none'};
  outline-color: ${color.accent};

  &::placeholder {
    color: ${color.grey};
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Error = styled.span`
  font-size: .8rem;
  color: red;
`;

export const Info = styled.span`
  font-size: .8rem;
`;