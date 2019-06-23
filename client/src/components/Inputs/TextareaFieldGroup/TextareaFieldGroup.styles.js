import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const TextareaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1em;

  @media ${device.laptop} {
    max-width: ${props => props.narrow ? '160px' : '100%'};
    max-width: ${props => props.narrow ? '0' : '1.1em'};
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: ${fontWeight.regular};
  margin-bottom: .3em;
`;

export const Textarea = styled.textarea`
  width: 290px;
  min-height: 100px;
  background: ${color.lightGrey};
  font-family: ${fontFamily.primary};
  font-size: 1.1rem;
  padding: .8em;
  border: none;
  color: ${color.black};
  border: ${props => props.error !== '' ? '1px solid red' : 'none'};
  outline-color: ${color.accent};

  &::placeholder {
    color: ${color.grey};
  }

  @media ${device.laptop} {
    min-width: 470px;
  }
`;

export const Error = styled.p`
  font-size: .8rem;
  color: red;
  min-width: 280px;
  text-align: center;
`;

export const Info = styled.p`
  font-size: .8rem;
`;