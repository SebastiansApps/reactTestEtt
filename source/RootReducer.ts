import * as types from './Types';
import { IApplicationState } from './Types';
import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

// const PersistLoginReducer = persistReducer({ key: 'login', storage }, LoginReducer);

export default combineReducers<types.IApplicationState>({
// reducer name here
});