import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataReducer } from './reducer';
import { createForms } from 'react-redux-form';
import { InitialForm } from './forms';



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        DataReducer,
        ...createForms({
          contactUsForm: InitialForm
        })
    }), 
    applyMiddleware()
  );

  return store;
  }

