import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  addMealToFavorites,
  removeMealFromFavorites,
  clearFavorites,
} from "./actions";
import { FavoritesState } from "./slice";
import { parseMealIngredients } from "src/utils/parseMealIngredients";
import { IIngredient, IMeal } from "src/@types/meals";

type ActionReducerMapBuilderWithFavoritesState =
  ActionReducerMapBuilder<FavoritesState>;

export const addMealToFavoritesReducer = (
  builder: ActionReducerMapBuilderWithFavoritesState
) => {
  builder.addCase(addMealToFavorites.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(addMealToFavorites.fulfilled, (state, action) => {
    state.isLoading = false;
    state.meals.push(action.payload);
    state.combinedIngredients = combineIngredients(state.meals);
  });

  builder.addCase(addMealToFavorites.rejected, (state) => {
    state.isLoading = false;
  });
};

export const removeMealFromFavoritesReducer = (
  builder: ActionReducerMapBuilderWithFavoritesState
) => {
  builder.addCase(removeMealFromFavorites.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(removeMealFromFavorites.fulfilled, (state, action) => {
    state.isLoading = false;
    state.meals = state.meals.filter((meal) => meal.idMeal !== action.payload);
    state.combinedIngredients = combineIngredients(state.meals);
  });

  builder.addCase(removeMealFromFavorites.rejected, (state) => {
    state.isLoading = false;
  });
};

export const clearFavoritesReducer = (
  builder: ActionReducerMapBuilderWithFavoritesState
) => {
  builder.addCase(clearFavorites.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(clearFavorites.fulfilled, (state) => {
    state.isLoading = false;
    state.meals = [];
    state.combinedIngredients = [];
  });

  builder.addCase(clearFavorites.rejected, (state) => {
    state.isLoading = false;
  });
};

const combineIngredients = (meals: IMeal[]): IIngredient[] => {
  const ingredientsMap = new Map<string, string>();

  meals.forEach((meal) => {
    const ingredients = parseMealIngredients(meal);
    ingredients.forEach(({ name, measure }) => {
      if (ingredientsMap.has(name)) {
        ingredientsMap.set(name, ingredientsMap.get(name)! + ` + ${measure}`);
      } else {
        ingredientsMap.set(name, measure);
      }
    });
  });

  return Array.from(ingredientsMap, ([name, measure]) => ({ name, measure }));
};
