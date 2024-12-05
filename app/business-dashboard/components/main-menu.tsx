import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/mode-toggle";
import { BellIcon, FileUpIcon, GaugeCircleIcon, HelpCircleIcon, PieChartIcon, SquareUserIcon, WorkflowIcon } from "lucide-react";

export default function MainMenu() {
    return (
        <nav className="bg-muted overflow-auto p-4 flex flex-col">
            <header className="border-b dark:border-b-black border-gray-400 pb-4">
                <MenuTitle/>
            </header>
            <ul className="py-4 grow">
                <MenuItem  href="/business-dashboard">
                    <div className="flex items-center space-x-2">
                        <GaugeCircleIcon className="w-5 h-5" />
                        <span>Dashboard</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/submit-documents">
                    <div className="flex items-center space-x-2">
                        <FileUpIcon className="w-5 h-5" />
                        <span>Lost and Found</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/manage-documents">
                    <div className="flex items-center space-x-2">
                        <WorkflowIcon className="w-5 h-5" />
                        <span>Manage documents</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/reports">
                    <div className="flex items-center space-x-2">
                        <PieChartIcon className="w-5 h-5" />
                        <span>Reports</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/notifications">
                    <div className="flex items-center space-x-2">
                        <BellIcon className="w-5 h-5" />
                        <span>Notifications</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/profile">
                    <div className="flex items-center space-x-2">
                        <SquareUserIcon className="w-5 h-5" />
                        <span>Profile Management</span>
                    </div>
                </MenuItem>
                <MenuItem href="/business-dashboard/help">
                    <div className="flex items-center space-x-2">
                        <HelpCircleIcon className="w-5 h-5" />
                        <span>Help and support</span>
                    </div>
                </MenuItem>  
            </ul>
            <footer className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="bg-blue-400 dark:bg-blue-800"> 
                        PR
                    </AvatarFallback>
                </Avatar>
                <Link href="/" className="hover:underline">Logout</Link>
                <LightDarkToggle className="ml-auto"/> 
            </footer>
        </nav>
    );
}