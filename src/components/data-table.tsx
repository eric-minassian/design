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
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CircleAlertIcon,
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
import { Input } from "@/components/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { Skeleton } from "@/components/skeleton"
import { Spinner } from "@/components/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip"
import { cn } from "@/lib/utils"

/** Return a message to reject the value and keep the editor open. */
type DataTableCellValidator<TValue> = (value: TValue) => string | undefined

type DataTableCellEditor =
  | {
      type: "text"
      placeholder?: string
      required?: boolean
      validate?: DataTableCellValidator<string>
    }
  | {
      type: "number"
      placeholder?: string
      min?: number
      max?: number
      step?: number
      validate?: DataTableCellValidator<number>
    }
  | {
      type: "select"
      placeholder?: string
      options: { label: string; value: string; icon?: React.ReactNode }[]
    }
  | {
      /** A date picker, a combobox, or anything else. Escape cancels for you. */
      type: "custom"
      placeholder?: string
      render: (props: {
        value: unknown
        commit: (value: unknown) => void
        cancel: () => void
      }) => React.ReactNode
    }

type DataTableCellEdit<TData> = {
  row: TData
  rowId: string
  columnId: string
  value: unknown
  previous: unknown
}

type DataTableColumnMeta = {
  /** Right-align numbers so they can be compared. Also applies tabular figures. */
  align?: "left" | "right"
  /** The name in the columns menu, when `header` isn't a plain string. */
  label?: string
  /** Classes for this column's header and cells, such as a fixed width. */
  className?: string
  /** Makes the column's cells editable in place. Needs `onCellEdit` on the table. */
  edit?: DataTableCellEditor
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

type DataTableEditContextValue = {
  editingId: string | null
  setEditingId: (id: string | null) => void
  onCellEdit: (edit: DataTableCellEdit<never>) => unknown
  rootRef: React.RefObject<HTMLDivElement | null>
}

const DataTableEditContext = React.createContext<DataTableEditContextValue | null>(null)

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
    // A flex box, so the checkbox centers on the row instead of sitting on a text baseline.
    header: () => (
      <div className="flex items-center">
        <SelectAllCheckbox />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <Checkbox
          aria-label="Select row"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onCheckedChange={(checked) => row.toggleSelected(checked)}
        />
      </div>
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

// Editors overlay the cell at a 2px inset. With their 1px border, this padding
// keeps the text exactly where it sits at rest, so entering edit mode doesn't jump.
const EDITOR_INPUT_CLASS =
  "size-full min-w-0 [&_input]:h-full [&_input]:px-[calc(--spacing(1.5)-1px)] [&_input]:text-base [&_input]:leading-none sm:[&_input]:h-full sm:[&_input]:text-sm in-[td:first-child]:[&_input]:ps-[calc(--spacing(2.5)-1px)] in-[td:last-child]:[&_input]:pe-[calc(--spacing(2.5)-1px)]"

function InputEditor({
  editor,
  initial,
  error: initialError,
  align,
  label,
  onSave,
  onCancel,
}: {
  editor: Extract<DataTableCellEditor, { type: "text" | "number" }>
  initial: unknown
  error?: string
  align?: DataTableColumnMeta["align"]
  label: string
  onSave: (value: unknown, options: { move?: 1 | -1; refocus: boolean }) => void
  onCancel: (options: { refocus: boolean }) => void
}) {
  const [draft, setDraft] = React.useState(initial === null || initial === undefined ? "" : String(initial))
  const [error, setError] = React.useState(initialError)
  const inputRef = React.useRef<HTMLInputElement>(null)
  // Removing a focused input can fire blur; the first exit wins.
  const finished = React.useRef(false)

  React.useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  }, [])

  function parse(): { value: unknown } | { message: string } {
    if (editor.type === "text") {
      if (editor.required && draft.trim() === "") return { message: "This can't be empty." }
      const message = editor.validate?.(draft)
      return message ? { message } : { value: draft }
    }
    if (draft.trim() === "") return { value: null }
    const value = Number(draft)
    if (Number.isNaN(value)) return { message: "Enter a number." }
    if (editor.min !== undefined && value < editor.min) return { message: `Must be at least ${editor.min}.` }
    if (editor.max !== undefined && value > editor.max) return { message: `Must be at most ${editor.max}.` }
    const message = editor.validate?.(value)
    return message ? { message } : { value }
  }

  function submit(move?: 1 | -1) {
    const result = parse()
    if ("message" in result) {
      setError(result.message)
      return
    }
    finished.current = true
    onSave(result.value, { move, refocus: true })
  }

  return (
    <Tooltip open={Boolean(error)}>
      <TooltipTrigger render={<span className="absolute inset-0.5 block" />}>
        <Input
          ref={inputRef}
          aria-invalid={error ? true : undefined}
          aria-label={label}
          className={cn(EDITOR_INPUT_CLASS, align === "right" && "[&_input]:text-right [&_input]:tabular-nums")}
          inputMode={editor.type === "number" ? "decimal" : undefined}
          placeholder={editor.placeholder}
          size="compact"
          value={draft}
          onBlur={() => {
            if (finished.current) return
            finished.current = true
            // An invalid draft is dropped, so clicking away never traps anyone in a cell.
            const result = parse()
            if ("message" in result) onCancel({ refocus: false })
            else onSave(result.value, { refocus: false })
          }}
          onChange={(event) => {
            setDraft(event.target.value)
            setError(undefined)
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              submit()
            } else if (event.key === "Escape") {
              event.preventDefault()
              finished.current = true
              onCancel({ refocus: true })
            } else if (event.key === "Tab") {
              event.preventDefault()
              submit(event.shiftKey ? -1 : 1)
            }
          }}
        />
      </TooltipTrigger>
      <TooltipContent side="bottom">{error}</TooltipContent>
      {error && (
        <span className="sr-only" role="alert">
          {error}
        </span>
      )}
    </Tooltip>
  )
}

