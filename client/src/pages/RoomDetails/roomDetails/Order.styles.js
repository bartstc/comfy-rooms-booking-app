import styled from 'styled-components';
import { fontWeight } from '../../../utils/styles';

export const Form = styled.form`
  width: 100%;
  max-width: 270px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.4em;
`;

export const Divider = styled.span`
  height: 1.4em;
`;

export const Info = styled.p`
  font-size: 1rem;
  line-height: 1.6em;
  width: 270px;
  margin: 0 auto;
  text-align: ${props => props.center ? 'center' : 'start'};
  font-weight: ${props => props.center ? fontWeight.bold : '300'};

  span {
    font-weight: ${fontWeight.bold};
  }
`;