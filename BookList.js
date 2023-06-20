import React from 'react';

const BookList = ({ books, onDelete }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>{book.title}</span>
          <span>{book.author}</span>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
