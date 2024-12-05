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
import { Button } from "./button";
import {
  ChevronLeft,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "./input";

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
};

function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState(""); // State for global filter

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

  return (
    <div>
      {/* Filter Input */}
      <div className="mb-4">
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
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="table-row-custom">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="table-cell-custom">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="table-row-custom">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="table-cell-custom">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
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
            className="btn"
            variant="outline"
            size="xs"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeftIcon />
          </Button>
          <Button
            className="btn"
            variant="outline"
            size="xs"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <Button
            className="btn"
            variant="outline"
            size="xs"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className="btn"
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
