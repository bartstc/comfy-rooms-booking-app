import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;

  @media ${device.laptop} {
    max-width: ${props => props.narrow ? '80px' : 'auto'};
    margin: 0 .3em;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: ${fontWeight.regular};
  margin-bottom: .3em;
`;

export const Select = styled.select`
  width: 290px;
  height: 40px;
  background: ${color.lightGrey};
  padding: 0 .8em;
  border: ${props => props.error !== '' ? '1px solid red' : '1px solid #DAA520'};
  color: ${color.accent};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Option = styled.option`
  width: 100%;
  font-family: ${fontFamily.secondary};
  font-size: 1.1rem;
  color: ${color.accent};

  &::placeholder {
    color: ${color.accent};
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${color.accent};
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