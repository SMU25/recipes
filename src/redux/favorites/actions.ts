import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMeal } from "src/@types/meals";
import { NotificationService } from "src/helpers/notifications";

export const FAVORITES_SLICE_NAME = "favorites";

export const addMealToFavorites = createAsyncThunk(
  `${FAVORITES_SLICE_NAME}/addMealToFavorites`,
  async (meal: IMeal, { rejectWithValue }) => {
    try {
      //business logic

      return meal;
    } catch (error) {
      NotificationService.error("Failed to add meal to favorites");
      return rejectWithValue("Failed to add meal to favorites");
    }
  }
);

export const removeMealFromFavorites = createAsyncThunk(
  `${FAVORITES_SLICE_NAME}/removeMealFromFavorites`,
  async (mealId: string, { rejectWithValue }) => {
    try {
      //business logic

      return mealId;
    } catch (error) {
      NotificationService.error("Failed to remove meal from favorites");
      return rejectWithValue("Failed to remove meal from favorites");
    }
  }
);

export const clearFavorites = createAsyncThunk(
  `${FAVORITES_SLICE_NAME}/clearFavorites`,
  async (_, { rejectWithValue }) => {
    try {
      //business logic
      //   return [];
    } catch (error) {
      NotificationService.error("Failed to clear favorites");

      return rejectWithValue("Failed to clear favorites");
    }
  }
);
