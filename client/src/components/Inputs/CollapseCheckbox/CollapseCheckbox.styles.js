import styled from 'styled-components';
import { color } from '../../../utils/styles';

export const CheckboxWrapper = styled.div`
  width: 100%;

  .checkbox {
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

  .list-item {
    padding: 10px 0;
  }

  .title {
    padding: 10px 23px 10px 0;
    text-transform: uppercase;
  }
`;