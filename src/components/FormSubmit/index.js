import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Button from 'static/Button';
import { InputWrapper, Label, FieldSet } from './FormSubmit';
import { text } from 'config/variables';

let Submit = props => {
    const { userConfirmValue, userConfirm } = props;
    return (
        <FieldSet className={'amount-options'}>
            <InputWrapper
                className={'input-wrapper'}
            >
                <Field
                    component={'input'}
                    type={'checkbox'}
                    id={'confirmDonation'}
                    name={'userConfirm'}
                    className={'input-checkbox'}
                />
                <Label
                    htmlFor={'confirmDonation'}
                >
                    {text.confirmPay}
                </Label>        
            </InputWrapper>
            {userConfirmValue &&
            <Button
                className={'btn-submit'}
                name={'submit'}
                type={'submit'}
            >
                {text.submitButton}
            </Button>
            }
        </FieldSet>   
    )
}

Submit = reduxForm({
    form: 'donationForm',
    destroyOnUnmount: false,
})(Submit)

const selector = formValueSelector('donationForm')

Submit = connect(
    state => {
        const userConfirmValue = selector(state, 'userConfirm');
        return {
            userConfirmValue
        }
    }
)(Submit);

export default Submit;