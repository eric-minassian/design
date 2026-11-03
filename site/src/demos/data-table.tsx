import * as React from "react"
import { GitBranchIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  DataTable,
  DataTableFacetedFilter,
  DataTableSearch,
  DataTableToolbar,
  DataTableViewOptions,
  type DataTableColumn,
} from "@/components/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/empty"
import { StatusDot } from "@/components/status-dot"
import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"

export const notes =
  "Table is for showing data you already have in the shape you want. Reach for this once people need to sort, search or select it. It is built on TanStack Table, so anything it can do is available through the options prop. Editable cells save on Enter, Tab or clicking away, and Escape cancels. A true or false value doesn't need an edit mode: put a Switch in the cell."

type Status = "running" | "review" | "merged" | "failed"

type Thread = {
  id: string
  title: string
  branch: string
  status: Status
  model: string
  tokens: number
}

const statuses: Record<Status, { label: string; tone: "primary" | "warning" | "success" | "error" }> = {
  running: { label: "Running", tone: "primary" },
  review: { label: "In review", tone: "warning" },
  merged: { label: "Merged", tone: "success" },
  failed: { label: "Failed", tone: "error" },
}

const titles = [
  "Fix flaky retry test",
  "Rename queue module",
  "Add deploy preview env",
  "Migrate to Tailwind 4",
  "Bump Base UI to 1.9",
  "Add thread search",
  "Refactor auth middleware",
  "Fix stale session on reconnect",
  "Stream tool output",
  "Cache highlighter grammars",
  "Add keyboard shortcuts",
  "Drop legacy storage keys",
  "Trim the command palette",
  "Split the settings page",
  "Harden the release workflow",
  "Compact long threads",
  "Show diffs inline",
  "Retry failed pushes",
  "Add worktree cleanup",
  "Support remote hosts",
  "Pin the action versions",
  "Speed up cold start",
  "Handle offline mode",
  "Sort threads by activity",
]

const threads: Thread[] = titles.map((title, index) => ({
  id: `thread-${index + 1}`,
  title,
  branch: `t3/${title.toLowerCase().split(" ").slice(0, 2).join("-")}`,
  status: (["running", "review", "merged", "merged", "failed"] as const)[index % 5]!,
  model: ["Opus 5.5", "Sonnet 5.5", "Haiku 5.5"][index % 3]!,
  tokens: ((index * 7919) % 90000) + 1200,
}))

const columns: DataTableColumn<Thread>[] = [
  {
    accessorKey: "title",
    header: "Thread",
    cell: ({ row }) => <span className="font-medium">{row.original.title}</span>,
  },
  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => (
      <Badge variant="secondary">
        <GitBranchIcon />
        {row.original.branch}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: "oneOf",
    cell: ({ row }) => {
      const status = statuses[row.original.status]
      return (
        <span className="flex items-center gap-2 text-muted-foreground">
          <StatusDot motion={row.original.status === "running" ? "pulse" : "none"} tone={status.tone} />
          {status.label}
        </span>
      )
    },
  },
  { accessorKey: "model", header: "Model" },
  {
    accessorKey: "tokens",
    header: "Tokens",
    meta: { align: "right" },
    cell: ({ row }) => row.original.tokens.toLocaleString("en-US"),
  },
  {
    id: "actions",
    enableHiding: false,
    meta: { align: "right", className: "w-px" },
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button aria-label="Thread actions" size="icon-xs" variant="ghost-muted" />}>
          <MoreHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Open</DropdownMenuItem>
          <DropdownMenuItem>Copy branch name</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export function Default() {
  return <DataTable columns={columns} data={threads} getRowId={(thread) => thread.id} />
}

const statusOptions = (Object.keys(statuses) as Status[]).map((value) => ({
  value,
  label: statuses[value].label,
  icon: <StatusDot tone={statuses[value].tone} />,
}))

export function Filters() {
  return (
    <DataTable
      columns={columns}
      data={threads}
      getRowId={(thread) => thread.id}
      toolbar={
        <DataTableToolbar>
          <DataTableSearch placeholder="Search threads" />
          <DataTableFacetedFilter column="status" options={statusOptions} title="Status" />
          <DataTableViewOptions className="ms-auto" />
        </DataTableToolbar>
      }
    />
  )
}

export function Selection() {
  return (
    <DataTable
      selectable
      columns={columns}
      data={threads}
      getRowId={(thread) => thread.id}
      pageSize={5}
      selectionActions={(rows, clear) => (
        <>
          <Button size="sm" variant="outline" onClick={clear}>
            Archive {rows.length}
          </Button>
          <Button size="sm" variant="destructive-outline" onClick={clear}>
            <Trash2Icon />
            Delete
          </Button>
        </>
      )}
    />
  )
}

const editableColumns: DataTableColumn<Thread>[] = [
  {
    accessorKey: "title",
    header: "Thread",
    meta: { edit: { type: "text", required: true } },
    cell: ({ row }) => <span className="truncate font-medium">{row.original.title}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      edit: {
        type: "select",
        options: (Object.keys(statuses) as Status[]).map((value) => ({
          value,
          label: statuses[value].label,
          icon: <StatusDot tone={statuses[value].tone} />,
        })),
      },
    },
    cell: ({ row }) => {
      const status = statuses[row.original.status]
      return (
        <span className="flex items-center gap-2 text-muted-foreground">
          <StatusDot tone={status.tone} />
          {status.label}
        </span>
      )
    },
  },
  {
    accessorKey: "tokens",
    header: "Tokens",
    meta: { align: "right", edit: { type: "number", min: 0 } },
    cell: ({ row }) => row.original.tokens.toLocaleString("en-US"),
  },
]

