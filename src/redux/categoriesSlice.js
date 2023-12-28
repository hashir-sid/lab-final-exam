import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { items: [] },
  reducers: {
    // add any category-related actions here if needed
  },
});

export default categoriesSlice.reducer;
