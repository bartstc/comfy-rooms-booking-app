import styled from 'styled-components';
import DatePicker from "react-datepicker";

import { color, fontWeight, device, fontFamily } from '../../../utils/styles';
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerWrapper = styled.div`
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

export const ReactDatePicker = styled(DatePicker)`
  width: 290px;
  height: 38px;
  background: ${color.lightGrey};
  font-family: ${fontFamily.secondary};
  font-size: 1.1rem;
  border: none;
  color: ${color.accent};
  padding-left: .8em;
  border: ${props => props.error !== '' ? '1px solid red' : 'none'};

  @media ${device.laptop} {
    width: 100%;
  }

  &.day {
    background: ${color.black};
  }
`;

export const Error = styled.span`
  font-size: .8rem;
  color: red;
`;

export const Info = styled.span`
  font-size: .8rem;
`;