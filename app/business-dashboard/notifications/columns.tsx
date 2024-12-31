import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Switch } from "@/components/ui/switch";
import { InfoIcon, OctagonAlertIcon } from "lucide-react";

// Define the User type
export type Notification = {
  // id: number;
  isAlert:boolean;
  heading:string;
  message: string;
  time: string;
};

// Define columns for DataTable
export const columns: ColumnDef<Notification>[] = [
  {
    accessorKey: "isAlert",
    header: "",
    cell: ({ row }) => {
      const isAlert: boolean = row.getValue("isAlert");
      return isAlert ? (
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
          <InfoIcon className="w-4 h-4 text-blue-600" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
          <OctagonAlertIcon className="w-4 h-4 text-red-600" />
        </div>
      );
    },
  },

  {
    accessorKey: "heading",
    header: "",
    cell: ({ row }) => (
      <span className="font-semibold text-gray-700"> {row.getValue("heading")}</span>
    ),
  },
  {
    accessorKey: "message",
     header: "",
     cell: ({ row }) => (
       <span className="text-sm"> {row.getValue("message")}</span>
     ),
  },
  
  {
    accessorKey: "time",
    header: "",
    cell: ({ row }) => (
      <span className="text-sm text-gray-600"> {row.getValue("time")}</span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">
                      <div className="flex justify-end items-center space-x-2">
                        <label className="text-sm font-medium">Only show unread</label>
                        <Switch checked={true} />
                      </div>
                  </div>,
    cell: ({ row }) => {
      return (

          <div className="flex justify-end gap-2">
            <Button
              variant={"linkPrimary"} id={row.getValue("id")}>
              Read
            </Button>
          </div>

      );
    },
  },
];


