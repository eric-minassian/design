import * as React from "react";
import { ColumnDef, Header, ReactTable, RowData, TableOptions } from "@tanstack/react-table";
type DataTableColumnMeta = {
  /** Right-align numbers so they can be compared. Also applies tabular figures. */
  align?: "left" | "right";
  /** The name in the columns menu, when `header` isn't a plain string. */
  label?: string;
  /** Classes for this column's header and cells, such as a fixed width. */
  className?: string;
};
/**
 * Keeps a row whose value is one of the chosen values. Works for single values
 * and for arrays such as tags, unlike the built-in `arrIncludesSome`, which in
 * v9 only matches when the row's value is itself an array.
 */
declare function filterFn_oneOf(row: {
  getValue: (columnId: string) => unknown;
}, columnId: string, filterValue: unknown[]): boolean;
declare namespace filterFn_oneOf {
  var autoRemove: (value: unknown) => boolean;
}
/**
 * Registered once so every table shares it, and so the sort and filter names
 * in a column definition are checked by the compiler.
 */
declare const dataTableFeatures: {
  columnFacetingFeature: import("@tanstack/react-table").TableFeature;
  columnFilteringFeature: import("@tanstack/react-table").TableFeature;
  columnVisibilityFeature: import("@tanstack/react-table").TableFeature;
  globalFilteringFeature: import("@tanstack/react-table").TableFeature;
  rowPaginationFeature: import("@tanstack/react-table").TableFeature;
  rowSelectionFeature: import("@tanstack/react-table").TableFeature;
  rowSortingFeature: import("@tanstack/react-table").TableFeature;
  facetedRowModel: (table: import("@tanstack/react-table").Table<any, any>, columnId: string) => () => import("@tanstack/react-table").RowModel<any, any>;
  facetedUniqueValues: (table: import("@tanstack/react-table").Table<import("@tanstack/react-table").TableFeatures, any>, columnId: string) => () => Map<any, number>;
  filteredRowModel: (table: import("@tanstack/react-table").Table<any, any>) => () => import("@tanstack/react-table").RowModel<any, any>;
  paginatedRowModel: (table: import("@tanstack/react-table").Table<any, any>) => () => import("@tanstack/react-table").RowModel<any, any>;
  sortedRowModel: (table: import("@tanstack/react-table").Table<any, any>) => () => import("@tanstack/react-table").RowModel<any, any>;
  filterFns: {
    arrIncludes: import("@tanstack/react-table").CreatedFilterFn<any, any>;
    equals: import("@tanstack/react-table").CreatedFilterFn<any, any>;
    includesString: import("@tanstack/react-table").CreatedFilterFn<any, any>;
    inDateRange: import("@tanstack/react-table").CreatedFilterFn<any, any>;
    inNumberRange: import("@tanstack/react-table").CreatedFilterFn<any, any>;
    oneOf: typeof filterFn_oneOf;
    weakEquals: import("@tanstack/react-table").CreatedFilterFn<any, any>;
  };
  sortFns: {
    alphanumeric: import("@tanstack/react-table").CreatedSortFn<any, any>;
    basic: import("@tanstack/react-table").CreatedSortFn<any, any>;
    datetime: import("@tanstack/react-table").CreatedSortFn<any, any>;
    text: import("@tanstack/react-table").CreatedSortFn<any, any>;
  };
  columnMeta: DataTableColumnMeta;
};
type DataTableFeatures = typeof dataTableFeatures;
type DataTableColumn<TData extends RowData> = ColumnDef<DataTableFeatures, TData, any>;
type DataTableInstance<TData extends RowData = any> = ReactTable<DataTableFeatures, TData>;
/** Anything TanStack Table accepts, for server-side data and controlled state. */
type DataTableOptions<TData extends RowData> = Partial<Omit<TableOptions<DataTableFeatures, TData>, "features" | "columns" | "data">>;
declare function useDataTableContext(): DataTableInstance<any>;
declare function DataTableColumnHeader<TData extends RowData>({ header, children }: {
  header: Header<DataTableFeatures, TData, unknown>;
  children: React.ReactNode;
}): React.JSX.Element;
declare function DataTableSearch({ className, placeholder }: {
  className?: string;
  placeholder?: string;
}): React.JSX.Element;
/**
 * Filter one column by a set of values, with a count beside each. The column
 * needs `filterFn: "oneOf"`.
 */
declare function DataTableFacetedFilter({ column: columnId, title, options }: {
  column: string;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
}): React.JSX.Element | null;
declare function DataTableViewOptions({ className }: {
  className?: string;
}): React.JSX.Element;
declare function DataTableToolbar({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DataTablePagination({ pageSizes }: {
  /** The choices in the page size menu. Pass `false` to hide it. */
  pageSizes?: number[] | false;
}): React.JSX.Element;
/**
 * Sorting, search, filters, selection and paging on top of `Table`. Define
 * `columns` outside the component, or memoize them, so they stay stable.
 *
 * `toolbar` replaces the default search and columns menu; compose it from
 * `DataTableSearch`, `DataTableFacetedFilter` and `DataTableViewOptions`, or
 * pass `false` to drop it. For server-side data, set `manualPagination`,
 * `manualSorting` and `manualFiltering` with `rowCount` through `options`.
 */
declare function DataTable<TData extends RowData>({ columns, data, getRowId, selectable, selectionActions, pageSize, pageSizes, loading, empty, toolbar, options, className }: {
  columns: DataTableColumn<TData>[];
  data: TData[];
  /** A stable id per row. Without one, selection follows the row's position. */
  getRowId?: (row: TData) => string;
  /** Adds a checkbox column. */
  selectable?: boolean;
  /** Replaces the toolbar while rows are selected. */
  selectionActions?: (rows: TData[], clear: () => void) => React.ReactNode;
  pageSize?: number;
  pageSizes?: number[] | false;
  /** Skeleton rows when there is no data yet; otherwise dims the current rows. */
  loading?: boolean;
  /** Shown when there is no data at all. Filters that match nothing explain themselves. */
  empty?: React.ReactNode;
  toolbar?: React.ReactNode | false;
  options?: DataTableOptions<TData>;
  className?: string;
}): React.JSX.Element;
export { DataTable, type DataTableColumn, DataTableColumnHeader, type DataTableColumnMeta, DataTableFacetedFilter, type DataTableFeatures, type DataTableInstance, type DataTableOptions, DataTablePagination, DataTableSearch, DataTableToolbar, DataTableViewOptions, dataTableFeatures, useDataTableContext };