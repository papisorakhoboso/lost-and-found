import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PencilIcon, TrashIcon } from "lucide-react";

// Define the User type
export type User = {
  id: number;
  username: string;
  phone: string;
  isStatusActive: boolean;
  last_seen: string;
};

// Define columns for DataTable
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "isStatusActive",
    header: "Status",
    cell: ({ row }) => {
      const isStatusActive: boolean = row.getValue("isStatusActive");
      return isStatusActive ? (
        <Badge variant={"success"}>Active</Badge>
      ) : (
        <Badge variant={"destructive"}>Inactive</Badge>
      );
    },
  },
  {
    accessorKey: "last_seen",
    header: "Last Seen",
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <TooltipProvider>
          <div className="flex justify-end gap-2">
            {/* Tooltip for Edit Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="hover:bg-primary hover:text-white"
                  variant={"outline"}
                  size={"xs"}
                  onClick={() => handleEdit(user)}
                >
                  <PencilIcon/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit this </p>
              </TooltipContent>
            </Tooltip>

            {/* Tooltip for Delete Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="hover:bg-red-600 hover:text-white"
                  variant={"secondary"}
                  size={"xs"}
                  onClick={() => handleDelete(user)}
                >
                  <TrashIcon/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete this user</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    },
  },
];

// Define the functions for Edit and Delete
const handleEdit = (user: User) => {
  console.log("Edit clicked for user:", user);
  // Add your edit logic here
};

const handleDelete = (user: User) => {
  console.log("Delete clicked for user:", user);
  // Add your delete logic here
};
