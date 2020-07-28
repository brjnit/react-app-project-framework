import {combineReducers} from 'redux';
import LoadingReducer from './loadingReducer';

export const rootReducer = combineReducers({
   loading: LoadingReducer
});