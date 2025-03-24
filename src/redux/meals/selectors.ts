import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectMealsState = (state: RootState) => state.meals;

export const selectAllMeals = createSelector(
  selectMealsState,
  (mealsState) => mealsState.allMeals
);

export const selectMealById = createSelector(
  selectMealsState,
  (mealsState) => mealsState.mealById
);
