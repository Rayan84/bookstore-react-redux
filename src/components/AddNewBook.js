import React from 'react';

const AddNewBook = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input type="text" id="title" />
        </label>
        <label htmlFor="author">
          <input type="text" id="author" />
        </label>
        <input type="submit" />

      </form>
    </div>
  );
};

export default AddNewBook;
