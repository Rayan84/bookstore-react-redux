// books.js

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [{
  title: 'title1',
  author: 'author1',
  id: 1,
},
{
  title: 'title2',
  author: 'author2',
  id: 2,
},
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([...state, action.payload]);
    case REMOVE_BOOK:
      return (state.filter((book) => book.id !== action.payload));
    default:
      return state;
  }
};

export default reducer;
