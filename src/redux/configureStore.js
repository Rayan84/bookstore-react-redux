import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, reduxThunk),
);

export default store;
