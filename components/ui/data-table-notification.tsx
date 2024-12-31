import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./button";
import {
  ChevronLeft,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  CircleXIcon,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "./input";

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
};

function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState(""); // State for global filter
  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({}); // Selection state

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // Add filtered row model
    initialState: {
      pagination: {
        pageSize: 5, // Initial page size
      },
    },
  });

  const allSelected = table.getRowModel().rows.every((row) => selectedRowIds[row.id]);
  const someSelected = table.getRowModel().rows.some((row) => selectedRowIds[row.id]);

  const toggleSelectRow = (rowId: string) => {
    setSelectedRowIds((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const toggleSelectAll = (isChecked: boolean) => {
    const allRowIds = table.getRowModel().rows.map((row) => row.id);
    setSelectedRowIds(
      isChecked
        ? Object.fromEntries(allRowIds.map((id) => [id, true]))
        : {}
    );
  };

  return (
    <div>

    <div className="flex items-center space-x-3 mb-4">
      {Object.values(selectedRowIds).some((isSelected) => isSelected) && (
        <Button variant={"actionError"} className="flex items-center space-x-1">
          <CircleXIcon className="h-4 w-4" />
          <span>Delete</span>
        </Button>
      )}
      <Input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  
    {/* Table */}
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup, index) => (
          <TableRow key={headerGroup.id}>
            {index === 0 && (
              <TableHead>
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={(checked) => toggleSelectAll(!!checked)}
                  className={`${
                    someSelected && !allSelected ? "indeterminate" : ""
                  }`}
                />
              </TableHead>
            )}
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={`${
                selectedRowIds[row.id]
                  ? "text-sm bg-blue-50 transition-colors dark:bg-slate-900"
                  : ""
              } hover:bg-blue-100 dark:hover:bg-slate-800`}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRowIds[row.id] || false}
                  onCheckedChange={() => toggleSelectRow(row.id)}
                />
              </TableCell>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length + 1} className="text-center">
              No results found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  
    {/* Pagination Controls */}
    <div className="flex justify-between items-center mt-4">
      {/* Records Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Select
          onValueChange={(value) => table.setPageSize(Number(value))}
          defaultValue={`${table.getState().pagination.pageSize}`}
        >
          <SelectTrigger className="h-8 w-15 text-sm">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm">records per page</span>
      </div>
  
      {/* Pagination Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="xs"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRightIcon />
        </Button>
      </div>
    </div>
  </div>
  
  );
}

export default DataTable;
