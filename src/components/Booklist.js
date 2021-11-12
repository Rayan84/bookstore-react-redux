import { React } from 'react';
// import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.values(state));
  console.log(books);
  console.log(books);
  console.log(Object.values(books[0]));
  const items = Object.values(books[0]);
  console.log(items);

  const handleDelete = (item) => {
    console.log('+++++++');
    console.log(item);
    dispatch(removeBook(item));
  };

  return (
    <div>
      <Book />
      <h1>Book List</h1>
      <div>
        {/* {items.map((book) => (
          <ul key={book.id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button type="button" onClick={() => { handleDelete(book.id); }}>Remove Book</button>
          </ul>
        ))} */}
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
