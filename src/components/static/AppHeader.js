import React from 'react';
import styled from 'styled-components';
import Container from 'static/Container';
import Counter from 'components/Counter';

const Header = styled.header`
    position: relative;
    padding: 1px 0 0 0;
    margin: -1px 0 0 0;
`

export default props => (
    <Header 
        className={'app-header'}
    >
        <Container className={'container'}>
            <h1>{'Tamboon React'}</h1>
            <Counter
                value={props.value}              
            />
        </Container>
    </Header>
) 
