import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getMealByIdAsync } from "src/redux/meals/actions";
import { selectMealById } from "src/redux/meals/selectors";
import { PageLayout } from "src/components/Layouts/PageLayout";
import { parseMealIngredients } from "src/utils/parseMealIngredients";
import { getImageBySize } from "src/utils/getImageBySize";

const Meal: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { isLoading, data } = useAppSelector(selectMealById);
  const ingredients = parseMealIngredients(data);

  useEffect(() => {
    dispatch(getMealByIdAsync(id));
  }, [dispatch, id]);

  return (
    <PageLayout>
      <section>
        <div className="container py-10">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data && (
              <div className="flex items-start gap-8">
                <img
                  className="max-w-lg w-full aspect-square rounded-lg shadow-lg"
                  src={getImageBySize(data.strMealThumb, "large")}
                  alt={data.strMeal}
                />

                <div>
                  <h2 className="mt-2 text-3xl font-bold">{data.strMeal}</h2>
                  <div className="mt-4">
                    <p className="text-lg">
                      <strong>Category:</strong> {data.strCategory}
                    </p>
                    <p className="text-lg">
                      <strong>Area:</strong> {data.strArea}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-2xl font-semibold">Ingredients:</h4>
                    <ul className="mt-2 list-disc list-inside">
                      {ingredients.map((ingredient, index) => (
                        <li key={index}>
                          {ingredient.measure} {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {data.strInstructions && (
                    <div className="mt-4">
                      <h4 className="text-2xl font-semibold">Instructions:</h4>
                      <p className="mt-2">{data.strInstructions}</p>
                    </div>
                  )}

                  <div className="flex gap-4 mt-6">
                    {data.strYoutube && (
                      <a
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        href={data.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch on YouTube
                      </a>
                    )}

                    {data.strSource && (
                      <a
                        className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600"
                        href={data.strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Meal;
