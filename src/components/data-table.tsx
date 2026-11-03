"use client"

import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnVisibilityFeature,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_arrIncludes,
  filterFn_equals,
  filterFn_includesString,
  filterFn_inDateRange,
  filterFn_inNumberRange,
  filterFn_weakEquals,
  FlexRender,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_basic,
  sortFn_datetime,
  sortFn_text,
  tableFeatures,
  useTable,
  type Cell,
  type ColumnDef,
  type Header,
  type ReactTable,
  type RowData,
  type TableOptions,
} from "@tanstack/react-table"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  Columns3Icon,
  ListFilterIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"
import * as React from "react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Checkbox } from "@/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { Skeleton } from "@/components/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { cn } from "@/lib/utils"

type DataTableColumnMeta = {
  /** Right-align numbers so they can be compared. Also applies tabular figures. */
  align?: "left" | "right"
  /** The name in the columns menu, when `header` isn't a plain string. */
  label?: string
  /** Classes for this column's header and cells, such as a fixed width. */
  className?: string
}

/**
 * Keeps a row whose value is one of the chosen values. Works for single values
 * and for arrays such as tags, unlike the built-in `arrIncludesSome`, which in
 * v9 only matches when the row's value is itself an array.
 */
function filterFn_oneOf(
  row: { getValue: (columnId: string) => unknown },
  columnId: string,
  filterValue: unknown[]
) {
  const value = row.getValue(columnId)
  return Array.isArray(value)
    ? value.some((item) => filterValue.includes(item))
    : filterValue.includes(value)
}
filterFn_oneOf.autoRemove = (value: unknown) => !Array.isArray(value) || value.length === 0

/**
 * Registered once so every table shares it, and so the sort and filter names
 * in a column definition are checked by the compiler.
 */
const dataTableFeatures = tableFeatures({
  columnFacetingFeature,
  columnFilteringFeature,
  columnVisibilityFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  filterFns: {
    arrIncludes: filterFn_arrIncludes,
    equals: filterFn_equals,
    includesString: filterFn_includesString,
    inDateRange: filterFn_inDateRange,
    inNumberRange: filterFn_inNumberRange,
    oneOf: filterFn_oneOf,
    weakEquals: filterFn_weakEquals,
  },
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    basic: sortFn_basic,
    datetime: sortFn_datetime,
    text: sortFn_text,
  },
  columnMeta: {} as DataTableColumnMeta,
})

type DataTableFeatures = typeof dataTableFeatures

// Rows in one table mix value types by column, so the value type is left open.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataTableColumn<TData extends RowData> = ColumnDef<DataTableFeatures, TData, any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataTableInstance<TData extends RowData = any> = ReactTable<DataTableFeatures, TData>

/** Anything TanStack Table accepts, for server-side data and controlled state. */
type DataTableOptions<TData extends RowData> = Partial<
  Omit<TableOptions<DataTableFeatures, TData>, "features" | "columns" | "data">
>

const DataTableContext = React.createContext<DataTableInstance | null>(null)

function useDataTableContext() {
  const table = React.useContext(DataTableContext)
  if (!table) throw new Error("DataTable parts must be used inside DataTable")
  return table
}

function alignClass(align: DataTableColumnMeta["align"]) {
  return align === "right" ? "text-right tabular-nums" : undefined
}

function SelectAllCheckbox() {
  const table = useDataTableContext()
  const all = table.getIsAllPageRowsSelected()
  return (
    <Checkbox
      aria-label="Select all rows on this page"
      checked={all}
      indeterminate={!all && table.getIsSomePageRowsSelected()}
      onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
    />
  )
}

/** Adds the checkbox column, so a table only has to say `selectable`. */
function selectionColumn<TData extends RowData>(): DataTableColumn<TData> {
  return {
    id: "__select",
    header: () => <SelectAllCheckbox />,
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={(checked) => row.toggleSelected(checked)}
      />
    ),
    enableGlobalFilter: false,
    enableHiding: false,
    enableSorting: false,
    meta: { className: "w-px" },
  }
}

