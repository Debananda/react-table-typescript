import React, { ReactElement, PropsWithChildren } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useFlexLayout,
  Row,
} from "react-table";
import { ITable, ITableInstance } from "./models";
import TableHead from "./TableHead";
import Pagination from "./Pagination";

const Table = <T extends object>(
  props: PropsWithChildren<ITable<T>>
): ReactElement => {
  const { columns, data, initialState } = props;
  const instance: ITableInstance<T> = useTable(
    { columns, data, initialState },
    useSortBy,
    usePagination,
    useFlexLayout
  ) as ITableInstance<T>;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    canNextPage,
    canPreviousPage,
    previousPage,
    nextPage,
    page,
    pageCount,
    pageOptions,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize },
  } = instance;
  return (
    <>
      <div {...getTableProps()} className="table">
        <TableHead<T> headerGroups={headerGroups} />
        <div {...getTableBodyProps()} className="table-body">
          {page.map((row: Row<T>) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="table-row">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="table-row-cell">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        pageIndex={pageIndex || 0}
        pageCount={pageCount}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        pageOptions={pageOptions}
        page={page}
        pageSize={pageSize || 0}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default Table;
