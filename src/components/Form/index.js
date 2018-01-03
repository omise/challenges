import React from 'react';
import CharitiesList from 'components/CharitiesList';
import FormHeader from 'components/FormHeader';

import { connect } from 'react-redux';
import { Form, reduxForm, formValueSelector, reset, submit } from 'redux-form';
import { initialState } from 'reducers/initialState';
import { submitPayment } from 'reducers/actions/api';

let DonationForm = props => {
    const { handleSubmit } = props;
    return (
        <Form
            name={'donationForm'}
            onSubmit={handleSubmit}
        >
            <FormHeader />    
            <CharitiesList />
        </Form>
    )
}

DonationForm = reduxForm({
    form: 'donationForm',
    destroyOnUnmount: false,
    updateUnregisteredFields: false,
})(DonationForm);

const selector = formValueSelector('donationForm')
DonationForm = connect(
    state => {
        return {
            initialValues: initialState.formInitialValues.data,
            values: selector(state, 'charitiesId', 'amount', 'currency', 'total'),
        }
    },
    dispatch => ({
        onSubmit: (values) => {
            dispatch(submitPayment(values)); 
        }
    })     
)(DonationForm);

export default DonationForm;
