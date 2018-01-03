import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputMask from 'react-simple-currency';
import Container from 'static/Container';
import Spinner from 'static/Spinner';
import { text } from 'config/variables';
import Headroom from 'react-headroom';

import { Header, Input, H1, InputWrapper, InnerWrap, Label, Legend } from './FormHeader';

let FormHeader = props => {
    const { payments, handleChange, parse } = props;
    payments.isLoading && <Spinner />
    return (
            <Headroom>
            <Header>
                <Container className={'header-container'}>
                    <H1><small>React</small>Tamboon</H1>
                    <InputWrapper className={'donations-counter'}>
                        <InputMask
                                id={'donationsCounter'}
                                name={'total'}
                                className={'counter-display'}
                                type={'number'}
                                precision={3}
                                separator={','}
                                delimiter={'.'}
                                unit={'TH฿'}
                                readOnly={true}
                                onInputChange={props.onMoneyInputChange}
                                value={+(payments.total)}
                            />
                            <Label htmlFor={'donationsCounter'}>
                                {text.totalDonations}
                            </Label>
                        </InputWrapper>
                    </Container>
                </Header>
            </Headroom>    
    )
}

FormHeader = connect(
    state => ({
        parse: value => +value,
        form: state.form.donationForm,
        payments: state.payments
    })
)(FormHeader)

FormHeader = reduxForm({
    form: 'donationForm'
})(FormHeader);

export default FormHeader;