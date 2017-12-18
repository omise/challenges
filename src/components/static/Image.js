import styled from 'styled-components';
import React from 'react';

const Figure = styled.figure`
  width: 100%;
  height: 300px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default props => (
  <Figure>
    <Img {...props} />
  </Figure>  
);