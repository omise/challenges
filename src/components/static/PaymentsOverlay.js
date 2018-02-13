import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import ScreenReader from 'static/ScreenReader';
import ButtonClose from 'static/ButtonClose';
import Overlay from 'static/Overlay';
import Message from 'static/Message';
import Spinner from 'static/Spinner';
import Submit from 'components/FormSubmit';
import Payments from 'components/Payments';
import { text } from 'config/variables';

let PaymentOverlay = props => {
    const { submitting, submitSucceeded, reset } = props;
    return (
        <Overlay className={'payments-overlay'}>
            <ButtonClose 
                onClick={reset}
            >
                <span className={'SR'}>
                    {text.resetForm}
                </span>
            </ButtonClose>        
            {submitting && 
                <Spinner />}
            {submitSucceeded ?  
                <Message /> :
                    <div>
                        <Payments />
                        <Submit />
                    </div>}  
        </Overlay>
    )
};

PaymentOverlay = connect(
    state => ({
        form: state.form.donationForm,
    })
)(PaymentOverlay);

PaymentOverlay = reduxForm({
    form: 'donationForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(PaymentOverlay);

export default PaymentOverlay;


