import React from "react";
import { useSelector } from "react-redux";
import AddBookForm from "./AddBookForm";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/booksSlice";
import RemoveBookButton from "./RemoveBookButton";

const BookList = () => {
  const books = useSelector((state) => state.books.items);

  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <AddBookForm />
      <RemoveBookButton />
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <button
            onClick={() => {
              handleRemoveBook(book.id);
            }}
          >
            Remove Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
