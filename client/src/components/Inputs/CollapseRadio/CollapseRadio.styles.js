import styled from 'styled-components';
import { color } from '../../../utils/styles';

export const RadioWrapper = styled.div`

  .radio {
    color: ${color.accent};

    &:checked {
      background: ${color.accent};
    }
  }

  .fas {
    color: ${color.accent};
  }

  .list {
    border-bottom: 1px solid #ccc;
  }

  .title {
    padding: 10px 23px 10px 0;
    text-transform: uppercase;
  }
`;