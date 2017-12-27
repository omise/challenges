import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.span`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default props => (
  <Wrapper className={'img-wrapper'}>
    <Img {...props} />
  </Wrapper>  
);