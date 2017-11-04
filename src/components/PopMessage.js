import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  text-align: center;
  color: #cc0707;
  border-radius: 0px;
  box-shadow: 0px 0px 10px #ccc;
  padding: 5px 0;
  position: fixed;
  top: 25%;
  width:100%;
  z-index: 5;
  background: #fff;
`;

const PopMessage = (props) => {
  const {message} = props
  return(
      <Message>{message}</Message>
    )
}

export default PopMessage;