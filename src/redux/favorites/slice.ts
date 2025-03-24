import { createSlice } from "@reduxjs/toolkit";
import { IMeal, IIngredient } from "src/@types/meals";
import { FAVORITES_SLICE_NAME } from "./actions";
import {
  addMealToFavoritesReducer,
  removeMealFromFavoritesReducer,
  clearFavoritesReducer,
} from "./reducers";

export interface FavoritesState {
  meals: IMeal[];
  combinedIngredients: IIngredient[];
  isLoading: boolean;
}

const initialState: FavoritesState = {
  meals: [],
  combinedIngredients: [],
  isLoading: false,
};

export const { reducer: favorites } = createSlice({
  name: FAVORITES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    addMealToFavoritesReducer(builder);
    removeMealFromFavoritesReducer(builder);
    clearFavoritesReducer(builder);
  },
});
