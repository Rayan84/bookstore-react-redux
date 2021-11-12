import { React } from 'react';
// import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.values(state));
  const items = Object.values(books[0]);

  const handleDelete = (item) => {
    dispatch(removeBook(item));
  };

  return (
    <div>
      <Book />
      <h1>Book List</h1>
      <div>
        {items.map((book) => (
          <div key={book.id}>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <button type="button" onClick={() => { handleDelete(book.id); }}>Remove Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booklist;
