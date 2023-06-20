import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './bookform';
import BookList from './BookList';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post('/api/books', book);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`/api/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add Book</h2>
      <BookForm initialValues={{ title: '', author: '' }} onSubmit={addBook} />
      <h2>Book List</h2>
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default AdminDashboard;
