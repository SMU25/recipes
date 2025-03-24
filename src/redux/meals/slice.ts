import { createSlice } from "@reduxjs/toolkit";
import { IMeal } from "src/@types/meals";
import { IAsyncResource } from "src/@types/api";
import { MEALS_SLICE_NAME } from "./actions";
import { getAllMealsReducer, getMealByIdReducer } from "./reducers";

export type MealsState = {
  allMeals: IAsyncResource<IMeal[]>;
  mealById: IAsyncResource<IMeal>;
};

const initialState: MealsState = {
  allMeals: {
    isLoading: false,
    data: null,
  },

  mealById: {
    isLoading: false,
    data: null,
  },
};

export const { reducer: meals } = createSlice({
  name: MEALS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getAllMealsReducer(builder);
    getMealByIdReducer(builder);
  },
});
