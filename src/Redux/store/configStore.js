import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from '../reducers/rootReducer'

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, compose(middleware))