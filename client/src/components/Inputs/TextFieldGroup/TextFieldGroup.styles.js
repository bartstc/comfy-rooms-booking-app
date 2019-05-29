import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;

  @media ${device.laptop} {
    max-width: ${props => props.narrow ? '160px' : 'auto'};
    margin: 0 .3em;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: ${fontWeight.regular};
  margin-bottom: .3em;
`;

export const Input = styled.input`
  width: 290px;
  height: 38px;
  background: ${color.lightGrey};
  font-family: ${fontFamily.secondary};
  font-size: 1.1rem;
  padding-left: .8em;
  border: none;
  color: ${color.grey};
  border: ${props => props.error !== '' ? '1px solid red' : 'none'};

  &:placeholder {
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