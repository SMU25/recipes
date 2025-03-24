import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getImageBySize } from "src/utils/getImageBySize";
import { getItemPath } from "src/utils/getItemPath";
import { PATHNAMES } from "src/constants/routes";
import { IMealCard } from "src/@types/meals";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";

export const MealCard: FC<IMealCard> = ({
  idMeal,
  strMeal,
  strCategory,
  strArea,
  strMealThumb,
}) => {
  const path = getItemPath(PATHNAMES.MEAL, {
    meal: idMeal,
  });

  return (
    <div className="rounded-lg shadow-dark-card">
      <div>
        <Link to={path}>
          <div className="overflow-hidden rounded-t-lg">
            <img
              className="w-full aspect-square object-cover rounded-t-lg duration-200 hover:scale-110"
              src={getImageBySize(strMealThumb, "medium")}
              alt={strMeal}
            />
          </div>
        </Link>

        <div className="mt-2 px-4 pb-4">
          <div className="flex justify-between gap-2">
            <span className="text-gray-600 text-sm line-clamp-1">
              {strCategory}
            </span>

            <span className="text-green-500 text-sm font-semibold line-clamp-1">
              {strArea}
            </span>
          </div>

          <Link to={path}>
            <h4
              className="mt-0.5 text-lg leading-6 font-bold line-clamp-1 duration-200 underline-offset-4 hover:underline"
              title={strMeal}
            >
              {strMeal}
            </h4>
          </Link>

          <Button
            className="gap-1 w-full mt-4 py-1 !px-5 !font-medium"
            variant={ButtonVariants.PRIMARY}
          >
            <span className="text-4xl leading-3">+</span> Add
          </Button>
        </div>
      </div>
    </div>
  );
};
