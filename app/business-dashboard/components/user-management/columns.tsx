import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PencilIcon, TrashIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"; // Import ShadCN AlertDialog
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PasswordInput } from "@/components/ui/password-input";

// Define the Zod schema for validation
const editUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  phone: z.string().min(8, "Phone must be at least 8 digits").max(15, "Phone cannot exceed 15 digits"),
  password: z.string().optional(),
  isStatusActive: z.boolean().default(false),
});

// Type for form data
type EditUserFormData = z.infer<typeof editUserSchema>;

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
        <Badge variant={"error"}>Inactive</Badge>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="hover:bg-primary hover:text-white"
                      variant={"outline"}
                      size={"xs"}
                    >
                      <PencilIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit User</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      Edit the details of <strong>{user.username}</strong>.
                    </DialogDescription>

                    {/* Form for Editing User */}
                    <EditUserForm user={user} />
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit this user</p>
              </TooltipContent>
            </Tooltip>

            {/* Tooltip for Delete Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      className="hover:bg-red-600 hover:text-white"
                      variant={"secondary"}
                      size={"xs"}
                    >
                      <TrashIcon />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete <strong>{user.username}</strong>? This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          handleDelete(user);
                        }}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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

// Define the form component
const EditUserForm = ({ user }: { user: User }) => {
  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      username: user.username,
      phone: user.phone,
      isStatusActive: user.isStatusActive,
    },
  });

  const onSubmit = (data: EditUserFormData) => {
    console.log("Edited data:", data);
    // Add logic to update the user
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="New Password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            name="isStatusActive"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Status</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <span
                      className={`text-xs font-bold ${
                        field.value ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {field.value ? "Active" : "Inactive"}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
        />  
        <div className="flex justify-end gap-2">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="default" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

// Define the functions for Edit and Delete
const handleDelete = (user: User) => {
  console.log("Delete clicked for user:", user);
  // Add your delete logic here
};
