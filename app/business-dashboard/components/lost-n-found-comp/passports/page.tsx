"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { 
    Form, 
    FormControl,
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage } from "@/components/ui/form"; 
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const passportAddSchema = z.object({
    id_number : z.coerce.number().min(12,"ID number must contain aleast six digits"),
    surname: z.string(),
    names : z.string(),
    nationality: z.string(),
    sex : z.string(),
    place_of_birth : z.string(),
    date_of_birth : z.date().refine((date) =>{
        const today = new Date();
        const oneYearOld = new Date(
            today.getFullYear() - 1, today.getMonth(), today.getDate()
        );
        return date <= oneYearOld;
    },"Date of birth must be aleast one year old"),
    date_of_expiry : z.date(),
  });

export default function AddPassport() {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const form = useForm<z.infer<typeof passportAddSchema>>({
        resolver : zodResolver(passportAddSchema),
        defaultValues:{
            
        }
    });
    
    const handleSubmit = () => {
        console.log("Login successful");
    }

    const dobFromDate = new Date();
    dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);
    
    return (
        <>
            <Form {...form}>
                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="space-y-2"> {/* Reduced vertical spacing */}
                    {/* National ID Number Field */}
                    <div>
                        <FormField
                        control={form.control}
                        name="id_number"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>National ID No *</FormLabel>
                            <FormControl>
                                <Input
                                className="w-full"
                                placeholder="e.g 0112347384833"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                        />
                    </div>

                        {/* Surname and Given Names Fields */}
                        <div className="flex gap-4">
                            {/* Surname Field */}
                            <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="surname"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Surname *</FormLabel>
                                    <FormControl>
                                    <Input
                                        className="w-full"
                                        placeholder="e.g Rakhoboso"
                                        {...field}
                                    />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            </div>

                            {/* Given Names Field */}
                            <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="names"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Given Names *</FormLabel>
                                    <FormControl>
                                    <Input
                                        className="w-full"
                                        placeholder="e.g Papiso"
                                        {...field}
                                    />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            </div>
                        </div>
                    </div>

                    <FormField control={form.control} name="nationality" render={({field}) => (
                        <FormItem>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Nationality"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="lso">
                                    LESOTHO
                                    </SelectItem>
                                    <SelectItem value="zar">
                                    SOUTH AFRICAN
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs"/>
                            </FormItem>
                        )}>
                    </FormField>

                    <div className="flex gap-4">
                    {/* Select for Sex */}
                    <div className="flex flex-col w-1/2 space-y-0">
                        <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                            <FormItem>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sex" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs"/>
                            </FormItem>
                        )}
                        />
                    </div>

                    {/* Select for Nationality */}
                    <div className="flex flex-col w-1/2 space-y-0">
                        <FormField
                        control={form.control}
                        name="place_of_birth"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={(value) => {
                                    setSelectedValue(value);
                                    field.onChange(value); // Sync with form
                                    }}>
                                    <FormControl>
                                    <SelectTrigger
                                        className={`flex justify-between w-full px-3 py-2 border rounded-md text-sm font-normal 
                                        ${selectedValue ? "text-black" : "text-muted-foreground"} 
                                        hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
                                    >
                                        <SelectValue placeholder="Place of birth" />
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
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                        />
                    </div>
                    </div>

                    <div className="flex gap-4">
                            {/* Surname Field */}
                            <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="date_of_birth"
                                render={({ field }) => (
                                <FormItem className="flex"> 
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                        <Button
                                            className="flex justify-between w-full px-3 py-2 border rounded-md text-sm font-normal hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`"
                                            variant="outline"
                                            >
                                            {!!field.value ? format(field.value , "PPP") : <span className="text-sm font-normal">Date of birth *</span>}
                                            
                                            <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                                            </Button>

                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent align="start" className="w-auto p-0">
                                            <Calendar mode="single" 
                                            defaultMonth={field.value} 
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            fixedWeeks
                                            weekStartsOn={1}
                                            fromDate={dobFromDate}
                                            toDate={new Date()}
                                            captionLayout="dropdown-buttons"/>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            </div>

                            {/* Given Names Field */}
                            <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="names"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date of birth *</FormLabel>
                                    <FormControl>
                                    <Input
                                        className="w-full"
                                        placeholder="e.g Papiso"
                                        {...field}
                                    />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                                )}
                            />
                            </div>
                        </div>
                    
                    <div className="flex justify-left">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
            
        </>
    );
}