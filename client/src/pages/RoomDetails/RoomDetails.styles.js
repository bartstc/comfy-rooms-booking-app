import styled from 'styled-components';
import { color } from '../../utils/styles';

export const DetailsContainer = styled.article`
  padding: 0 .6em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5em 0;
`;

export const Key = styled.p`
  color: ${color.accent};
  text-transform: uppercase;
  font-size: .9rem;
  padding-right: .6em;
`;

export const Warning = styled.p`
  font-size: 1rem;
  line-height: 1.9em;
  text-transform: uppercase;
`;