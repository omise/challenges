import { applyMiddleware, createStore }  from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

export default createStore(reducer, applyMiddleware(thunk, logger));