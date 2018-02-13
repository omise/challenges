import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as types from './actionTypes';
import { initialState } from './initialState';

const formInitialValues = ( state = initialState.formInitialValues, action ) => {
    switch (action.type) {
        case types.LOAD_INITIAL_FORM_DATA:
            return {
                data: action.data,
            }
        default:
            return state
    }
}

const payments = ( state = initialState.payments, action ) => {
    switch (action.type) {
        case types.LOADING_PAYMENTS_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case types.RECEIVED_PAYMENTS_DATA:
            return {
                ...state,
                isLoading: !state.isLoading,
                items: action.items,
                total: action.total,
            }
        case types.NEW_DONATION_PAYMENT_RECEIVED: 
            return {
                ...state,
                total: action.amount
            }
        default:
            return state
    }
}

const charities = ( state = initialState.charities, action ) => {
    switch (action.type) {
        case types.LOADING_CHARITIES_DATA:
            return {
                ...state,
            }
        case types.RECEIVED_CHARITIES_DATA: 
            return {
                ...state,
                isLoading: !state.isLoading,
                items: action.items,
            }
        
        default:
            return state
        }
    }


const rootReducer = combineReducers({
    payments,
    // total,
    charities,
    formInitialValues,
    form: formReducer
});

export default rootReducer;
