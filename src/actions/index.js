import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../helpers';
import * as types from '../constants/actionTypes';

const receiveCharities = items => ({
    type: types.FETCH_CHARITIES_SUCCESS,
    items: items
})

const fetchCharitiesJson = () => (
    fetch(`http://localhost:3001/charities`)
        .then(response => response.json())
);

export const fetchCharityById = (id) => (
    dispatch => fetchCharitiesJson()
        .then(items => items.find(item => item.id === id)))

export const fetchCharities = () => (
    dispatch => fetchCharitiesJson()
        .then(items => dispatch(receiveCharities(items)))
);

export const formCharityIdUpdated = (charitiesId) => ({
    type: types.FORM_ID_VALUE_UPDATED,
    charitiesId
});

export const formAmountValueUpdated = (amount) => ({
    type: types.FORM_AMOUNT_VALUE_UPDATED,
    amount
})

export const selectAmount = (amount) => ({
    type: types.AMOUNT_IS_SELECTED,
    amount,
});

// Actions Donation - Fetching Data

const receiveAllPayments = (payments, amounts) => ({
    type: types.FETCH_PAYMENTS_SUCCESS,
    payments,
    amounts: payments.map(payment => payment.amount).reduce((x, y) => x + y)
});

const fetchPaymentsJson = () => (
    fetch('http://localhost:3001/payments')
        .then(response => response.json())
);

export const fetchPayments = () => (
    dispatch => fetchPaymentsJson()
        .then(payments => dispatch(receiveAllPayments(payments)))
);

// Actions Donation - New Donation

export const newPaymentReceived = (charitiesId, amount) => ({
    type: types.NEW_PAYMENT_RECEIVED,
    charitiesId,
    amount
});


