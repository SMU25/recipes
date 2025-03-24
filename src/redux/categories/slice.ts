import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "src/@types/categories";
import { IAsyncResource } from "src/@types/api";
import { CATEGORIES_SLICE_NAME } from "./actions";
import { getAllCategoriesReducer } from "./reducers";

export type CategoriesState = IAsyncResource<ICategory[]>;

const initialState: CategoriesState = {
  isLoading: false,
  data: null,
};

export const { reducer: categories } = createSlice({
  name: CATEGORIES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getAllCategoriesReducer(builder);
  },
});
