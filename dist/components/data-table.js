"use client";
"use client";
import { Badge } from "./badge.js";
import { Button } from "./button.js";
import { Checkbox } from "./checkbox.js";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu.js";
import { Input } from "./input.js";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group.js";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select.js";
import { Skeleton } from "./skeleton.js";
import { Spinner } from "./spinner.js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table.js";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip.js";
import { cn } from "../lib/utils.js";
import { ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon, CircleAlertIcon, Columns3Icon, ListFilterIcon, SearchIcon, XIcon } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FlexRender, columnFacetingFeature, columnFilteringFeature, columnVisibilityFeature, createFacetedRowModel, createFacetedUniqueValues, createFilteredRowModel, createPaginatedRowModel, createSortedRowModel, filterFn_arrIncludes, filterFn_equals, filterFn_inDateRange, filterFn_inNumberRange, filterFn_includesString, filterFn_weakEquals, globalFilteringFeature, rowPaginationFeature, rowSelectionFeature, rowSortingFeature, sortFn_alphanumeric, sortFn_basic, sortFn_datetime, sortFn_text, tableFeatures, useTable } from "@tanstack/react-table";
// src/components/data-table.tsx
/**
* Keeps a row whose value is one of the chosen values. Works for single values
* and for arrays such as tags, unlike the built-in `arrIncludesSome`, which in
* v9 only matches when the row's value is itself an array.
*/
function filterFn_oneOf(row, columnId, filterValue) {
	const value = row.getValue(columnId);
	return Array.isArray(value) ? value.some((item) => filterValue.includes(item)) : filterValue.includes(value);
}
filterFn_oneOf.autoRemove = (value) => !Array.isArray(value) || value.length === 0;
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
		weakEquals: filterFn_weakEquals
	},
	sortFns: {
		alphanumeric: sortFn_alphanumeric,
		basic: sortFn_basic,
		datetime: sortFn_datetime,
		text: sortFn_text
	},
	columnMeta: {}
});
const DataTableContext = React.createContext(null);
function useDataTableContext() {
	const table = React.useContext(DataTableContext);
	if (!table) throw new Error("DataTable parts must be used inside DataTable");
	return table;
}
const DataTableEditContext = React.createContext(null);
function alignClass(align) {
	return align === "right" ? "text-right tabular-nums" : void 0;
}
function SelectAllCheckbox() {
	const table = useDataTableContext();
	const all = table.getIsAllPageRowsSelected();
	return /* @__PURE__ */ jsx(Checkbox, {
		"aria-label": "Select all rows on this page",
		checked: all,
		indeterminate: !all && table.getIsSomePageRowsSelected(),
		onCheckedChange: (checked) => table.toggleAllPageRowsSelected(checked)
	});
}
/** Adds the checkbox column, so a table only has to say `selectable`. */
function selectionColumn() {
	return {
		id: "__select",
		header: () => /* @__PURE__ */ jsx("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ jsx(SelectAllCheckbox, {})
		}),
		cell: ({ row }) => /* @__PURE__ */ jsx("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ jsx(Checkbox, {
				"aria-label": "Select row",
				checked: row.getIsSelected(),
				disabled: !row.getCanSelect(),
				onCheckedChange: (checked) => row.toggleSelected(checked)
			})
		}),
		enableGlobalFilter: false,
		enableHiding: false,
		enableSorting: false,
		meta: { className: "w-px" }
	};
}
function DataTableColumnHeader({ header, children }) {
	const sorted = header.column.getIsSorted();
	const right = header.column.columnDef.meta?.align === "right";
	return /* @__PURE__ */ jsxs("button", {
		"data-slot": "data-table-sort",
		type: "button",
		className: cn("group/sort -mx-1 inline-flex h-6 cursor-pointer select-none items-center gap-1 rounded-sm px-1 font-medium outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring [&_svg]:size-3 [&_svg]:shrink-0", right && "flex-row-reverse", sorted && "text-foreground"),
		onClick: header.column.getToggleSortingHandler(),
		children: [children, sorted === "asc" ? /* @__PURE__ */ jsx(ArrowUpIcon, {}) : sorted === "desc" ? /* @__PURE__ */ jsx(ArrowDownIcon, {}) : /* @__PURE__ */ jsx(ChevronsUpDownIcon, { className: "opacity-0 transition-opacity group-hover/sort:opacity-64 group-focus-visible/sort:opacity-64 pointer-coarse:opacity-64" })]
	});
}
function renderHeader(header) {
	const content = /* @__PURE__ */ jsx(FlexRender, { header });
	return header.column.getCanSort() && typeof header.column.columnDef.header === "string" ? /* @__PURE__ */ jsx(DataTableColumnHeader, {
		header,
		children: content
	}) : content;
}
function ariaSort(sorted) {
	if (sorted === "asc") return "ascending";
	if (sorted === "desc") return "descending";
}
function DataTableSearch({ className, placeholder = "Search" }) {
	const table = useDataTableContext();
	const value = String(table.state.globalFilter ?? "");
	return /* @__PURE__ */ jsxs(InputGroup, {
		className: cn("w-full sm:w-56", className),
		children: [
			/* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(SearchIcon, {}) }),
			/* @__PURE__ */ jsx(InputGroupInput, {
				"aria-label": placeholder,
				placeholder,
				type: "search",
				value,
				onChange: (event) => table.setGlobalFilter(event.target.value)
			}),
			value && /* @__PURE__ */ jsx(InputGroupAddon, {
				align: "inline-end",
				children: /* @__PURE__ */ jsx(InputGroupButton, {
					"aria-label": "Clear search",
					size: "icon-xs",
					onClick: () => table.setGlobalFilter(""),
					children: /* @__PURE__ */ jsx(XIcon, {})
				})
			})
		]
	});
}
/**
* Filter one column by a set of values, with a count beside each. The column
* needs `filterFn: "oneOf"`.
*/
function DataTableFacetedFilter({ column: columnId, title, options }) {
	const column = useDataTableContext().getColumn(columnId);
	if (!column) return null;
	const selected = new Set(column.getFilterValue() ?? []);
	const counts = column.getFacetedUniqueValues();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button, {
			size: "sm",
			variant: "outline"
		}),
		children: [
			/* @__PURE__ */ jsx(ListFilterIcon, {}),
			title,
			selected.size > 0 && /* @__PURE__ */ jsx(Badge, {
				size: "sm",
				variant: "secondary",
				children: selected.size
			})
		]
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "start",
		className: "min-w-48",
		children: [/* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [/* @__PURE__ */ jsx(DropdownMenuLabel, { children: title }), options.map((option) => /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
			checked: selected.has(option.value),
			closeOnClick: false,
			onCheckedChange: (checked) => {
				const next = new Set(selected);
				if (checked) next.add(option.value);
				else next.delete(option.value);
				column.setFilterValue(next.size > 0 ? [...next] : void 0);
			},
			children: /* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 flex-1 items-center gap-2",
				children: [
					option.icon,
					/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: option.label
					}),
					/* @__PURE__ */ jsx("span", {
						className: "ms-auto ps-3 text-2xs text-muted-foreground tabular-nums",
						children: counts.get(option.value) ?? 0
					})
				]
			})
		}, option.value))] }), selected.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DropdownMenuSeparator, {}), /* @__PURE__ */ jsx(DropdownMenuItem, {
			onClick: () => column.setFilterValue(void 0),
			children: "Clear filter"
		})] })]
	})] });
}
function DataTableViewOptions({ className }) {
	const columns = useDataTableContext().getAllLeafColumns().filter((column) => column.getCanHide());
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button, {
			className,
			size: "sm",
			variant: "outline"
		}),
		children: [/* @__PURE__ */ jsx(Columns3Icon, {}), "Columns"]
	}), /* @__PURE__ */ jsx(DropdownMenuContent, {
		align: "end",
		className: "min-w-40",
		children: /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [/* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Show columns" }), columns.map((column) => {
			const header = column.columnDef.header;
			return /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
				checked: column.getIsVisible(),
				closeOnClick: false,
				onCheckedChange: (checked) => column.toggleVisibility(checked),
				children: column.columnDef.meta?.label ?? (typeof header === "string" ? header : column.id)
			}, column.id);
		})] })
	})] });
}
function DataTableToolbar({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "data-table-toolbar",
		className: cn("flex min-h-8 flex-wrap items-center gap-2 sm:min-h-7", className),
		...props
	});
}
function DataTablePagination({ pageSizes = [
	10,
	25,
	50
] }) {
	const table = useDataTableContext();
	const { pageIndex, pageSize } = table.state.pagination;
	const total = table.getRowCount();
	const selected = Object.keys(table.state.rowSelection).length;
	const first = total === 0 ? 0 : pageIndex * pageSize + 1;
	const last = Math.min((pageIndex + 1) * pageSize, total);
	const sizes = pageSizes ? pageSizes.map((size) => ({
		label: String(size),
		value: size
	})) : [];
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "data-table-pagination",
		className: "flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t px-3 py-1.5 text-muted-foreground text-xs",
		children: [/* @__PURE__ */ jsx("p", {
			className: "tabular-nums",
			children: selected > 0 ? `${selected} of ${total} selected` : `${total} ${total === 1 ? "row" : "rows"}`
		}), /* @__PURE__ */ jsxs("div", {
			className: "ms-auto flex items-center gap-3",
			children: [
				pageSizes && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 max-sm:hidden",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": true,
						children: "Rows per page"
					}), /* @__PURE__ */ jsxs(Select, {
						items: sizes,
						value: pageSize,
						onValueChange: (value) => {
							if (value !== null) table.setPageSize(value);
						},
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							"aria-label": "Rows per page",
							className: "w-16 min-w-0",
							size: "xs",
							children: /* @__PURE__ */ jsx(SelectValue, {})
						}), /* @__PURE__ */ jsx(SelectContent, { children: sizes.map((size) => /* @__PURE__ */ jsx(SelectItem, {
							value: size.value,
							children: size.label
						}, size.value)) })]
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					"aria-live": "polite",
					className: "tabular-nums",
					children: [
						first,
						"–",
						last,
						" of ",
						total
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-0.5",
					children: [/* @__PURE__ */ jsx(Button, {
						"aria-label": "Previous page",
						disabled: !table.getCanPreviousPage(),
						size: "icon-xs",
						variant: "ghost",
						onClick: () => table.previousPage(),
						children: /* @__PURE__ */ jsx(ChevronLeftIcon, {})
					}), /* @__PURE__ */ jsx(Button, {
						"aria-label": "Next page",
						disabled: !table.getCanNextPage(),
						size: "icon-xs",
						variant: "ghost",
						onClick: () => table.nextPage(),
						children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
					})]
				})
			]
		})]
	});
}
function SelectionBar({ actions }) {
	const table = useDataTableContext();
	const rows = table.getSelectedRowModel().rows.map((row) => row.original);
	const clear = () => table.resetRowSelection(true);
	return /* @__PURE__ */ jsxs(DataTableToolbar, {
		"data-slot": "data-table-selection-bar",
		children: [
			/* @__PURE__ */ jsx(Button, {
				"aria-label": "Clear selection",
				size: "icon-sm",
				variant: "ghost-muted",
				onClick: clear,
				children: /* @__PURE__ */ jsx(XIcon, {})
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "me-auto font-medium text-sm tabular-nums",
				children: [rows.length, " selected"]
			}),
			actions(rows, clear)
		]
	});
}
const EDITOR_INPUT_CLASS = "size-full min-w-0 [&_input]:h-full [&_input]:px-[calc(--spacing(1.5)-1px)] [&_input]:text-base [&_input]:leading-none sm:[&_input]:h-full sm:[&_input]:text-sm in-[td:first-child]:[&_input]:ps-[calc(--spacing(2.5)-1px)] in-[td:last-child]:[&_input]:pe-[calc(--spacing(2.5)-1px)]";
function InputEditor({ editor, initial, error: initialError, align, label, onSave, onCancel }) {
	const [draft, setDraft] = React.useState(initial === null || initial === void 0 ? "" : String(initial));
	const [error, setError] = React.useState(initialError);
	const inputRef = React.useRef(null);
	const finished = React.useRef(false);
	React.useEffect(() => {
		inputRef.current?.focus();
		inputRef.current?.select();
	}, []);
	function parse() {
		if (editor.type === "text") {
			if (editor.required && draft.trim() === "") return { message: "This can't be empty." };
			const message = editor.validate?.(draft);
			return message ? { message } : { value: draft };
		}
		if (draft.trim() === "") return { value: null };
		const value = Number(draft);
		if (Number.isNaN(value)) return { message: "Enter a number." };
		if (editor.min !== void 0 && value < editor.min) return { message: `Must be at least ${editor.min}.` };
		if (editor.max !== void 0 && value > editor.max) return { message: `Must be at most ${editor.max}.` };
		const message = editor.validate?.(value);
		return message ? { message } : { value };
	}
	function submit(move) {
		const result = parse();
		if ("message" in result) {
			setError(result.message);
			return;
		}
		finished.current = true;
		onSave(result.value, {
			move,
			refocus: true
		});
	}
	return /* @__PURE__ */ jsxs(Tooltip, {
		open: Boolean(error),
		children: [
			/* @__PURE__ */ jsx(TooltipTrigger, {
				render: /* @__PURE__ */ jsx("span", { className: "absolute inset-0.5 block" }),
				children: /* @__PURE__ */ jsx(Input, {
					ref: inputRef,
					"aria-invalid": error ? true : void 0,
					"aria-label": label,
					className: cn(EDITOR_INPUT_CLASS, align === "right" && "[&_input]:text-right [&_input]:tabular-nums"),
					inputMode: editor.type === "number" ? "decimal" : void 0,
					placeholder: editor.placeholder,
					size: "compact",
					value: draft,
					onBlur: () => {
						if (finished.current) return;
						finished.current = true;
						const result = parse();
						if ("message" in result) onCancel({ refocus: false });
						else onSave(result.value, { refocus: false });
					},
					onChange: (event) => {
						setDraft(event.target.value);
						setError(void 0);
					},
					onKeyDown: (event) => {
						if (event.key === "Enter") {
							event.preventDefault();
							submit();
						} else if (event.key === "Escape") {
							event.preventDefault();
							finished.current = true;
							onCancel({ refocus: true });
						} else if (event.key === "Tab") {
							event.preventDefault();
							submit(event.shiftKey ? -1 : 1);
						}
					}
				})
			}),
			/* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				children: error
			}),
			error && /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				role: "alert",
				children: error
			})
		]
	});
}
function SelectEditor({ editor, initial, label, onSave, onCancel }) {
	const finished = React.useRef(false);
	return /* @__PURE__ */ jsxs(Select, {
		defaultOpen: true,
		items: editor.options,
		modal: false,
		value: initial,
		onOpenChange: (open) => {
			if (open || finished.current) return;
			finished.current = true;
			onCancel({ refocus: true });
		},
		onValueChange: (value) => {
			finished.current = true;
			onSave(value, { refocus: true });
		},
		children: [/* @__PURE__ */ jsx(SelectTrigger, {
			"aria-label": label,
			className: "absolute inset-0.5 h-auto min-h-0 w-auto min-w-0 rounded-md px-[calc(--spacing(1.5)-1px)] text-base sm:h-auto sm:min-h-0 sm:text-sm in-[td:first-child]:ps-[calc(--spacing(2.5)-1px)] in-[td:last-child]:pe-[calc(--spacing(2.5)-1px)]",
			size: "xs",
			children: /* @__PURE__ */ jsx(SelectValue, { children: (value) => {
				const option = editor.options.find((item) => item.value === value);
				return /* @__PURE__ */ jsxs("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [option?.icon, /* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: option?.label ?? value
					})]
				});
			} })
		}), /* @__PURE__ */ jsx(SelectContent, {
			alignItemWithTrigger: false,
			className: "min-w-40",
			matchTriggerWidth: false,
			children: editor.options.map((option) => /* @__PURE__ */ jsx(SelectItem, {
				value: option.value,
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2",
					children: [option.icon, option.label]
				})
			}, option.value))
		})]
	});
}
function CustomEditor({ children, onCancel }) {
	const ref = React.useRef(null);
	const latestCancel = React.useRef(onCancel);
	latestCancel.current = onCancel;
	React.useEffect(() => {
		ref.current?.querySelector("input, select, textarea, button, [tabindex]")?.focus();
		function onPointerDown(event) {
			const target = event.target;
			const inPopup = target.closest("[role=\"listbox\"], [role=\"menu\"], [role=\"dialog\"], [data-slot$=\"-popup\"]");
			if (!ref.current?.contains(target) && !inPopup) latestCancel.current({ refocus: false });
		}
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "absolute inset-0.5 flex items-center",
		onKeyDown: (event) => {
			if (event.key === "Escape") onCancel({ refocus: true });
		},
		children
	});
}
function editorText(editor, value) {
	if (editor.type === "select") return editor.options.find((option) => option.value === value)?.label ?? String(value ?? "");
	return value === null || value === void 0 ? "" : String(value);
}
/**
* A cell you can click or tab to. The editor is drawn over the cell while the
* display stays in place underneath, so columns never change width.
*/
function EditableCell({ cell, editor, label }) {
	const context = React.useContext(DataTableEditContext);
	if (!context) throw new Error("EditableCell must be used inside DataTable");
	const { editingId, setEditingId, onCellEdit, rootRef } = context;
	const [pending, setPending] = React.useState(null);
	const [failure, setFailure] = React.useState(null);
	const [failureTipOpen, setFailureTipOpen] = React.useState(false);
	const buttonRef = React.useRef(null);
	const refocusOnExit = React.useRef(false);
	const isEditing = editingId === cell.id;
	const value = cell.getValue();
	const align = cell.column.columnDef.meta?.align;
	React.useEffect(() => {
		if (!isEditing && refocusOnExit.current) {
			refocusOnExit.current = false;
			buttonRef.current?.focus();
		}
	}, [isEditing]);
	React.useEffect(() => {
		if (!failure || !failureTipOpen) return;
		const timer = window.setTimeout(() => setFailureTipOpen(false), 4e3);
		return () => window.clearTimeout(timer);
	}, [failure, failureTipOpen]);
	function fail(next, error) {
		setFailure({
			value: next,
			message: messageFrom(error)
		});
		setFailureTipOpen(true);
	}
	function moveTo(direction) {
		const cells = [...rootRef.current?.querySelectorAll("[data-edit-cell]") ?? []];
		const target = cells[cells.findIndex((element) => element === buttonRef.current) + direction];
		if (target?.dataset.editCell) setEditingId(target.dataset.editCell);
		else {
			refocusOnExit.current = true;
			setEditingId(null);
		}
	}
	function exit(options) {
		if (options.move) {
			moveTo(options.move);
			return;
		}
		refocusOnExit.current = options.refocus;
		setEditingId(null);
	}
	function save(next, options) {
		exit(options);
		setFailure(null);
		setFailureTipOpen(false);
		if (editorText(editor, next) === editorText(editor, value)) return;
		let result;
		try {
			result = onCellEdit({
				row: cell.row.original,
				rowId: cell.row.id,
				columnId: cell.column.id,
				value: next,
				previous: value
			});
		} catch (error) {
			fail(next, error);
			return;
		}
		if (result instanceof Promise) {
			setPending({ value: next });
			result.then(() => setPending(null), (error) => {
				setPending(null);
				fail(next, error);
			});
		}
	}
	const text = editorText(editor, value);
	const initial = failure ? failure.value : value;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Tooltip, {
			disabled: !failure,
			open: failureTipOpen,
			onOpenChange: setFailureTipOpen,
			children: [/* @__PURE__ */ jsxs(TooltipTrigger, {
				render: /* @__PURE__ */ jsx("button", {
					ref: buttonRef,
					"aria-label": `Edit ${label}${text ? `: ${text}` : ""}`,
					"data-edit-cell": cell.id,
					"data-slot": "data-table-editable-cell",
					disabled: Boolean(pending),
					tabIndex: isEditing ? -1 : 0,
					type: "button",
					className: cn("group/edit -mx-1.5 -my-0.5 flex min-h-6 w-[calc(100%+--spacing(3))] items-center gap-1.5 rounded-md px-1.5 py-0.5 text-left outline-none transition-colors hover:bg-accent hover:ring-1 hover:ring-input hover:ring-inset focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-default", editor.type === "select" ? "cursor-pointer" : "cursor-text", align === "right" && "justify-end text-right", isEditing && "invisible", failure && "ring-1 ring-destructive/36 ring-inset hover:ring-destructive/36"),
					onClick: () => {
						setFailureTipOpen(false);
						setEditingId(cell.id);
					},
					onKeyDown: (event) => {
						if (event.key === "F2") setEditingId(cell.id);
					}
				}),
				children: [
					failure && /* @__PURE__ */ jsx(CircleAlertIcon, { className: "size-3.5 shrink-0 text-destructive" }),
					pending ? /* @__PURE__ */ jsxs("span", {
						className: "inline-flex min-w-0 items-center gap-1.5 text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", {
							className: "truncate",
							children: editorText(editor, pending.value)
						}), /* @__PURE__ */ jsx(Spinner, { size: "xs" })]
					}) : text === "" ? /* @__PURE__ */ jsx("span", {
						className: "text-placeholder",
						children: editor.placeholder ?? "Empty"
					}) : /* @__PURE__ */ jsx(FlexRender, { cell }),
					editor.type === "select" && !pending && /* @__PURE__ */ jsx(ChevronDownIcon, { className: "ms-auto size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/edit:opacity-64 group-focus-visible/edit:opacity-64 pointer-coarse:opacity-64" })
				]
			}), failure && /* @__PURE__ */ jsx(TooltipContent, { children: failure.message })]
		}),
		failure && /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			role: "alert",
			children: `${label} wasn't saved. ${failure.message}`
		}),
		isEditing && (editor.type === "select" ? /* @__PURE__ */ jsx(SelectEditor, {
			editor,
			initial,
			label,
			onCancel: exit,
			onSave: save
		}) : editor.type === "custom" ? /* @__PURE__ */ jsx(CustomEditor, {
			onCancel: exit,
			children: editor.render({
				value: initial,
				commit: (next) => save(next, { refocus: true }),
				cancel: () => exit({ refocus: true })
			})
		}) : /* @__PURE__ */ jsx(InputEditor, {
			align,
			editor,
			error: failure?.message,
			initial,
			label,
			onCancel: exit,
			onSave: save
		}))
	] });
}
function messageFrom(error) {
	return error instanceof Error && error.message ? error.message : "Couldn't save this change.";
}
function columnLabel(column) {
	const header = column.columnDef.header;
	return column.columnDef.meta?.label ?? (typeof header === "string" ? header : column.id);
}
function DataTableBody({ loading, empty, skeletonRows, editable, canEditCell }) {
	const table = useDataTableContext();
	const rows = table.getRowModel().rows;
	const columnCount = table.getVisibleLeafColumns().length;
	const filtered = Boolean(table.state.globalFilter) || table.state.columnFilters.length > 0;
	if (rows.length === 0 && loading) return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: skeletonRows }, (_, row) => /* @__PURE__ */ jsx(TableRow, {
		className: "hover:bg-transparent",
		children: table.getVisibleLeafColumns().map((column) => /* @__PURE__ */ jsx(TableCell, {
			className: "first:ps-3 last:pe-3",
			children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-full max-w-24" })
		}, column.id))
	}, row)) });
	if (rows.length === 0) return /* @__PURE__ */ jsx(TableRow, {
		className: "hover:bg-transparent",
		children: /* @__PURE__ */ jsx(TableCell, {
			className: "h-40 whitespace-normal text-center",
			colSpan: columnCount,
			children: filtered ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-sm",
					children: "Nothing matches those filters."
				}), /* @__PURE__ */ jsx(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => {
						table.setGlobalFilter("");
						table.resetColumnFilters(true);
					},
					children: "Clear filters"
				})]
			}) : empty ?? /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Nothing here yet."
			})
		})
	});
	return /* @__PURE__ */ jsx(Fragment, { children: rows.map((row) => /* @__PURE__ */ jsx(TableRow, {
		"data-state": row.getIsSelected() ? "selected" : void 0,
		children: row.getVisibleCells().map((cell) => {
			const meta = cell.column.columnDef.meta;
			const editor = editable && (canEditCell?.(row.original, cell.column.id) ?? true) ? meta?.edit : void 0;
			return /* @__PURE__ */ jsx(TableCell, {
				className: cn("first:ps-3 last:pe-3", editor && "relative", alignClass(meta?.align), meta?.className),
				children: editor ? /* @__PURE__ */ jsx(EditableCell, {
					cell,
					editor,
					label: columnLabel(cell.column)
				}) : /* @__PURE__ */ jsx(FlexRender, { cell })
			}, cell.id);
		})
	}, row.id)) });
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
function DataTable({ columns, data, getRowId, selectable = false, selectionActions, pageSize = 10, pageSizes, loading = false, empty, toolbar, onCellEdit, canEditCell, options, className }) {
	const allColumns = React.useMemo(() => selectable ? [selectionColumn(), ...columns] : columns, [columns, selectable]);
	const table = useTable({
		features: dataTableFeatures,
		columns: allColumns,
		data,
		getRowId: getRowId ? (row) => getRowId(row) : void 0,
		globalFilterFn: "includesString",
		autoResetPageIndex: false,
		...options,
		initialState: {
			...options?.initialState,
			pagination: {
				pageIndex: 0,
				pageSize,
				...options?.initialState?.pagination
			}
		}
	});
	const [editingId, setEditingId] = React.useState(null);
	const rootRef = React.useRef(null);
	const editContext = React.useMemo(() => onCellEdit ? {
		editingId,
		setEditingId,
		onCellEdit,
		rootRef
	} : null, [editingId, onCellEdit]);
	const { globalFilter, columnFilters, sorting, pagination } = table.state;
	const manualPagination = options?.manualPagination ?? false;
	const resetsOn = React.useRef({
		globalFilter,
		columnFilters,
		sorting
	});
	const pageCount = table.getPageCount();
	React.useEffect(() => {
		const previous = resetsOn.current;
		if (previous.globalFilter === globalFilter && previous.columnFilters === columnFilters && previous.sorting === sorting) return;
		resetsOn.current = {
			globalFilter,
			columnFilters,
			sorting
		};
		if (!manualPagination) table.setPageIndex(0);
	}, [
		columnFilters,
		globalFilter,
		manualPagination,
		sorting,
		table
	]);
	React.useEffect(() => {
		if (!manualPagination && pagination.pageIndex > 0 && pagination.pageIndex >= pageCount) table.setPageIndex(Math.max(pageCount - 1, 0));
	}, [
		manualPagination,
		pageCount,
		pagination.pageIndex,
		table
	]);
	const showToolbar = Object.keys(table.state.rowSelection).length > 0 && selectionActions;
	return /* @__PURE__ */ jsx(DataTableContext.Provider, {
		value: table,
		children: /* @__PURE__ */ jsx(DataTableEditContext.Provider, {
			value: editContext,
			children: /* @__PURE__ */ jsxs("div", {
				ref: rootRef,
				"data-slot": "data-table",
				className: cn("flex w-full min-w-0 flex-col gap-3", className),
				children: [showToolbar ? /* @__PURE__ */ jsx(SelectionBar, { actions: selectionActions }) : toolbar === false ? null : toolbar ?? /* @__PURE__ */ jsxs(DataTableToolbar, { children: [/* @__PURE__ */ jsx(DataTableSearch, {}), /* @__PURE__ */ jsx(DataTableViewOptions, { className: "ms-auto" })] }), /* @__PURE__ */ jsxs("div", {
					className: "overflow-hidden rounded-xl border bg-card text-card-foreground",
					children: [/* @__PURE__ */ jsxs(Table, {
						"aria-busy": loading || void 0,
						className: cn("text-sm", loading && data.length > 0 && "opacity-64 transition-opacity"),
						children: [/* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((group) => /* @__PURE__ */ jsx(TableRow, {
							className: "hover:bg-transparent",
							children: group.headers.map((header) => {
								const meta = header.column.columnDef.meta;
								return /* @__PURE__ */ jsx(TableHead, {
									"aria-sort": ariaSort(header.column.getIsSorted()),
									className: cn("first:ps-3 last:pe-3", alignClass(meta?.align), meta?.className),
									children: header.isPlaceholder ? null : renderHeader(header)
								}, header.id);
							})
						}, group.id)) }), /* @__PURE__ */ jsx(TableBody, { children: /* @__PURE__ */ jsx(DataTableBody, {
							canEditCell,
							editable: Boolean(onCellEdit),
							empty,
							loading,
							skeletonRows: Math.min(pageSize, 5)
						}) })]
					}), /* @__PURE__ */ jsx(DataTablePagination, { pageSizes })]
				})]
			})
		})
	});
}
export { DataTable, DataTableColumnHeader, DataTableFacetedFilter, DataTablePagination, DataTableSearch, DataTableToolbar, DataTableViewOptions, dataTableFeatures, useDataTableContext };
