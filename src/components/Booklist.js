import React from 'react';
import AddNewBook from './AddNewBook';
import books from './Book';

const Booklist = (books) => (
  <div>
    books.map(book) => (
      <li key={book.id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button>Delete</button>
      </li>
    )
    <AddNewBook />
    <h1>Book List</h1>
  </div>
);
export default Booklist;
