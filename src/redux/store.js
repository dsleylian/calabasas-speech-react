import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataReducer } from './reducer';
import { createForms } from 'react-redux-form';
import { InitialForm } from './forms';
import { commentsReducer } from './commentsReducer';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        DataReducer,
        commentsReducer,
        ...createForms({
          contactUsForm: InitialForm
        })
    }), 
    applyMiddleware()
  );

  return store;
  }