export function InlineEditing() {
  const [rows, setRows] = React.useState(threads)

  return (
    <DataTable
      canEditCell={(thread) => thread.status !== "merged"}
      columns={editableColumns}
      data={rows}
      getRowId={(thread) => thread.id}
      pageSize={5}
      onCellEdit={({ rowId, columnId, value }) =>
        setRows((current) =>
          current.map((row) => (row.id === rowId ? { ...row, [columnId]: value } : row))
        )
      }
    />
  )
}

export function SavingToAServer() {
  const [rows, setRows] = React.useState(threads)

  return (
    <DataTable
      columns={editableColumns}
      data={rows}
      getRowId={(thread) => thread.id}
      pageSize={5}
      onCellEdit={async ({ rowId, columnId, value }) => {
        // Stands in for your API. Try a title containing "fail".
        await new Promise((resolve) => setTimeout(resolve, 700))
        if (String(value).toLowerCase().includes("fail")) {
          throw new Error("The server rejected this change.")
        }
        setRows((current) =>
          current.map((row) => (row.id === rowId ? { ...row, [columnId]: value } : row))
        )
      }}
    />
  )
}

const modelColumns: DataTableColumn<Thread>[] = [
  { accessorKey: "title", header: "Thread" },
  {
    accessorKey: "model",
    header: "Model",
    meta: {
      edit: {
        type: "custom",
        render: ({ value, commit }) => (
          <ToggleGroup
            value={[String(value)]}
            variant="segmented"
            onValueChange={([next]) => {
              if (next) commit(next)
            }}
          >
            <ToggleGroupItem value="Opus 5.5">Opus</ToggleGroupItem>
            <ToggleGroupItem value="Sonnet 5.5">Sonnet</ToggleGroupItem>
            <ToggleGroupItem value="Haiku 5.5">Haiku</ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    },
  },
]

export function CustomEditor() {
  const [rows, setRows] = React.useState(threads)

  return (
    <DataTable
      columns={modelColumns}
      data={rows}
      getRowId={(thread) => thread.id}
      pageSize={5}
      pageSizes={false}
      toolbar={false}
      onCellEdit={({ rowId, columnId, value }) =>
        setRows((current) =>
          current.map((row) => (row.id === rowId ? { ...row, [columnId]: value } : row))
        )
      }
    />
  )
}

const compactColumns: DataTableColumn<Thread>[] = [
  { accessorKey: "title", header: "Thread" },
  { accessorKey: "model", header: "Model" },
  {
    accessorKey: "tokens",
    header: "Tokens",
    meta: { align: "right" },
    cell: ({ row }) => row.original.tokens.toLocaleString("en-US"),
  },
]

/** Stands in for your API: pages, sorts and searches on the "server". */
async function fetchThreads(page: number, pageSize: number, search: string, desc: boolean | null) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const matches = threads.filter((thread) => thread.title.toLowerCase().includes(search.toLowerCase()))
  if (desc !== null) matches.sort((a, b) => (desc ? b.tokens - a.tokens : a.tokens - b.tokens))
  return { rows: matches.slice(page * pageSize, (page + 1) * pageSize), total: matches.length }
}

export function ServerSide() {
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = React.useState([{ id: "tokens", desc: true }])
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [result, setResult] = React.useState<{ rows: Thread[]; total: number }>({ rows: [], total: 0 })
  const [loading, setLoading] = React.useState(true)

  const desc = sorting[0]?.desc ?? null

  React.useEffect(() => {
    let cancelled = false
    setLoading(true)
    void fetchThreads(pagination.pageIndex, pagination.pageSize, globalFilter, desc).then((next) => {
      if (cancelled) return
      setResult(next)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [pagination, globalFilter, desc])

  return (
    <DataTable
      columns={compactColumns}
      data={result.rows}
      getRowId={(thread) => thread.id}
      loading={loading}
      options={{
        manualFiltering: true,
        manualPagination: true,
        manualSorting: true,
        rowCount: result.total,
        state: { globalFilter, pagination, sorting },
        onGlobalFilterChange: (updater) => {
          setGlobalFilter(updater)
          setPagination((current) => ({ ...current, pageIndex: 0 }))
        },
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
      }}
      pageSizes={false}
      toolbar={
        <DataTableToolbar>
          <DataTableSearch placeholder="Search on the server" />
        </DataTableToolbar>
      }
    />
  )
}

export function Loading() {
  return <DataTable loading columns={compactColumns} data={[]} pageSizes={false} toolbar={false} />
}

export function NoData() {
  return (
    <DataTable
      columns={compactColumns}
      data={[]}
      empty={
        <Empty size="compact">
          <EmptyHeader>
            <EmptyTitle>No threads yet</EmptyTitle>
            <EmptyDescription>Start a thread and it will show up here.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      }
      pageSizes={false}
      toolbar={false}
    />
  )
}
