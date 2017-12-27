import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './globalStyle';
import App from 'components/App';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(
  applyMiddleware(
    thunk, 
    loggerMiddleware
  )
));

import { fetchCharities, fetchPayments, formAmountValueUpdated, formCharityIdUpdated, newPaymentReceived } from './actions';
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(fetchCharities());
store.dispatch(fetchPayments());
store.dispatch(formAmountValueUpdated());
store.dispatch(formCharityIdUpdated());
store.dispatch(newPaymentReceived());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
