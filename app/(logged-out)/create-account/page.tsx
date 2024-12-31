"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input";
import { CircleHelp } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";

const formSchema = z.object({
    email : z.string().email().optional(),
    phoneNumber : z.coerce.number(),
    accountType : z.enum(["personal","business"]),
    businessName : z.string().optional(),
    country : z.string(),
    locationAddress : z.string().optional(),
    whatsappNumberCheck : z.boolean().optional(),
    whatsAppNumber : z.string().optional(),
    district : z.string().optional(),
    password : z.string().min(6,"Password must contain aleast six characters"),
    passwordConfirm : z.string(),
    acceptTerms : z.boolean({
        required_error : "You must accept terms and conditions"
    }).refine((checked) => checked, "You must accept terms and conditions"),
}).superRefine((data, ctx) => {
    console.log("superRefine executed", data);
    if(data.accountType === "business" && !data.businessName){
        ctx.addIssue({
            code : z.ZodIssueCode.custom,
            path : ["businessName"],
            message : "Business name is required",
        })
    }
    if(data.accountType === "business" && !data.locationAddress){
        ctx.addIssue({
            code : z.ZodIssueCode.custom,
            path : ["locationAddress"],
            message : "Location address is required",
        })
    }
    if(data.country === "lesotho" && (!data.district)){
        ctx.addIssue({
            code : z.ZodIssueCode.custom,
            path : ["district"],
            message : "District is required",
        })
    }
    if(data.whatsappNumberCheck === true && (!data.whatsAppNumber)){
        
        ctx.addIssue({
            code : z.ZodIssueCode.custom,
            path : ["whatsAppNumber"],
            message : "WhatsApp number is required",
        })
    }
    if(data.password !== data.passwordConfirm){
        ctx.addIssue({ 
            code : z.ZodIssueCode.custom,
            path : ["passwordConfirm"],
            message : "Passwords do not match",
        })
    }
   
});
export default function CreateAccountPage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues:{
            email : "",
        }
    });

    const handleSubmit = () => {
        console.log("Login successful");
    }

    const accountType = form.watch("accountType");
    const whatsappNumberCheck = form.watch("whatsappNumberCheck");
    const country = form.watch("country");
    

    return <>
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="flex justify-center font-bold">
                    Create Account
                </CardTitle>
                <CardDescription className="flex justify-center">
                    <small>Create new Lost and found account</small>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField control={form.control} name="accountType" render={({field}) => (
                            <FormItem>
                                <div className="flex items-center gap-2">
                                    <FormLabel>
                                        Account type *
                                    </FormLabel>
                                    <CircleHelp className="text-blue-600" size={"16"}></CircleHelp>
                                </div>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select account type"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="personal">
                                            Personal
                                        </SelectItem>
                                        <SelectItem value="business">
                                            Business or Entity
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}>
                        </FormField>
                        {
                            accountType === "business" &&
                            <>
                            <FormField control={form.control} name = "businessName" render={({field}) =>(
                                <FormItem>
                                    <FormLabel>
                                        Business or Entity name *
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g xyz company" {...field}/>
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}/> 
                            <FormField control={form.control} name = "locationAddress" render={({field}) =>(
                                <FormItem>
                                    <FormLabel>
                                        Location address *
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g LNDC Block C Level 4 Maseru 100" {...field}/>
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}/> 
                            </>
                        }
                            
                        <FormField control={form.control} name = "email" render={({field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Email *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g prakhoboso@gmail.com" {...field}/>
                                </FormControl>
                                
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>

                        <FormField control={form.control} name = "phoneNumber" render={({field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Phone number *
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g 58408084"  {...field}/>
                                </FormControl>                   
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>

                        <FormField control={form.control} name="country" render={({field}) => (
                            <FormItem>
                                <div className="flex items-center gap-2">
                                <FormLabel>
                                    Country *
                                </FormLabel>
                                </div>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select country"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="lesotho">
                                            Lesotho
                                        </SelectItem>
                                        <SelectItem value="southafrica">
                                            Southafrica
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}>
                        </FormField>
                        
                         {country === "lesotho" &&
                            <>
                            <FormField control={form.control} name="district" render={({field}) => (
                                <FormItem>
                                    <div className="flex items-center gap-2">
                                    <FormLabel>
                                        District *
                                    </FormLabel>
                                    </div>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select district"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="berea">
                                                Berea
                                            </SelectItem>
                                            <SelectItem value="butha-buthe">
                                                Butha-Buthe
                                            </SelectItem>
                                            <SelectItem value="leribe">
                                                Leribe
                                            </SelectItem>
                                            <SelectItem value="mafeteng">
                                                Mafeteng
                                            </SelectItem>
                                            <SelectItem value="maseru">
                                                Maseru
                                            </SelectItem>
                                            <SelectItem value="mohaleshoek">
                                                Mohales Hoek
                                            </SelectItem>
                                            <SelectItem value="mokhotlong">
                                                Mokhotlong
                                            </SelectItem>
                                            <SelectItem value="qachasnek">
                                                Qachas Nek
                                            </SelectItem>
                                            <SelectItem value="quthing">
                                                Quthing
                                            </SelectItem>
                                            <SelectItem value="thabatseka">
                                                Thaba-tseka
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                            </>
                        }
                     
                        <FormField control={form.control} name = "whatsappNumberCheck" render={({field}) =>(
                            <FormItem>
                                <div className="flex gap-2 items-center">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                                </FormControl>
                                <FormLabel>
                                    WhatsApp number 
                                </FormLabel>
                                <CircleHelp className="text-blue-600" size={"16"}></CircleHelp>
                                </div>   
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>

                        {whatsappNumberCheck === true &&
                           <>
                            <FormField control={form.control} name = "whatsAppNumber" render={({field}) =>(
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="WhatsApp number" {...field}/>
                                </FormControl>
                                
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>
                           </>
                        }

                        
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
                         <FormField control={form.control} name = "passwordConfirm" render={({field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Confirm password *
                                </FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="Password" {...field}/>
                                </FormControl>
                                
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>

                         <FormField control={form.control} name = "acceptTerms" render={({field}) =>(
                            <FormItem>
                                <div className="flex gap-2 items-center">
                                  <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                                  </FormControl>
                                   <FormLabel>
                                    I accept terms and conditions 
                                   </FormLabel>
                                </div> 
                                   <FormDescription className="text-xs">
                                      By signing up you agree to our{" "} <Link className="text-primary hover:underline" href="/terms">terms and conditions</Link>
                                   </FormDescription>  
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}/>    
                        <Button type="submit">Create account</Button>
                        </form>
                </Form>
            </CardContent>
            <CardFooter className="justify-between"> 
                 <small>Already have an account ?</small>
                 <Button className="text-xs" asChild variant="outline" size="sm">
                    <Link href="/login">Login</Link>
                 </Button>
            </CardFooter>
        </Card>
    </>
}