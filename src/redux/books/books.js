import axios from 'axios';
import { v4 } from 'uuid';

const FETCH_BOOKS_REQUEST = 'bookStore/books/fetch_request';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/fetch_success';
const FETCH_BOOKS_FAILURE = 'bookStore/books/fetch_failure';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ne1lNPOcr1S2yLU5FAOd/books';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});
export const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});
export const fetchBooksFailure = (payload) => ({
  type: FETCH_BOOKS_FAILURE,
  payload,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .get(BASE_URL, { headers: {} })
    .then((response) => {
      const data = Object.entries(response.data).map(([itemId, [book]]) => ({
        id: itemId,
        title: book.title,
        category: book.category,
      }));
      dispatch(fetchBooksSuccess(data));
    })
    .catch((error) => {
      fetchBooksFailure(error.message);
    });
};

export const addBook = (payload) => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .post(BASE_URL, {
      item_id: v4(),
      title: payload.title,
      category: payload.category,
    })
    .then((response) => {
      if (response.data === 'Created') {
        dispatch(fetchBooks());
      }
    })
    .catch((error) => {
      fetchBooksFailure(error.message);
    });
};

export const removeBook = (payload) => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .delete(`${BASE_URL}/${payload.id}`)
    .then((response) => {
      if (response.data === 'The book was deleted successfully!') {
        dispatch(fetchBooks());
      }
    })
    .catch((error) => {
      fetchBooksFailure(error.message);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        error: action.payload,
        loading: false,
        books: [],
      };
    default:
      return state;
  }
};

export default reducer;
