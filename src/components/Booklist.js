import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addBook, fetchBooks } from '../redux/books/books';
import './App.css';

export default function Booklist() {
  const [value, setValue] = useState({
    title: '',
    category: '',
  });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(value));
    setValue({ title: '', category: '' });
  };
  const handleFormInput = (e) => {
    const inputName = e.target.name;
    setValue({ ...value, [inputName]: e.target.value });
  };

  return (
    <>
      {books.loading !== true ? (
        <div className="book-container">
          {books === undefined || books.length === 0 ? (
            <h2 className="text-center fw-bold mt-5">No Books Found..</h2>
          ) : (
            books.books.map((item) => (
              <Book data={item} key={item.id} />
            ))

          )}
        </div>
      ) : (<Spinner animation="grow" className="m-auto" size="lg" />)}
      <hr />
      <h2 className="ms-5 m-2 ps-2">Add Book</h2>
      <Form className="d-lg-flex ms-5" onSubmit={addNewBook}>
        <Col className="m-3"><Form.Control onChange={handleFormInput} value={value.title} type="text" placeholder="Book title" className="p-3 me-3" name="title" required /></Col>
        <Col className="m-3"><Form.Control onChange={handleFormInput} value={value.category} type="text" placeholder="Category" className="p-3 me-3" name="category" required /></Col>
        <Col className="m-auto">
          <Button variant="primary" type="submit">
            Add book
          </Button>
        </Col>
      </Form>
    </>
  );
}
