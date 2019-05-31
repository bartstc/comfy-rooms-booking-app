import styled from 'styled-components';
import { color, device } from '../../../utils/styles';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: .9em;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 1.5em;
  background: ${color.white};
  
  @media ${device.mobileL} {
    box-shadow: 2px 2px 5px 0px rgba(136,136,136,1);
  }

  @media ${device.laptop} {
    flex-direction: row;
    padding: 1.4em;
    max-width: 1200px;
  }
`;