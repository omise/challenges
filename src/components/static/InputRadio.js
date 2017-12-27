import styled from 'styled-components';
import { palette } from 'config/cssVars';
import React from 'react';
import PropTypes from 'prop-types';

const Label = styled.label`
    color: ${palette.gray};
    position: relative;
    display: block;
    margin: 5px 0;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        left: 0;
        top 0;
        bottom: 0;
        margin: 5px auto;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 2px solid ${palette.blueDark};
        z-index: 0;
    }

    &:after {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background: ${palette.blue};

        position: absolute;
        top: -26px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
    }
`;

const Input = styled.input`
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

const InputWrapper = styled.div`
    display: inline-block;
    width: 45px;
    position: relative;
    margin 0 5px;
    padding: 5px 0;

    & input[type=radio]:checked + label:after {
        opacity: 1;
    }
`;

const InputRadio = props => (
    <InputWrapper className={'input-radio'}>
        <Input
            type={'radio'}
            name={props.name}
            id={props.optid}
            {...props}
        />
        <Label 
            htmlFor={props.optid}>
        {props.label}
        </Label>
    </InputWrapper>
);

InputRadio.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default InputRadio;
  

