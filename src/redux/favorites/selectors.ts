import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFavoritesState = (state: RootState) => state.favorites;

export const selectAllFavoriteMeals = createSelector(
  selectFavoritesState,
  (favoritesState) => favoritesState.meals
);

export const selectCombinedIngredients = createSelector(
  selectFavoritesState,
  (favoritesState) => favoritesState.combinedIngredients
);
