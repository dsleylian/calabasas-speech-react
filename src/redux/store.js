import { createStore, combineReducers } from 'redux';
import {reducer } from './reducer';
import { createForms } from 'react-redux-form';


const store = createStore(reducer);


export default store;