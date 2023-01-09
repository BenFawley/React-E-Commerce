import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addProducts(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;

// will most likely remove this - only component that needs access to this is the category component so local state will be fine