function DataTableColumnHeader<TData extends RowData>({
  header,
  children,
}: {
  header: Header<DataTableFeatures, TData, unknown>
  children: React.ReactNode
}) {
  const sorted = header.column.getIsSorted()
  const right = header.column.columnDef.meta?.align === "right"
  return (
    <button
      data-slot="data-table-sort"
      type="button"
      className={cn(
        "group/sort -mx-1 inline-flex h-6 cursor-pointer select-none items-center gap-1 rounded-sm px-1 font-medium outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring [&_svg]:size-3 [&_svg]:shrink-0",
        right && "flex-row-reverse",
        sorted && "text-foreground"
      )}
      onClick={header.column.getToggleSortingHandler()}
    >
      {children}
      {sorted === "asc" ? (
        <ArrowUpIcon />
      ) : sorted === "desc" ? (
        <ArrowDownIcon />
      ) : (
        <ChevronsUpDownIcon className="opacity-0 transition-opacity group-hover/sort:opacity-64 group-focus-visible/sort:opacity-64 pointer-coarse:opacity-64" />
      )}
    </button>
  )
}

function renderHeader<TData extends RowData>(header: Header<DataTableFeatures, TData, unknown>) {
  const content = <FlexRender header={header} />
  return header.column.getCanSort() && typeof header.column.columnDef.header === "string" ? (
    <DataTableColumnHeader header={header}>{content}</DataTableColumnHeader>
  ) : (
    content
  )
}

function ariaSort(sorted: false | "asc" | "desc") {
  if (sorted === "asc") return "ascending"
  if (sorted === "desc") return "descending"
  return undefined
}

