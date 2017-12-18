import styled from 'styled-components';
import { palette } from 'config/cssVars';
import React from 'react';
import PropTypes from 'prop-types';

const Label = styled.label`
    color: ${palette.gray};
    position: relative;
    padding-left: 20px;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top 0;
        bottom: 0;
        margin: auto;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 2px solid ${palette.blueDark};
        z-index: 0;
    }

    &:after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: ${palette.blue};

        position: absolute;
        top: 0px;
        left: 3px;
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
    height: 18px;
    width: 18px;
    z-index: 9;
    opacity: 0;
    cursor: pointer;
`;

const InputWrapper = styled.div`
    display: inline-block;
    position: relative;
    margin 0 5px;
    padding: 5px 0;

    & input[type=radio]:checked + label:after {
        opacity: 1;
    }
`;

const InputRadio = props => (
  <InputWrapper>
    <Input 
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      {...props}  
    />
    <Label 
      htmlFor={props.id}>
      {props.value}
    </Label>
  </InputWrapper>
);

export default InputRadio;

InputRadio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
}

InputRadio.defaultProps = {
  type: 'radio',
}
  

