import {Form, FormField,FormLabel, FormItem,FormControl,FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    email: z.string().email(),
    phone: z.string().min(1, "Phone number is required"),
    whatsapp:z.string().optional(),
    address: z.string().min(1,"Location address is required"),
    country: z.string(),
  });

export default function ProfileGeneral() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          businessName: "Lesotho Mounted Police Service",
          email: "info@police.gov.ls",
          phone: "+266 223 3333",
          address: "LNDC Block C Level 4 Maseru 100",
          country: "Lesotho",
        },
      });
    
      const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Submitted Data:", data);
      };

    return(
       <>
            <Form {...form}>
                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
            
                    <div className="space-y-3">
                        <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Business or Entity name *
                                </FormLabel>
                                <FormControl>
                                <Input placeholder="e.g xyz company" {...field} className="text-gray-700"/>
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                            )}
                        />
                        <div className="flex items-start gap-4">
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                <FormLabel>
                                    Email *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g prakhoboso@lostnfound.com" {...field} className="text-gray-700"/>
                                </FormControl>
                                <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                <FormLabel>
                                    Phone number *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g 58408084" {...field} className="text-gray-700"/>
                                </FormControl>
                                <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div className="flex items-start gap-4">
                            <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                <FormLabel>
                                    Address *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g prakhoboso@lostnfound.com" {...field} className="text-gray-700"/>
                                </FormControl>
                                <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                <FormLabel>
                                    WhatsApp number
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g 58408084" {...field} className="text-gray-700"/>
                                </FormControl>
                                <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                <FormLabel>
                                    Country *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g Lesotho" {...field} className="text-gray-700" disabled />
                                </FormControl>
                                <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                            />
                        <Button type="submit">Submit</Button>
                        </div>
                </form>
            </Form>
       </>
    );
}