function DataTableSearch({
  className,
  placeholder = "Search",
}: {
  className?: string
  placeholder?: string
}) {
  const table = useDataTableContext()
  const value = String(table.state.globalFilter ?? "")
  return (
    <InputGroup className={cn("w-full sm:w-56", className)}>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        aria-label={placeholder}
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
      />
      {value && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Clear search"
            size="icon-xs"
            onClick={() => table.setGlobalFilter("")}
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}

/**
 * Filter one column by a set of values, with a count beside each. The column
 * needs `filterFn: "oneOf"`.
 */
function DataTableFacetedFilter({
  column: columnId,
  title,
  options,
}: {
  column: string
  title: string
  options: { label: string; value: string; icon?: React.ReactNode }[]
}) {
  const table = useDataTableContext()
  const column = table.getColumn(columnId)
  if (!column) return null

  const selected = new Set((column.getFilterValue() as string[] | undefined) ?? [])
  const counts = column.getFacetedUniqueValues()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button size="sm" variant="outline" />}>
        <ListFilterIcon />
        {title}
        {selected.size > 0 && (
          <Badge size="sm" variant="secondary">
            {selected.size}
          </Badge>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{title}</DropdownMenuLabel>
          {options.map((option) => (
            <DropdownMenuCheckboxItem
              key={option.value}
              checked={selected.has(option.value)}
              closeOnClick={false}
              onCheckedChange={(checked) => {
                const next = new Set(selected)
                if (checked) next.add(option.value)
                else next.delete(option.value)
                column.setFilterValue(next.size > 0 ? [...next] : undefined)
              }}
            >
              <span className="flex min-w-0 flex-1 items-center gap-2">
                {option.icon}
                <span className="truncate">{option.label}</span>
                <span className="ms-auto ps-3 text-2xs text-muted-foreground tabular-nums">
                  {counts.get(option.value) ?? 0}
                </span>
              </span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
        {selected.size > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => column.setFilterValue(undefined)}>
              Clear filter
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DataTableViewOptions({ className }: { className?: string }) {
  const table = useDataTableContext()
  const columns = table.getAllLeafColumns().filter((column) => column.getCanHide())
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button className={className} size="sm" variant="outline" />}
      >
        <Columns3Icon />
        Columns
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Show columns</DropdownMenuLabel>
          {columns.map((column) => {
            const header = column.columnDef.header
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                closeOnClick={false}
                onCheckedChange={(checked) => column.toggleVisibility(checked)}
              >
                {column.columnDef.meta?.label ?? (typeof header === "string" ? header : column.id)}
              </DropdownMenuCheckboxItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DataTableToolbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="data-table-toolbar"
      className={cn("flex min-h-8 flex-wrap items-center gap-2 sm:min-h-7", className)}
      {...props}
    />
  )
}

function DataTablePagination({
  pageSizes = [10, 25, 50],
}: {
  /** The choices in the page size menu. Pass `false` to hide it. */
  pageSizes?: number[] | false
}) {
  const table = useDataTableContext()
  const { pageIndex, pageSize } = table.state.pagination
  const total = table.getRowCount()
  const selected = Object.keys(table.state.rowSelection).length
  const first = total === 0 ? 0 : pageIndex * pageSize + 1
  const last = Math.min((pageIndex + 1) * pageSize, total)
  const sizes = pageSizes ? pageSizes.map((size) => ({ label: String(size), value: size })) : []

  return (
    <div
      data-slot="data-table-pagination"
      className="flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t px-3 py-1.5 text-muted-foreground text-xs"
    >
      <p className="tabular-nums">
        {selected > 0 ? `${selected} of ${total} selected` : `${total} ${total === 1 ? "row" : "rows"}`}
      </p>
      <div className="ms-auto flex items-center gap-3">
        {pageSizes && (
          <div className="flex items-center gap-2 max-sm:hidden">
            <span aria-hidden>Rows per page</span>
            <Select
              items={sizes}
              value={pageSize}
              onValueChange={(value) => {
                if (value !== null) table.setPageSize(value)
              }}
            >
              <SelectTrigger aria-label="Rows per page" className="w-16 min-w-0" size="xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <p aria-live="polite" className="tabular-nums">
          {first}–{last} of {total}
        </p>
        <div className="flex items-center gap-0.5">
          <Button
            aria-label="Previous page"
            disabled={!table.getCanPreviousPage()}
            size="icon-xs"
            variant="ghost"
            onClick={() => table.previousPage()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            aria-label="Next page"
            disabled={!table.getCanNextPage()}
            size="icon-xs"
            variant="ghost"
            onClick={() => table.nextPage()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

function SelectionBar<TData extends RowData>({
  actions,
}: {
  actions: (rows: TData[], clear: () => void) => React.ReactNode
}) {
  const table = useDataTableContext()
  const rows = table.getSelectedRowModel().rows.map((row) => row.original as TData)
  const clear = () => table.resetRowSelection(true)
  return (
    <DataTableToolbar data-slot="data-table-selection-bar">
      <Button aria-label="Clear selection" size="icon-sm" variant="ghost-muted" onClick={clear}>
        <XIcon />
      </Button>
      <p className="me-auto font-medium text-sm tabular-nums">{rows.length} selected</p>
      {actions(rows, clear)}
    </DataTableToolbar>
  )
}

function DataTableBody<TData extends RowData>({
  loading,
  empty,
  skeletonRows,
}: {
  loading: boolean
  empty: React.ReactNode
  skeletonRows: number
}) {
  const table = useDataTableContext() as DataTableInstance<TData>
  const rows = table.getRowModel().rows
  const columnCount = table.getVisibleLeafColumns().length
  const filtered = Boolean(table.state.globalFilter) || table.state.columnFilters.length > 0

  if (rows.length === 0 && loading) {
    return (
      <>
        {Array.from({ length: skeletonRows }, (_, row) => (
          <TableRow key={row} className="hover:bg-transparent">
            {table.getVisibleLeafColumns().map((column) => (
              <TableCell key={column.id} className="first:ps-3 last:pe-3">
                <Skeleton className="h-3.5 w-full max-w-24" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    )
  }

  if (rows.length === 0) {
    return (
      <TableRow className="hover:bg-transparent">
        <TableCell className="h-40 whitespace-normal text-center" colSpan={columnCount}>
          {filtered ? (
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground text-sm">Nothing matches those filters.</p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  table.setGlobalFilter("")
                  table.resetColumnFilters(true)
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            (empty ?? <p className="text-muted-foreground text-sm">Nothing here yet.</p>)
          )}
        </TableCell>
      </TableRow>
    )
  }

  return (
    <>
      {rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
          {row.getVisibleCells().map((cell: Cell<DataTableFeatures, TData, unknown>) => {
            const meta = cell.column.columnDef.meta
            return (
              <TableCell
                key={cell.id}
                className={cn("first:ps-3 last:pe-3", alignClass(meta?.align), meta?.className)}
              >
                <FlexRender cell={cell} />
              </TableCell>
            )
          })}
        </TableRow>
      ))}
    </>
  )
}

/**
 * Sorting, search, filters, selection and paging on top of `Table`. Define
 * `columns` outside the component, or memoize them, so they stay stable.
 *
 * `toolbar` replaces the default search and columns menu; compose it from
 * `DataTableSearch`, `DataTableFacetedFilter` and `DataTableViewOptions`, or
 * pass `false` to drop it. For server-side data, set `manualPagination`,
 * `manualSorting` and `manualFiltering` with `rowCount` through `options`.
 */
function DataTable<TData extends RowData>({
  columns,
  data,
  getRowId,
  selectable = false,
  selectionActions,
  pageSize = 10,
  pageSizes,
  loading = false,
  empty,
  toolbar,
  options,
  className,
}: {
  columns: DataTableColumn<TData>[]
  data: TData[]
  /** A stable id per row. Without one, selection follows the row's position. */
  getRowId?: (row: TData) => string
  /** Adds a checkbox column. */
  selectable?: boolean
  /** Replaces the toolbar while rows are selected. */
  selectionActions?: (rows: TData[], clear: () => void) => React.ReactNode
  pageSize?: number
  pageSizes?: number[] | false
  /** Skeleton rows when there is no data yet; otherwise dims the current rows. */
  loading?: boolean
  /** Shown when there is no data at all. Filters that match nothing explain themselves. */
  empty?: React.ReactNode
  toolbar?: React.ReactNode | false
  options?: DataTableOptions<TData>
  className?: string
}) {
  const allColumns = React.useMemo(
    () => (selectable ? [selectionColumn<TData>(), ...columns] : columns),
    [columns, selectable]
  )

  const table = useTable({
    features: dataTableFeatures,
    columns: allColumns,
    data,
    getRowId: getRowId ? (row) => getRowId(row) : undefined,
    globalFilterFn: "includesString",
    ...options,
    initialState: {
      ...options?.initialState,
      pagination: { pageIndex: 0, pageSize, ...options?.initialState?.pagination },
    },
  }) as DataTableInstance<TData>

  const hasSelection = Object.keys(table.state.rowSelection).length > 0
  const showToolbar = hasSelection && selectionActions

  return (
    <DataTableContext.Provider value={table as DataTableInstance}>
      <div data-slot="data-table" className={cn("flex w-full min-w-0 flex-col gap-3", className)}>
        {showToolbar ? (
          <SelectionBar actions={selectionActions} />
        ) : toolbar === false ? null : (
          (toolbar ?? (
            <DataTableToolbar>
              <DataTableSearch />
              <DataTableViewOptions className="ms-auto" />
            </DataTableToolbar>
          ))
        )}
        <div className="overflow-hidden rounded-xl border bg-card text-card-foreground">
          <Table
            aria-busy={loading || undefined}
            className={cn("text-sm", loading && data.length > 0 && "opacity-64 transition-opacity")}
          >
            <TableHeader>
              {table.getHeaderGroups().map((group) => (
                <TableRow key={group.id} className="hover:bg-transparent">
                  {group.headers.map((header: Header<DataTableFeatures, TData, unknown>) => {
                    const meta = header.column.columnDef.meta
                    return (
                      <TableHead
                        key={header.id}
                        aria-sort={ariaSort(header.column.getIsSorted())}
                        className={cn(
                          "first:ps-3 last:pe-3",
                          alignClass(meta?.align),
                          meta?.className
                        )}
                      >
                        {header.isPlaceholder ? null : renderHeader(header)}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              <DataTableBody<TData>
                empty={empty}
                loading={loading}
                skeletonRows={Math.min(pageSize, 5)}
              />
            </TableBody>
          </Table>
          <DataTablePagination pageSizes={pageSizes} />
        </div>
      </div>
    </DataTableContext.Provider>
  )
}

export {
  DataTable,
  DataTableColumnHeader,
  DataTableFacetedFilter,
  DataTablePagination,
  DataTableSearch,
  DataTableToolbar,
  DataTableViewOptions,
  dataTableFeatures,
  useDataTableContext,
  type DataTableColumn,
  type DataTableColumnMeta,
  type DataTableFeatures,
  type DataTableInstance,
  type DataTableOptions,
}
