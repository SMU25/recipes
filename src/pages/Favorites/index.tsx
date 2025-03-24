import React, { FC } from "react";
import { clearFavorites } from "src/redux/favorites/actions";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import {
  selectAllFavoriteMeals,
  selectCombinedIngredients,
} from "src/redux/favorites/selectors";
import { PageLayout } from "src/components/Layouts/PageLayout";
import { MealCard } from "src/components/MealCard";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { IMeal } from "src/@types/meals";

const Favorites: FC = () => {
  const dispatch = useAppDispatch();

  const favoriteMeals = useAppSelector(selectAllFavoriteMeals);
  const combinedIngredients = useAppSelector(selectCombinedIngredients);

  const onClear = () => {
    dispatch(clearFavorites());
  };

  return (
    <PageLayout>
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Вибрані рецепти</h1>

        {favoriteMeals.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteMeals.map((meal: IMeal) => (
                <MealCard key={meal.idMeal} {...meal} />
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-6">
              Комбіновані інгредієнти:
            </h2>
            <ul className="list-disc list-inside mb-4">
              {combinedIngredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.measure} {ingredient.name}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6"
              variant={ButtonVariants.RED}
              onClick={onClear}
            >
              Очистити вибрані рецепти
            </Button>
          </div>
        ) : (
          <p>Немає вибраних рецептів.</p>
        )}
      </section>
    </PageLayout>
  );
};

export default Favorites;
