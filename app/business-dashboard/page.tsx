import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NationalDocuments from "./components/national-documents/national-documents";
import OtherDocuments from "./components/others/other-documents";

export default function BusinessDashboardPage() {
    return (
        <div className="mt-2">
            <Tabs defaultValue="national-docs">
            <TabsList className="bg-slate-300 dark:bg-gray-800 mb-4 ">
                <TabsTrigger value="national-docs" className="data-[state=active]:font-semibold data-[state=active]:text-primary">
                    National Documents
                </TabsTrigger>
                <TabsTrigger value="others" className="data-[state=active]:font-semibold data-[state=active]:text-primary">
                    Others
                </TabsTrigger>
            </TabsList>
            <TabsContent value="national-docs">
                <NationalDocuments/>
            </TabsContent>
            <TabsContent value="others">
                <OtherDocuments/>
            </TabsContent>
        </Tabs> 
        </div>
       
    );   
}