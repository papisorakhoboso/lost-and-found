import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"    
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";  
import { FileTextIcon, IdCardIcon } from "lucide-react";
import AddPassport from "../components/lost-n-found-comp/passports/page";

export default function LostandFound() {
return (
    <>
    <div className="flex mt-2">
        {/* Left Card */}
        <Card className="flex-1">
        <CardHeader className="py-3 font-extrabold">Lost and Found</CardHeader>
            <CardContent> 
                <div>
                    <Tabs defaultValue="national_doc" className="w-full">
                        <TabsList>
                            <TabsTrigger value="national_doc" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                                <IdCardIcon className="h-4 w-4 text-current"/>
                                National Document
                        </TabsTrigger>
                            <TabsTrigger value="other_doc" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                                <FileTextIcon className="h-4 w-4 text-current"/>
                                Other Document
                            </TabsTrigger>
                        </TabsList>
                        <div className="my-4">
                            <RadioGroup className="flex  gap-3 mb-4">
                                <div className="flex items-center gap-2">
                                <RadioGroupItem value="minor" id="minor" />
                                <Label htmlFor="minor">Passport</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                <RadioGroupItem value="moderate" id="moderate" />
                                <Label htmlFor="moderate">National ID</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                <RadioGroupItem value="urgent" id="urgent" />
                                <Label htmlFor="urgent">Birth Certificate</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                <RadioGroupItem value="birth-cert" id="birth-cert" />
                                <Label htmlFor="birth-cert">Drivers License</Label>
                                </div>
                            </RadioGroup>  
                        </div>
                        <TabsContent value="national_doc">               

                            <AddPassport/>
                        </TabsContent>
                        <TabsContent value="other_doc">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </CardContent>
        </Card>
    </div>
    </>
);
}
  