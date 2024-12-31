import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
    
import { BookOpenIcon, CircleHelp} from "lucide-react";
import CreateTicket from "../components/help-comp/create-ticket/page";
import { Button } from "@/components/ui/button";

  export default function HelpAndSupport() {
    return (
      <>
        <div className="flex mt-2">
          {/* Left Card */}
          <Card className="flex-1 self-start mr-4">
            <CardHeader className="py-3 font-extrabold">Help and Support</CardHeader>
            <CardContent> 
              <div>
              <CreateTicket/>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Frequently Asked Questions */}
          <Card className="w-1/4 self-start bg-slate-200 border-none dark:bg-gray-900">
            <CardContent className="m-0">
              <h6 className="mt-4 flex gap-2 items-center">
                Frequently Asked Questions <CircleHelp className="text-primary" size={"20"} />
              </h6>
              <div className="mt-4 mr-0 rounded-sm space-y-2">
                <Accordion type="single" collapsible className="border space-y-3 border-gray-200 rounded-sm">
                  {/* Accordion Item 1 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      What is the Lost and Found system?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                      Yes, many platforms offer courier services for an additional fee.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item 2 */}
                  <AccordionItem value="item-2">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      Is my personal information safe?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                      Yes, the platform prioritizes data security and privacy. Your information will only be used for recovery purposes.
                    </AccordionContent>
                  </AccordionItem>
 
                  <AccordionItem value="item-3">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      What responsibilities do agents have?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                       Agents are responsible for securely storing submitted documents, verifying identities, and assisting users in document recovery.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      Can someone else claim my document? 
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                       No, all claimants must verify their identity and ownership before collecting a document.                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      What types of documents can I report or submit?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                       Common documents include ID cards, passports, driver’s licenses, academic certificates, property deeds, and business documents.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      How long are documents stored in the system?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                       Found documents are stored for a fixed period (e.g., 6 months), after which they may be handed over to government authorities.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger
                      className="no-underline hover:no-underline text-xs font-medium rounded-md text-gray-900 flex items-center p-3 bg-white hover:bg-primary text-left hover:text-white dark:bg-gray-700 data-[state=open]:bg-primary data-[state=open]:text-white"
                    >
                      Can I request courier delivery for a found document?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-3 py-2 bg-white text-xs">
                    The Lost and Found system is a platform designed to help individuals and organizations report, track, and retrieve lost items or found items efficiently.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
              </div>
              <Button type="submit" className="w-full mt-4 dark:text-white"><BookOpenIcon/> User guide</Button>
            </CardContent>
            
          </Card>
          
        </div>
      </>
    );
  }
  