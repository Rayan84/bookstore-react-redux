import React from 'react';
import Book from './Book';

const Booklist = () => {
  const books = [
    {
      title: 'The title',
      author: 'The author',
      id: 1,
    },
  ];
  return (
    <div>
      <Book />
      <h1>Book List</h1>
      <div>
        {books.map((book) => (
          <ul key={book.id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Booklist;
