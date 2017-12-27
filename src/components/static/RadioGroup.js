import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputRadio from 'static/InputRadio';

const Wrapper = styled.div`
`;

const RadioGroup = props => {
    const options = props.options;
    return (
        <Wrapper 
            className={props.className}
            options={[props.options]}
            onChange={props.onChange}
        >
            {options.map((option, i) => (
                <InputRadio
                    key={i}
                    optid={`opt-${props.name}-${option}`}
                    label={`${option}`}
                    value={option}
                    {...props} 
                />
            ))}
        </Wrapper>
    )
}

RadioGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOf([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object
    ])
}

export default RadioGroup;

