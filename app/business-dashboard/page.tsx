import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NationalDocuments from "./components/national-documents/national-documents";
import OtherDocuments from "./components/others/other-documents";

export default function BusinessDashboardPage() {
    return (
        <Tabs defaultValue="national-docs">
            <TabsList className="bg-gray-300 dark:bg-gray-800 mb-4 ">
                <TabsTrigger value="national-docs">
                    National Documents
                </TabsTrigger>
                <TabsTrigger value="others">
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
    );   
}