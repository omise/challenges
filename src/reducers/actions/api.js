import fetch from 'isomorphic-fetch';
import { reset } from 'redux-form';
import { fetchPayments } from 'reducers/actions';
import * as types from 'reducers/actionTypes';



export const PAYMENTS_API = '//localhost:3001/payments';
export const CHARITIES_API = '//localhost:3001/charities';

// Save new payments data

export const submitPaymentError = (error) => {
    return { error, type: types.SUBMIT_PAYMENT_ERROR }
}

export const submitPaymentSuccess = (response) => {
    return dispatch => {
        dispatch({ response, type: types.SUBMIT_PAYMENT_DATA_SUCCESS })
        dispatch(fetchPayments())
        setTimeout(() => {
            dispatch(reset('donationForm'))
        }, 3000)
    }
}    

export const submittingPayment = (values) => {
    dispatch({values, type: SUBMITTING_PAYMENT_DATA })
}


export const submitPayment = (values) => {
    return dispatch => 
        fetch(PAYMENTS_API, ({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },    
            body: JSON.stringify({
                "charitiesId": values.charitiesId,
                "amount": values.amount,
                "currency": values.currency
            }),
        }))
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                dispatch(submitPaymentSuccess(response))
            }
            else {
                const error = new Error(response(statusText))
                error.response = response;
                dispatch(submitPaymentError(error));
                throw error;
            }
        })
        .then(json => console.log('Parsed JSON: ', json))
        .catch(error => console.log('Parsing Failed! ', error))
    }






