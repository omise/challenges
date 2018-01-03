import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { text } from 'config/variables';

import {RadioGroup, InputWrapper, Label} from './Payments';

let Payments = props => {
    const { form, input, parse } = props; 
    const amounts = [10, 20, 50, 100, 500, 1000].map(Number);
        !form && <Spinner /> 
        return (
            <RadioGroup className={'amount-opts'}>
                <h2>{text.selectDonation}</h2>
                {amounts.map((amount, i) => (
                    <InputWrapper
                        key={i}
                        className={'input-radio'}
                    >
                        <Field
                            component={'input'}
                            type={'radio'}
                            name={'amount'}
                            id={`opt-pay${amount}`}
                            value={amount}
                            parse={parse}
                            checked={form.values.amount === amount}
                            {...input}
                        />
                        <Label
                            htmlFor={`opt-pay${amount}`}>
                            {amount}
                        </Label>    
                    </InputWrapper>
                ))}
                <Field
                    component={'input'}
                    type={'hidden'}
                    name={'currency'}
                    value={'THB'}
                    />
            </RadioGroup>
        )
}

Payments.propTypes ={
    value: PropTypes.number
}

Payments = connect(
    state => ({
        parse: value => +value,
        form: state.form.donationForm,
    })
)(Payments);

Payments = reduxForm({
    form: 'donationForm',
    destroyOnUnmount: false,
})(Payments)

export default Payments;
