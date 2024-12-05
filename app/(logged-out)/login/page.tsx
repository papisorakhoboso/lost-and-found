"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";



const formSchema = z.object({
    email : z.string().email(),
    password : z.string(),
}).superRefine((data, ctx) => {
    if(!data.password){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            path:["password"],
            message:"Password is required",
        })
    }
})

export default function LoginPage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues:{
            email : "",
        }
    });

    const handleSubmit = () => {
        window.location.href = "/business-dashboard";
    }

    return <>
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="flex justify-center font-bold">
                    Login
                </CardTitle>
                <CardDescription className="flex justify-center">
                    <small>Login to Lost n Found Account</small>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField control={form.control} name = "email" render={({field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Email *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g prakhoboso@gmail.com" {...field}/>
                                </FormControl>
                                <FormDescription className="text-xs">
                                    Email address you created account with
                                </FormDescription>
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>
                           <FormField control={form.control} name = "password" render={({field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Password *
                                </FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="Password"  {...field}/>
                                </FormControl>
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="justify-between"> 
                 <small>Forgot Password ?</small>
                 <Button className="text-xs" asChild variant="outline" size="sm">
                    <Link href="/resetpassword">Reset</Link>
                 </Button>
            </CardFooter>
        </Card>
    </>
}