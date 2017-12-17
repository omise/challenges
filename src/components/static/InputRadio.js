import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Label = styled.label`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.45;
    margin: 0;
    cursor: pointer;

    &:before {
        content: '';
        display: inline-block;
        vertical-align: text-top;
        margin-right: 9px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid blue;
        z-index: 0;
    }

    &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: blue;

        position: absolute;
        top: 5px;
        left: 3px;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
    }
`;

const Input = styled.input`
    display: block;
    vertical-align: middle;
    position: absolute;
    height: 18px;
    width: 18px;
    z-index: 9;
    opacity: 0;

`;

const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 18px;

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
  

