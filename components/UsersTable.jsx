"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FunnelSimple, MagnifyingGlass, CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import NewUserModal from "./NewUserModal";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "fullname",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <CaretUpDown size={18} className="text-[#94A3B8]" weight="bold" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[#344054] font-light lowercase whitespace-nowrap">
          {row.getValue("fullname")}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email Address
            <CaretUpDown size={18} className="text-[#94A3B8]" weight="bold" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[#344054] font-light lowercase">
          {row.getValue("email")}
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Role
            <CaretUpDown size={18} className="text-[#94A3B8]" weight="bold" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const role = row.getValue("role");
        let colorClass = "";
  
        switch (role) {
          case "Administrator":
            colorClass = "bg-[#F0F6FE] text-[#0D6EFD]";
            break;
          case "Sales Manager":
            colorClass = "bg-[#E7F6EC] text-[#0F973D]";
            break;
          case "Sales Representative":
            colorClass = "bg-[#FEF4E6] text-[#F58A07]";
            break;
          default:
            colorClass = "";
        }
  
        return (
          <div
            className={`${colorClass} font-normal whitespace-nowrap inline-block rounded-full px-3 py-1`}
          >
            {role}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => (
        <div className="flex items-center gap-5">
          <EditUserModal user={row.original} />
          <DeleteUserModal user={row.original} />
        </div>
      ),
    },
];
  
const DataTable = () => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://voyatest3.free.beeceptor.com/api/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-white rounded-[6px] mt-6">

      <div className="flex items-center gap-3 p-4">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search here..."
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="font-light bg-white border border-[#CBD5E1] rounded-[6px] pl-10 placeholder:text-[#94A3B8]"
          />
          <MagnifyingGlass
            size={18}
            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#94A3B8]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-[#334155] border border-[#CBD5E1] gap-2 rounded-[6px]">
              <FunnelSimple size={18} color="#334155" />
              <span className="hidden md:block">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <NewUserModal getUsers={getUsers} />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#F0F2F5] border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No users.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
