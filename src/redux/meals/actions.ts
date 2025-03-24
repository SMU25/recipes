import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { NotificationService } from "src/helpers/notifications";
import { IMealsResponse } from "src/@types/meals";

export const MEALS_SLICE_NAME = "meals";

interface GetAllMealsParams {
  query?: string;
}

export const getAllMealsAsync = createAsyncThunk(
  `${MEALS_SLICE_NAME}/fetchAllMeals`,
  async ({ query = "" }: GetAllMealsParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IMealsResponse>(
        `/search.php?s=${query}`
      );

      return data.meals;
    } catch ({ response }) {
      const errorText = response?.data?.error;

      NotificationService.error(errorText || "Meals fetching failed");

      return rejectWithValue(errorText);
    }
  }
);

export const getMealByIdAsync = createAsyncThunk(
  `${MEALS_SLICE_NAME}/fetchMealById`,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IMealsResponse>(
        `/lookup.php?i=52772${id}`
      );

      return data.meals[0];
    } catch ({ response }) {
      const errorText = response?.data?.error;

      NotificationService.error(errorText || "Meal fetching failed");

      return rejectWithValue(errorText);
    }
  }
);
