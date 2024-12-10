import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { CircleHelp } from "lucide-react";

  
  
  export default function HelpAndSupport() {
    return (
      <>
        <div className="flex justify-end mt-3 mr-4">
          <Card className="w-1/4 h-full bg-slate-100 border-none">
            <CardContent className="h-full m-0 overflow-y-auto">
              <h6 className="mt-4 flex gap-2 items-center">Frequently Asked Questions <CircleHelp className="text-primary" size={"20"}/></h6>
              <div className="mt-4 mr-0 rounded-sm space-y-2">
                <Accordion type="single" collapsible className="border border-gray-200 rounded-sm">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                      What is the Lost and Found system?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                      The Lost and Found system is a platform designed to help individuals and organizations report, track, and retrieve lost items or found items efficiently.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border rounded-sm">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                    Is my personal information secure?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    Yes, the system follows strict data protection protocols to ensure your information is safe and used only for retrieval purposes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border rounded-sm">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                       Who can use this system?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    The system is available for individuals who have lost or found items and agents such as police stations, radio stations, or organizations managing lost-and-found cases.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border border-gray-200 rounded-sm">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                       How do I report a lost item?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    Register on the platform using your phone number or email. Fill out the Report Lost Item form with details such as item description, date, and location where it was lost.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Accordion type="single" collapsible className="border border-gray-200 rounded-sm">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                    What items can I report as lost or found?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    You can report various items, including personal documents (ID cards, licenses), electronic devices, bags, wallets, keys, jewelry, and other valuable or identifiable items.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border rounded-sm">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                    What happens after I report a lost or found item?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    The system matches your report with available records. If a potential match is found, you will be notified for further verification.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border rounded-sm">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xs font-medium text-gray-700 flex items-center p-3 bg-gray-200 hover:bg-gray-200 text-left">
                       Can I upload photos of the lost or found item?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                       Yes, you can upload clear photos to help identify the item.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
  