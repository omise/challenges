import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border-color: transparent;
  width: auto;
  box-shadow: none;
  background: transparent;
  border-color: transparent;
  display: inline-block;
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 10px;
`;

const Wrapper = styled.div`
`;

const InputNumber = props => (
  <Wrapper className={'input-group'}>
    <Label 
      htmlFor={props.id}
    >
      {props.label}
    </Label>
    <Input
      id={props.id}
      type={props.type}
      isReadOnly={props.isReadOnly}
      value={props.value}
      lang={props.lang}
      onChange={props.onChange}
    />
  </Wrapper>  
);

export default InputNumber;

InputNumber.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  isReadOnly: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
  lang: PropTypes.string,
};

InputNumber.defaultProps = {
  type: 'number',
};

