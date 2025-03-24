import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { NotificationService } from "src/helpers/notifications";
import { ICategoriesResponse } from "src/@types/categories";

export const CATEGORIES_SLICE_NAME = "categories";

export const getAllCategoriesAsync = createAsyncThunk(
  `${CATEGORIES_SLICE_NAME}/fetchAllCategories`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<ICategoriesResponse>(
        "/categories.php"
      );

      return data.categories;
    } catch ({ response }) {
      const errorText = response?.data?.error;

      NotificationService.error(errorText || "Categories fetching failed");

      return rejectWithValue(errorText);
    }
  }
);
