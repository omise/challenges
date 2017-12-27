import { combineReducers } from 'redux';
import { initialState } from './initialState';
import * as types from '../constants/actionTypes';

import { reducer as formReducer } from 'redux-form'

const SELECT_CHARITY = 'SELECT_CHARITY';

export const donationForm = (state = initialState.donationForm, action ) => {
    switch (action.type) {
        case types.FETCHING_FORM_DATA:
            return {
                ...state,
                isLoading: state.isLoading
            }
        case types.FETCH_FORM_DATA_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoadning,
                values: [
                    ...state,
                    {
                        items: action.items,
                        payments: action.payments
                    }
                ]        
            }
        case types.UPDATE_FORM_DATA:
            return {
                ...state,
                values: [
                    ...state,
                    {
                        charityId: action.charityId,
                        amount: action.amount,
                    }
                ]
            }
    }
}


/* export const charities = (state = initialState.charities, action ) => {
    switch (action.type) {
        case types.FETCHING_CHARITIES:
            return {
                ...state,
                isLoading: true,
            }
        case types.FETCH_CHARITIES_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoading,
                items: action.items,
            }
        case types.CHARITY_IS_SELECTED:
            return {
                ...state,
                charitiesId: action.charitiesId,
            }
        default:
            return state
    }
};

export const donations = (state = initialState.donations, action ) => {
    switch (action.type) {
        case types.FETCHING_PAYMENTS:
            return {
                ...state,
                isLoading: true,
            }
        case types.FETCH_PAYMENTS_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoading,
                payments: action.payments,
                amounts: action.amounts
            }
        case types.AMOUNT_IS_SELECTED:
            return {
                ...state,
                amount: action.amount,
            }
        default:
            return state    
    }
}

export const charityForm = (state = initialState.charityForm, action ) => {
    switch (action.type) {
        case types.FORM_ID_VALUE_UPDATED:
            return {
                ...state,
                charitiesId: action.charitiesId,
            }
        case types.FORM_AMOUNT_VALUE_UPDATED:
            return {
                ...state,
                amount: action.amount
            }
        default: 
            return state;
    }
}
 */
export default combineReducers({
    donationForm
});