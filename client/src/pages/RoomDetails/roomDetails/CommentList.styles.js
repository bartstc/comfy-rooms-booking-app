import styled from 'styled-components';
import { device, color, fontFamily, fontWeight } from '../../../utils/styles';

export const Comments = styled.ul`
  max-width: 800px;
`;

export const Comment = styled.li`
  margin-top: 1.1em;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Rating = styled.p`
  background: ${color.accent};
  border-radius: 4px;
  color: ${color.white};
  font-weight: ${fontWeight.bold};
  padding: .2em;
  font-size: 1rem;
  margin-right: .6em;
`;

export const UserName = styled.p`
  font-weight: ${fontWeight.bold};
  font-size: 1.1rem;
`;

export const CommentText = styled.p`
  font-family: ${fontFamily.secondary};
  font-weight: ${fontWeight.light};
  font-size: .9rem;
  line-height: 1.5em;
  margin-top: .25em;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`;