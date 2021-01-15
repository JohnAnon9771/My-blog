import { AiOutlineMenu } from 'react-icons/ai';

import styled from 'styled-components';

export const Button = styled(AiOutlineMenu)`
  @media (min-width: 522px) {
    display: none;
  }

  &.menu-toggle {
    &.on {
      position: absolute;

      top: 53px;
      right: 33px;
    }
  }
`;
