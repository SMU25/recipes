import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { categories } from "./categories/slice";
import { meals } from "./meals/slice";

export const store = configureStore({
  reducer: combineReducers({
    categories,
    meals,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
