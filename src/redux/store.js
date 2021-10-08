import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataReducer } from './reducer';
import { createForms } from 'react-redux-form';



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        DataReducer
    }), 
    applyMiddleware()
  );

  return store;
  }

