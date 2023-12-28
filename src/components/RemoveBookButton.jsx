import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/booksSlice";

const RemoveBookButton = () => {
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return <button onClick={handleRemoveBook}>Remove Book</button>;
};

export default RemoveBookButton;
