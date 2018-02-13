import React from 'react';
import styled, { keyframes } from 'styled-components';
import { palette } from 'config/variables';

const skBounceDelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 18px;
  text-align: center;

  .spinner-bounce,
  .spinner-bounce:before,
  .spinner-bounce:after {
    background-color: ${palette.blue};
    opacity: 0.8;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: block;
    animation: ${skBounceDelay} 1.4s infinite ease-in-out both;
  }

  .spinner-bounce {
    position: relative;
  }

  .spinner-bounce:before,
  .spinner-bounce:after {
    position: absolute;
  }

  .spinner-bounce:after {
    left: 96%;
  }

  .spinner-bounce:before {
    right: -186%;
  }

  .spinner-bounce:before {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner-bounce:after {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

export default () => (
  <Spinner className="spinner">
    <div className="spinner-bounce"></div>
  </Spinner>
);
