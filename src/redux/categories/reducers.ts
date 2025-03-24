import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getAllCategoriesAsync } from "./actions";
import { CategoriesState } from "./slice";

type ActionReducerMapBuilderWithCategoriesState =
  ActionReducerMapBuilder<CategoriesState>;

export const getAllCategoriesReducer = (
  builder: ActionReducerMapBuilderWithCategoriesState
) => {
  builder.addCase(getAllCategoriesAsync.pending, (state) => {
    state.isLoading = true;
    state = null;
  });

  builder.addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  });

  builder.addCase(getAllCategoriesAsync.rejected, (state) => {
    state.isLoading = false;
    state = undefined;
  });
};
