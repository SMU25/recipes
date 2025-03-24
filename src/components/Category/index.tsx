import React, { FC } from "react";
import cn from "classnames";
import { useQueryParams } from "src/hooks/useQueryParams";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";
import { ICategory } from "src/@types/categories";

export const Category: FC<Pick<ICategory, "strCategory">> = ({
  strCategory,
}) => {
  const { getQueryParam, setQueryParam } = useQueryParams();

  const isActive = getQueryParam(QUERY_PARAM_KEYS.CATEGORY) === strCategory;

  const onClick = () => {
    if (!isActive) {
      setQueryParam(QUERY_PARAM_KEYS.CATEGORY, strCategory);
    } else {
      setQueryParam(QUERY_PARAM_KEYS.CATEGORY, "");
    }

    setQueryParam(QUERY_PARAM_KEYS.PAGE, 1);
  };

  return (
    <div
      className={cn(
        "border border-black py-1 px-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-black/70 hover:text-white",
        {
          "!bg-black !text-white": isActive,
        }
      )}
      onClick={onClick}
    >
      {strCategory}
    </div>
  );
};
