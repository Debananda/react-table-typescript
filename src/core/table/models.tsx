import {
  TableState,
  UseSortByState,
  UsePaginationState,
  UseTableOptions,
  UseSortByOptions,
  UsePaginationOptions,
  TableInstance,
  UseSortByInstanceProps,
  UsePaginationInstanceProps,
  ColumnInstance,
  UseSortByColumnProps,
  HeaderGroup,
} from "react-table";

export interface ITableState<D extends object>
  extends TableState<D>,
    UseSortByState<D>,
    UsePaginationState<D> {}

export interface ITableOptions<D extends object> extends UseTableOptions<D> {
  initialState: Partial<ITableState<D>>;
}

export interface ITable<D extends object>
  extends ITableOptions<D>,
    UsePaginationOptions<D>,
    UseSortByOptions<D> {}

export interface ITableInstance<D extends object>
  extends TableInstance<D>,
    UseSortByInstanceProps<D>,
    UsePaginationInstanceProps<D> {
  state: Partial<ITableState<D>>;
}

export interface IColumn<D extends object>
  extends ColumnInstance<D>,
    UseSortByColumnProps<D> {}

export interface ITableHead<D extends object> {
  headerGroups: HeaderGroup<D>[];
}
