import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getAllCategoriesAsync } from "src/redux/categories/actions";
import {
  selectIsLoading,
  selectAllCategories,
} from "src/redux/categories/selectors";
import { Category } from "src/components/Category";
import { ErrorMessage } from "src/components/ErrorMessage";

export const Categories: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const categories = useAppSelector(selectAllCategories);

  useEffect(() => {
    if (categories === null) {
      dispatch(getAllCategoriesAsync());
    }
  }, [dispatch, categories]);

  return (
    <section>
      <div className="container py-5">
        {isLoading ? (
          <div>Loading categories...</div>
        ) : (
          Boolean(categories?.length) && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Category key={category.idCategory} {...category} />
              ))}
            </div>
          )
        )}

        {(categories === undefined ||
          (Array.isArray(categories) && categories?.length === 0)) && (
          <ErrorMessage>Categories not found!</ErrorMessage>
        )}
      </div>
    </section>
  );
};
