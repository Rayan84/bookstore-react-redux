import { React, useState } from 'react';
import { v4 as numGenerate } from 'uuid';
import { useDispatch } from 'react-redux';
// import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const submitBookToStore = () => {
    const newBook = {
      id: numGenerate(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  //  submitBookToStore();
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input type="text" id="title" onChange={handleAuthorChange} />
        </label>
        <label htmlFor="author">
          <input type="text" id="author" onChange={handleTitleChange} />
        </label>
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
};
export default Book;
