import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { initialState } from './reducers/initialState'


import 'config/globalStyle'
import App from 'components/App'

const logger = createLogger()

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

import { loadingPayments, fetchPayments, loadingCharities, fetchCharities } from './reducers/actions';

store.dispatch(loadingCharities());
store.dispatch(loadingPayments());
store.dispatch(fetchCharities());
store.dispatch(fetchPayments());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
