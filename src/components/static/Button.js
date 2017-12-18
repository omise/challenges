import styled from 'styled-components';
import {palette} from 'config/cssVars';

export default styled.button`
  background: transparent;
  color: ${palette.blueDark};
  border-color: ${palette.blue};
  transition: background 0.2s ease-in-out;
  transform: translateY(0);

  &:focus {
    background: transparent;
    color: ${palette.blueDark};
  }

  &:hover {
    background: ${palette.blueDark};
    color: white;
  }

  &:active {
    transform: translateY(2px);
  }

`;