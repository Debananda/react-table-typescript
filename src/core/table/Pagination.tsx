import React, { PropsWithChildren, ReactElement } from "react";
import { UsePaginationInstanceProps, UsePaginationState } from "react-table";

interface IPagination<D extends object>
  extends UsePaginationInstanceProps<D>,
    UsePaginationState<D> {}

const Pagination = <T extends object>({
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  gotoPage,
  pageIndex,
  pageOptions,
}: PropsWithChildren<IPagination<T>>): ReactElement =>
  React.useMemo(() => {
    return (
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
        <div>
          Page{" "}
          <em>
            {pageIndex || 0 + 1} of {pageOptions.length}
          </em>
        </div>
        <div>Go to page:</div>
        <input
          type="number"
          defaultValue={pageIndex || 0 + 1 || 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
        />
      </div>
    );
  }, [
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageIndex,
    pageOptions,
  ]);

export default Pagination;
