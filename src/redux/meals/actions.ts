import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { NotificationService } from "src/helpers/notifications";
import { PATHNAMES } from "src/constants/routes";
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
        `/lookup.php?i=${id}`
      );

      if (!data.meals?.length) {
        history.replace(PATHNAMES.NOT_FOUND);
      }

      return data.meals[0];
    } catch ({ response }) {
      const errorText = response?.data?.error;

      NotificationService.error(errorText || "Meal fetching failed");

      return rejectWithValue(errorText);
    }
  }
);
