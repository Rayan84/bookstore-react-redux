import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addBook, fetchBooks } from '../redux/books/books';
import './App.css';

export default function BookContainer() {
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
        <>
          <div className="book-container">
            {books.books === undefined || books.books.length === 0 ? (
              <h2 className="text-center fw-bold mt-5">No Books Found..</h2>
            ) : (
              books.books.map((item) => (
                <Book data={item} key={item.id} />
              ))

            )}
          </div>
          <hr className="container" />
          <div className="container">
            <h2 className="mt-2 fw-bold text-secondary fs-4">ADD NEW BOOK</h2>
            <Form className="d-lg-flex mt-3" onSubmit={addNewBook}>
              <Col className="me-3 col-6"><Form.Control onChange={handleFormInput} value={value.title} type="text" className="p-2" placeholder="Book title" name="title" required /></Col>
              <Col className="me-3 col-4">
                <Form.Select aria-label="Default select example" onChange={handleFormInput} className="p-2" placeholder="Category" type="text" name="category" required>
                  <option value="" hidden>Category</option>
                  <option value="Fiction" className="text-secondary">Fiction</option>
                  <option value="Business" className="text-secondary">Business</option>
                  <option value="Thriller" className="text-secondary">Thriller</option>
                </Form.Select>
              </Col>
              <Col className="m-auto">
                <Button type="submit" className="px-5 fw-bold text-light rounded-0">
                  ADD BOOK
                </Button>
              </Col>
            </Form>
          </div>
        </>
      )
        : (<Spinner animation="grow" className="spinner" size="lg" />)}
    </>
  );
}
