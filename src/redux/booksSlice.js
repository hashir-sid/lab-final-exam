import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [
      {
        item_id: "item1",
        title: "The Great Gatsby",
        author: "John Smith",
        category: "Fiction",
      },
      {
        item_id: "item2",
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        category: "Fiction",
      },
      {
        item_id: "item3",
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "Nonfiction",
      },
    ],
  },

  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
    removeBook: (state, action) => {
      state.items = state.items.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
