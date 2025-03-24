import React, { FC, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { getAllMealsAsync } from "src/redux/meals/actions";
import { selectAllMeals } from "src/redux/meals/selectors";
import { MealCard } from "src/components/MealCard";
import { Pagination } from "src/components/Pagination";
import { ErrorMessage } from "src/components/ErrorMessage";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";

const ITEMS_PER_PAGE = 12;
const SEARCH_DEBOUNCE_DELAY = 1000;

export const Meals: FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, data } = useAppSelector(selectAllMeals);

  const { getQueryParam, setQueryParam } = useQueryParams();

  const searchQuery = getQueryParam(QUERY_PARAM_KEYS.QUERY) || "";
  const [debouncedSearchQuery] = useDebounce(
    searchQuery,
    SEARCH_DEBOUNCE_DELAY
  );

  const page = Number(getQueryParam(QUERY_PARAM_KEYS.PAGE)) || 1;
  const setPage = (page: number) => setQueryParam(QUERY_PARAM_KEYS.PAGE, page);

  const activeCategory = getQueryParam(QUERY_PARAM_KEYS.CATEGORY);
  const filteredDataByCategory = activeCategory
    ? data?.length && data.filter((meal) => meal.strCategory === activeCategory)
    : data;

  const paginatedData = filteredDataByCategory?.length
    ? filteredDataByCategory.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
      )
    : [];

  const totalPages = Math.ceil(
    (filteredDataByCategory?.length || 0) / ITEMS_PER_PAGE
  );

  useEffect(() => {
    setQueryParam(QUERY_PARAM_KEYS.PAGE, 1);
    dispatch(getAllMealsAsync({ query: debouncedSearchQuery }));
    // disable the eslint rule because we don't need to add debouncedSearchQuery to the dependencies array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, debouncedSearchQuery]);

  return (
    <section>
      <div className="container mt-6 pb-10">
        {isLoading ? (
          <div>Loading meals...</div>
        ) : (
          Boolean(paginatedData?.length) && (
            <div className="grid grid-cols-4 gap-10">
              {paginatedData.map((meal) => (
                <MealCard key={meal.idMeal} {...meal} />
              ))}
            </div>
          )
        )}

        {!isLoading &&
          (data === undefined ||
            (Array.isArray(paginatedData) && paginatedData?.length === 0)) && (
            <ErrorMessage>Meals not found!</ErrorMessage>
          )}

        <Pagination
          className="justify-center mt-10"
          pageCount={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};
