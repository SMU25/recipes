import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import { Search } from "../Search";
import { useQueryParams } from "src/hooks/useQueryParams";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";

export const Header: FC = () => {
  const { getQueryParam, setQueryParam } = useQueryParams();

  const searchValue = getQueryParam(QUERY_PARAM_KEYS.QUERY) || "";
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParam(QUERY_PARAM_KEYS.QUERY, target.value);
  };

  return (
    <header className="shadow-xl py-2">
      <div className="container flex justify-between items-center gap-10">
        <Link to={PATHNAMES.HOME}>
          <h1 className="text-3xl font-semibold">Logo</h1>
        </Link>

        <Search value={searchValue} onChange={onChange} />
      </div>
    </header>
  );
};
