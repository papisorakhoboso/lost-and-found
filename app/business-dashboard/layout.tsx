import { ReactNode } from "react";
import MainMenu from "./components/main-menu";
import { SearchIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function BusinessDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold">Lesotho Mounted Police Service</h2>
          <Sheet>
            <SheetTrigger asChild>
              <SearchIcon className="mr-5 h-6 w-6 cursor-pointer hover:text-primary" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Search</SheetTitle>
                <SheetDescription>
                  <Input placeholder="Search..." />
                </SheetDescription>
              </SheetHeader>
              {/* Add your search functionality or components here */}
            </SheetContent>
          </Sheet>
        </div>
        {children}
      </div>
    </div>
  );
}
