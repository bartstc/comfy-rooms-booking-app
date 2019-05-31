import styled from 'styled-components';
import { color, fontWeight, device, fontFamily } from '../../../utils/styles';

export const TextareaWrapper = styled.div`
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

export const Textarea = styled.textarea`
  width: 290px;
  min-height: 100px;
  background: ${color.lightGrey};
  font-family: ${fontFamily.secondary};
  font-size: 1.1rem;
  padding: .8em;
  border: none;
  color: ${color.accent};
  border: ${props => props.error !== '' ? '1px solid red' : '1px solid #DAA520'};

  &::placeholder {
    color: ${color.accent};
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