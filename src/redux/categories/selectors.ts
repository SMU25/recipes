import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCategoriesState = (state: RootState) => state.categories;

export const selectIsLoading = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.isLoading
);

export const selectAllCategories = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.data
);
