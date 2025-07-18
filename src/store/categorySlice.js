import { createSlice } from "@reduxjs/toolkit";

// Initialize category from localStorage or default to "all"
const getInitialCategory = () => {
  const savedCategory = localStorage.getItem("selectedProductCategory");
  return savedCategory || "all";
};

const categorySlice = createSlice({
  name: "category",
  initialState: {
    selectedCategory: getInitialCategory(),
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      // Save to localStorage whenever category changes
      localStorage.setItem("selectedProductCategory", action.payload);
    },
    syncFromUrl: (state, action) => {
      // This is used when we need to sync from URL without saving to localStorage again
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory, syncFromUrl } = categorySlice.actions;
export default categorySlice.reducer;
