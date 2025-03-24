import React, { FC } from "react";
import cn from "classnames";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { ReactComponent as PrevIcon } from "src/assets/icons/arrow-left.svg";
import { ReactComponent as NextIcon } from "src/assets/icons/arrow-right.svg";

const DEFAULT_PAGE_LINK_CLASSNAME =
  "flex justify-center items-center w-10 h-10 rounded-md text-black font-medium hover:bg-black hover:text-white";

interface Props {
  className?: string;
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  setPage: (value: number) => void;
}

export const Pagination: FC<Props> = ({
  className,
  page,
  pageCount,
  pageRangeDisplayed = 7,
  marginPagesDisplayed = 1,
  setPage,
}) => {
  const currentPage = page - 1;

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) =>
    setPage(selected + 1);

  if (pageCount === 0) {
    return null;
  }

  return (
    <ReactPaginate
      containerClassName={cn("flex items-center gap-3", className)}
      pageLinkClassName={DEFAULT_PAGE_LINK_CLASSNAME}
      breakLinkClassName={DEFAULT_PAGE_LINK_CLASSNAME}
      activeLinkClassName="!bg-black !text-white"
      disabledClassName="opacity-30"
      disabledLinkClassName="cursor-default"
      initialPage={currentPage}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      previousLabel={<PrevIcon className="w-10 h-10" />}
      nextLabel={<NextIcon className="w-10 h-10" />}
    />
  );
};
