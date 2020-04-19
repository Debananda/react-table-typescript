import React, { PropsWithChildren, ReactElement } from "react";
import { HeaderGroup } from "react-table";
import { IColumn, ITableHead } from "./models";

const TableHead = <T extends object>({
  headerGroups,
}: PropsWithChildren<ITableHead<T>>): ReactElement =>
  React.useMemo(
    () => (
      <div className="table-header-group">
        {headerGroups.map((headerGroup: HeaderGroup<T>) => (
          <div {...headerGroup.getHeaderGroupProps()} className="table-header">
            {headerGroup.headers.map((c) => {
              const column = c as IColumn<T>;
              return (
                <div
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="table-header-cell"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    ),
    [headerGroups]
  );

export default TableHead;
