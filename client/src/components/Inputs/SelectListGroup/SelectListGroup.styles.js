import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1em;

  @media ${device.laptop} {
    max-width: ${props => props.narrow ? '80px' : 'auto'};
    margin-bottom: ${props => props.narrow ? '0' : '1.1em'};
  }
`;

export const Label = styled.label`
  font-size: .9rem;
  font-weight: ${fontWeight.regular};
  margin-bottom: .3em;
`;

export const Select = styled.select`
  width: 290px;
  height: 40px;
  background: ${color.lightGrey};
  padding: 0 .8em;
  border: ${props => props.error !== '' ? '1px solid red' : 'none'};
  color: ${color.grey};
  outline-color: ${color.accent};
  font-family: ${fontFamily.primary};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Option = styled.option`
  width: 100%;
  font-family: ${fontFamily.primary};
  font-size: 1.1rem;
  color: ${color.black};

  &::placeholder {
    color: ${color.grey};
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${color.black};
    color: ${color.white}
  }
`;

export const Error = styled.span`
  font-size: .8rem;
  color: red;
`;

export const Info = styled.span`
  font-size: .8rem;
`;