import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
  });

  const uniqueId = () => parseInt(Date.now() * Math.random()).toString();

  const handleAddBook = () => {
    // validate newBook
    dispatch(addBook({ ...newBook, id: uniqueId() }));
    setNewBook({ title: "", author: "", category: "" });
  };

  return (
    <div>
      {/* form inputs for newBook */}
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBookForm;
