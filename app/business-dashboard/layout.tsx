import { ReactNode } from "react";
import MainMenu from "./components/main-menu";

export default function BusinessDashboardLayout({children} : {children : ReactNode}) {
    return (
        <div className="grid grid-cols-[250px_1fr] h-screen">
            <MainMenu/>
            <div className="overflow-auto py-2 px-4">
                <h2 className="font-extrabold pb-4">Moafrika FM</h2>
                {children}
            </div>
        </div>
    );
} 