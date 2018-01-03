import styled from 'styled-components';
import { palette } from 'config/variables';

export const Header = styled.fieldset`
    position: relative;
    padding: 1px 0 0 0;
    margin: -1px 0 0 0;
    background: ${palette.grayBg};
    box-shadow: 0 -20px 50px ${palette.gray};
`

export const InnerWrap = styled.div`
    &:after {
        display: table;
        content: "";
        clear: both;
        width: 100%;
    }
`;

export const H1 = styled.h1`
    font-size: 63px;
    padding: 45px 0 9px;
    margin: 0;
    width: 10%;
    max-width: 280px;
    display: block;
    float: left;
    line-height: 1;
    color: ${palette.grayDark};

    & small {
        font-size: 16px;
        text-transform: uppercase;
        display: block;
        letter-spacing: 10px;
        color: ${palette.blueFlat};
    }
`;

export const InputWrapper = styled.div`
    display: block;
    float: right;
    text-align: right;
    padding: 45px 0 9px;

    input {
        border: none;
        margin: 0;
        display: block;
        float: right;
        padding: 0;
        max-width: 100%;
        text-align: right;
        font-size: 54px;
        background: transparent;
        color: ${palette.gray};
    }   
`

export const Label = styled.label`
    display: block;
    font-size: 14px;
    letter-spacing: 4px;
    margin: 5px 0 0;
    padding: 0;
    color: ${palette.blueFlat};
    text-transform: uppercase;
`;

