import fetch from 'isomorphic-fetch';
import {PAYMENTS_API, CHARITIES_API} from './api'
import * as types from 'reducers/actionTypes';

// Form Initial Data

export const loadInitialFormData = (data) => ({ 
    type: types.LOAD_INITIAL_FORM_DATA, 
    data
});


// Charities Data

const fetchCharitiesJson = () => (
    fetch(CHARITIES_API)
        .then(response => response.json())
);

export const fetchCharities = () => (
    dispatch => fetchCharitiesJson()
        .then(items => dispatch(receivedCharities(items)))
)

export const loadingCharities = () => ({
    type: types.LOADING_CHARITIES_DATA,
    isLoading: true,
})

const receivedCharities = (items) => ({
    type: types.RECEIVED_CHARITIES_DATA,
    items
});

// Payments

const fetchPaymentsJson = () => (
    fetch(PAYMENTS_API)
        .then(response => response.json())
)

export const loadingPayments = () => ({
    type: types.LOADING_PAYMENTS_DATA,
    isLoading: true
})

export const fetchPayments = () => (
    dispatch => fetchPaymentsJson()
        .then(payments => dispatch(receivedPayments(payments)))
)

const receivedPayments = (items, amount) => ({
    type: types.RECEIVED_PAYMENTS_DATA,
    items,
    total: items.map(item => item.amount).reduce((x,y) => x + y)   
})

/* export const fetchPaymentsAmount = () => (
    dispatch => fetchPaymentsJson()
        .then(payments => payments)
        .then(payments => payments.map(payment => payment.amount))
        .then(amount => dispatch(receivedTotalDonations(amount)))
) */








