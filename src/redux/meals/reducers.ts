import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getAllMealsAsync, getMealByIdAsync } from "./actions";
import { MealsState } from "./slice";

type ActionReducerMapBuilderWithMealsState =
  ActionReducerMapBuilder<MealsState>;

export const getAllMealsReducer = (
  builder: ActionReducerMapBuilderWithMealsState
) => {
  builder.addCase(getAllMealsAsync.pending, (state) => {
    state.allMeals.isLoading = true;
    state.allMeals.data = null;
  });

  builder.addCase(getAllMealsAsync.fulfilled, (state, action) => {
    state.allMeals.isLoading = false;
    state.allMeals.data = action.payload;
  });

  builder.addCase(getAllMealsAsync.rejected, (state) => {
    state.allMeals.isLoading = false;
    state.allMeals = undefined;
  });
};

export const getMealByIdReducer = (
  builder: ActionReducerMapBuilderWithMealsState
) => {
  builder.addCase(getMealByIdAsync.pending, (state) => {
    state.mealById.isLoading = true;
    state.mealById.data = null;
  });

  builder.addCase(getMealByIdAsync.fulfilled, (state, action) => {
    state.mealById.isLoading = false;
    state.mealById.data = action.payload;
  });

  builder.addCase(getMealByIdAsync.rejected, (state) => {
    state.mealById.isLoading = false;
    state.mealById.data = undefined;
  });
};
