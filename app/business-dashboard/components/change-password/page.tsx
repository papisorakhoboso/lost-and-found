import {Form, FormField,FormLabel, FormItem,FormControl,FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import {Card,CardContent,} from "@/components/ui/card";
  

const formSchema = z.object({
    oldPassword: z.string().min(6, "Old password must be at least 6 characters long"),
    newPassword: z.string().min(6,"New password must be at least 6 characters long"),
    confirmPassword: z.string(),
  });

export default function ChangePassword() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {

        },
      });
    
      const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Submitted Data:", data);
      };

    return(
       <>
            <Form {...form}>
                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                    <Card>
                        
                        <CardContent className="mt-4">
                            <div className="space-y-3">
                            
                            <FormField
                                control={form.control}
                                name="oldPassword"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Old Password *
                                    </FormLabel>
                                    <FormControl>
                                    <Input placeholder="e.g xyz123" {...field} className="text-gray-700"/>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        New Password *
                                    </FormLabel>
                                    <FormControl>
                                    <PasswordInput placeholder="••••••••••••••••" {...field} className="text-gray-700"/>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Confirm Password *
                                    </FormLabel>
                                    <FormControl>
                                    <PasswordInput placeholder="••••••••••••••••" {...field} className="text-gray-700"/>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            <Button type="submit">Change password</Button>
                            </div>
                        </CardContent> 
                    </Card>  
                </form>
            </Form>
       </>
    );
}