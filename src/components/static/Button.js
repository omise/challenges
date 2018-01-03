import styled from 'styled-components';
import {palette} from 'config/variables';

export default styled.button`
  background: transparent;
  color: ${palette.blueDark};
  border-color: ${palette.blueDark};
  transition: background 0.2s ease-in-out;
  transform: translateY(0);

  &:active {
    background: transparent;
    color: ${palette.blueDark};
  }

  &:hover,
  &:focus {
    background: ${palette.blueDark};
    color: white;
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    opacity: 0.4;
  }

`;