function SelectEditor({
  editor,
  initial,
  label,
  onSave,
  onCancel,
}: {
  editor: Extract<DataTableCellEditor, { type: "select" }>
  initial: unknown
  label: string
  onSave: (value: unknown, options: { refocus: boolean }) => void
  onCancel: (options: { refocus: boolean }) => void
}) {
  const finished = React.useRef(false)
  return (
    <Select
      defaultOpen
      items={editor.options}
      modal={false}
      value={initial as string}
      onOpenChange={(open) => {
        if (open || finished.current) return
        finished.current = true
        onCancel({ refocus: true })
      }}
      onValueChange={(value) => {
        finished.current = true
        onSave(value, { refocus: true })
      }}
    >
      <SelectTrigger
        aria-label={label}
        className="absolute inset-0.5 h-auto min-h-0 w-auto min-w-0 rounded-md px-[calc(--spacing(1.5)-1px)] text-base sm:h-auto sm:min-h-0 sm:text-sm in-[td:first-child]:ps-[calc(--spacing(2.5)-1px)] in-[td:last-child]:pe-[calc(--spacing(2.5)-1px)]"
        size="xs"
      >
        <SelectValue>
          {(value: string) => {
            const option = editor.options.find((item) => item.value === value)
            return (
              <span className="flex min-w-0 items-center gap-2">
                {option?.icon}
                <span className="truncate">{option?.label ?? value}</span>
              </span>
            )
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="min-w-40" matchTriggerWidth={false}>
        {editor.options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <span className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function CustomEditor({
  children,
  onCancel,
}: {
  children: React.ReactNode
  onCancel: (options: { refocus: boolean }) => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const latestCancel = React.useRef(onCancel)
  latestCancel.current = onCancel

  React.useEffect(() => {
    ref.current?.querySelector<HTMLElement>("input, select, textarea, button, [tabindex]")?.focus()

    // Clicking away closes the editor, unless the click is in a popup it opened.
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Element
      const inPopup = target.closest('[role="listbox"], [role="menu"], [role="dialog"], [data-slot$="-popup"]')
      if (!ref.current?.contains(target) && !inPopup) latestCancel.current({ refocus: false })
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0.5 flex items-center"
      onKeyDown={(event) => {
        if (event.key === "Escape") onCancel({ refocus: true })
      }}
    >
      {children}
    </div>
  )
}

function editorText(editor: DataTableCellEditor, value: unknown) {
  if (editor.type === "select") {
    return editor.options.find((option) => option.value === value)?.label ?? String(value ?? "")
  }
  return value === null || value === undefined ? "" : String(value)
}

/**
 * A cell you can click or tab to. The editor is drawn over the cell while the
 * display stays in place underneath, so columns never change width.
 */
function EditableCell<TData extends RowData>({
  cell,
  editor,
  label,
}: {
  cell: Cell<DataTableFeatures, TData, unknown>
  editor: DataTableCellEditor
  label: string
}) {
  const context = React.useContext(DataTableEditContext)
  if (!context) throw new Error("EditableCell must be used inside DataTable")
  const { editingId, setEditingId, onCellEdit, rootRef } = context

  const [pending, setPending] = React.useState<{ value: unknown } | null>(null)
  const [failure, setFailure] = React.useState<{ value: unknown; message: string } | null>(null)
  // A failed save explains itself, even when the pointer never moved. It then
  // steps aside and comes back on hover or focus.
  const [failureTipOpen, setFailureTipOpen] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const refocusOnExit = React.useRef(false)
  const isEditing = editingId === cell.id
  const value = cell.getValue()
  const align = cell.column.columnDef.meta?.align

  React.useEffect(() => {
    if (!isEditing && refocusOnExit.current) {
      refocusOnExit.current = false
      buttonRef.current?.focus()
    }
  }, [isEditing])

  React.useEffect(() => {
    if (!failure || !failureTipOpen) return
    const timer = window.setTimeout(() => setFailureTipOpen(false), 4000)
    return () => window.clearTimeout(timer)
  }, [failure, failureTipOpen])

  function fail(next: unknown, error: unknown) {
    setFailure({ value: next, message: messageFrom(error) })
    setFailureTipOpen(true)
  }

  function moveTo(direction: 1 | -1) {
    const cells = [...(rootRef.current?.querySelectorAll<HTMLElement>("[data-edit-cell]") ?? [])]
    const target = cells[cells.findIndex((element) => element === buttonRef.current) + direction]
    if (target?.dataset.editCell) {
      setEditingId(target.dataset.editCell)
    } else {
      refocusOnExit.current = true
      setEditingId(null)
    }
  }

  function exit(options: { move?: 1 | -1; refocus: boolean }) {
    if (options.move) {
      moveTo(options.move)
      return
    }
    refocusOnExit.current = options.refocus
    setEditingId(null)
  }

  function save(next: unknown, options: { move?: 1 | -1; refocus: boolean }) {
    exit(options)
    setFailure(null)
    setFailureTipOpen(false)
    if (editorText(editor, next) === editorText(editor, value)) return

    let result: unknown
    try {
      result = onCellEdit({
        row: cell.row.original as never,
        rowId: cell.row.id,
        columnId: cell.column.id,
        value: next,
        previous: value,
      })
    } catch (error) {
      fail(next, error)
      return
    }
    if (result instanceof Promise) {
      setPending({ value: next })
      result.then(
        () => setPending(null),
        (error: unknown) => {
          setPending(null)
          fail(next, error)
        }
      )
    }
  }

  const text = editorText(editor, value)
  const initial = failure ? failure.value : value

  return (
    <>
      <Tooltip disabled={!failure} open={failureTipOpen} onOpenChange={setFailureTipOpen}>
        <TooltipTrigger
          render={
            <button
              ref={buttonRef}
              aria-label={`Edit ${label}${text ? `: ${text}` : ""}`}
              data-edit-cell={cell.id}
              data-slot="data-table-editable-cell"
              disabled={Boolean(pending)}
              tabIndex={isEditing ? -1 : 0}
              type="button"
              className={cn(
                "group/edit -mx-1.5 -my-0.5 flex min-h-6 w-[calc(100%+--spacing(3))] items-center gap-1.5 rounded-md px-1.5 py-0.5 text-left outline-none transition-colors hover:bg-accent hover:ring-1 hover:ring-input hover:ring-inset focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-default",
                editor.type === "select" ? "cursor-pointer" : "cursor-text",
                align === "right" && "justify-end text-right",
                isEditing && "invisible",
                failure && "ring-1 ring-destructive/36 ring-inset hover:ring-destructive/36"
              )}
              onClick={() => {
                setFailureTipOpen(false)
                setEditingId(cell.id)
              }}
              onKeyDown={(event) => {
                if (event.key === "F2") setEditingId(cell.id)
              }}
            />
          }
        >
          {failure && <CircleAlertIcon className="size-3.5 shrink-0 text-destructive" />}
          {pending ? (
            <span className="inline-flex min-w-0 items-center gap-1.5 text-muted-foreground">
              <span className="truncate">{editorText(editor, pending.value)}</span>
              <Spinner size="xs" />
            </span>
          ) : text === "" ? (
            <span className="text-placeholder">{editor.placeholder ?? "Empty"}</span>
          ) : (
            <FlexRender cell={cell} />
          )}
          {editor.type === "select" && !pending && (
            <ChevronDownIcon className="ms-auto size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/edit:opacity-64 group-focus-visible/edit:opacity-64 pointer-coarse:opacity-64" />
          )}
        </TooltipTrigger>
        {failure && <TooltipContent>{failure.message}</TooltipContent>}
      </Tooltip>
      {failure && (
        <span className="sr-only" role="alert">
          {`${label} wasn't saved. ${failure.message}`}
        </span>
      )}
      {isEditing &&
        (editor.type === "select" ? (
          <SelectEditor
            editor={editor}
            initial={initial}
            label={label}
            onCancel={exit}
            onSave={save}
          />
        ) : editor.type === "custom" ? (
          <CustomEditor onCancel={exit}>
            {editor.render({
              value: initial,
              commit: (next) => save(next, { refocus: true }),
              cancel: () => exit({ refocus: true }),
            })}
          </CustomEditor>
        ) : (
          <InputEditor
            align={align}
            editor={editor}
            error={failure?.message}
            initial={initial}
            label={label}
            onCancel={exit}
            onSave={save}
          />
        ))}
    </>
  )
}

function messageFrom(error: unknown) {
  return error instanceof Error && error.message ? error.message : "Couldn't save this change."
}

function columnLabel<TData extends RowData>(column: Cell<DataTableFeatures, TData, unknown>["column"]) {
  const header = column.columnDef.header
  return column.columnDef.meta?.label ?? (typeof header === "string" ? header : column.id)
}

function DataTableBody<TData extends RowData>({
  loading,
  empty,
  skeletonRows,
  editable,
  canEditCell,
}: {
  loading: boolean
  empty: React.ReactNode
  skeletonRows: number
  editable: boolean
  canEditCell?: (row: TData, columnId: string) => boolean
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
            const editor =
              editable && (canEditCell?.(row.original, cell.column.id) ?? true) ? meta?.edit : undefined
            return (
              <TableCell
                key={cell.id}
                className={cn(
                  "first:ps-3 last:pe-3",
                  editor && "relative",
                  alignClass(meta?.align),
                  meta?.className
                )}
              >
                {editor ? (
                  <EditableCell cell={cell} editor={editor} label={columnLabel(cell.column)} />
                ) : (
                  <FlexRender cell={cell} />
                )}
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
  onCellEdit,
  canEditCell,
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
  /**
   * Saves a cell edit from a column with `meta.edit`. Update `data` here. Return
   * a promise to show saving; reject it to mark the cell and keep the draft.
   */
  onCellEdit?: (edit: DataTableCellEdit<TData>) => void | Promise<unknown>
  /** Locks individual cells in an editable column. */
  canEditCell?: (row: TData, columnId: string) => boolean
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
    // Saving an edit or refetching must not send anyone back to page one. The
    // effects below reset it for the changes that should.
    autoResetPageIndex: false,
    ...options,
    initialState: {
      ...options?.initialState,
      pagination: { pageIndex: 0, pageSize, ...options?.initialState?.pagination },
    },
  }) as DataTableInstance<TData>

  const [editingId, setEditingId] = React.useState<string | null>(null)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const editContext = React.useMemo<DataTableEditContextValue | null>(
    () =>
      onCellEdit
        ? {
            editingId,
            setEditingId,
            onCellEdit: onCellEdit as DataTableEditContextValue["onCellEdit"],
            rootRef,
          }
        : null,
    [editingId, onCellEdit]
  )

  const { globalFilter, columnFilters, sorting, pagination } = table.state
  const manualPagination = options?.manualPagination ?? false
  const resetsOn = React.useRef({ globalFilter, columnFilters, sorting })
  const pageCount = table.getPageCount()

  React.useEffect(() => {
    const previous = resetsOn.current
    if (
      previous.globalFilter === globalFilter &&
      previous.columnFilters === columnFilters &&
      previous.sorting === sorting
    ) {
      return
    }
    resetsOn.current = { globalFilter, columnFilters, sorting }
    if (!manualPagination) table.setPageIndex(0)
  }, [columnFilters, globalFilter, manualPagination, sorting, table])

  // Deleting the last rows on the last page shouldn't strand someone on an empty one.
  React.useEffect(() => {
    if (!manualPagination && pagination.pageIndex > 0 && pagination.pageIndex >= pageCount) {
      table.setPageIndex(Math.max(pageCount - 1, 0))
    }
  }, [manualPagination, pageCount, pagination.pageIndex, table])

  const hasSelection = Object.keys(table.state.rowSelection).length > 0
  const showToolbar = hasSelection && selectionActions

  return (
    <DataTableContext.Provider value={table as DataTableInstance}>
      <DataTableEditContext.Provider value={editContext}>
        <div ref={rootRef} data-slot="data-table" className={cn("flex w-full min-w-0 flex-col gap-3", className)}>
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
                canEditCell={canEditCell}
                editable={Boolean(onCellEdit)}
                empty={empty}
                loading={loading}
                skeletonRows={Math.min(pageSize, 5)}
              />
            </TableBody>
          </Table>
          <DataTablePagination pageSizes={pageSizes} />
        </div>
      </div>
      </DataTableEditContext.Provider>
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
  type DataTableCellEdit,
  type DataTableCellEditor,
  type DataTableColumn,
  type DataTableColumnMeta,
  type DataTableFeatures,
  type DataTableInstance,
  type DataTableOptions,
}
