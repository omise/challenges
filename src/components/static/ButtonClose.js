import React from 'react';
import styled from 'styled-components';
import { palette } from 'config/variables';

export default styled.button`
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    position: relative;
    text-align: center;
    border: none;
    background: transparent;
    position: absolute;
    top: 9px;
    right: 5px;

    &:before,
    &:after {
        content: '';
        width: 1px;
        height: 100%;
        background: ${palette.gray};
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        opacity: 0.5;
    }

    &:after {
        transform: rotate(90deg);
    }

    &:hover:before,
    &:hover:after {
        opacity: 1;
    }
`;