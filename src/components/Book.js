import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();
  const { data } = props;
  return (
    <div>
      <Row className="m-5 border border-2 bg-white">
        <Col className="p-4 m-auto">
          <h5>{data.title}</h5>
          {' '}
          <h6>{data.category}</h6>
        </Col>
        <Col className="p-4 m-auto"><Button onClick={() => { dispatch(removeBook(data)); }} className="bg-danger border border-0">Remove</Button></Col>
      </Row>
    </div>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
