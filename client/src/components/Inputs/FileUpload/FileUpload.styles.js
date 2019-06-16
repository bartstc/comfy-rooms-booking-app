import styled from 'styled-components';

export const ImagePreview = styled.div`
  background: url(${props => props.url ? props.url : 'none'});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 300px;
  height: 200px;
  margin-top: .8em;
`;

export const UploadWrapper = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .95rem;
  margin-bottom: 1em;
  text-align: center;
`;

export const UploadIcon = styled.i`
  font-size: 3rem;
  margin-top: .3em;
`;