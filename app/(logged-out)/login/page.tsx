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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2Icon, RefreshCcwDotIcon, UserCircle2Icon } from "lucide-react";
import { useState } from "react";

// Define separate schemas for personal and business tabs
const personalSchema = z.object({
  phone: z.coerce.number(),
  pin_code: z.coerce.number().min(1, { message: "Pin code is required" }),
});

const businessSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type PersonalSchema = z.infer<typeof personalSchema>;
type BusinessSchema = z.infer<typeof businessSchema>;

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");

  // Dynamically use schema based on active tab
  const formSchema = activeTab === "personal" ? personalSchema : businessSchema;

  const form = useForm<PersonalSchema | BusinessSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const handleSubmit = (data: PersonalSchema | BusinessSchema) => {
    console.log("Form Data:", data);
    const redirectUrl = activeTab === "personal" ? "/personal-dashboard" : "/business-dashboard";
    window.location.href = redirectUrl;
  };

  return (
    <Tabs
      defaultValue="personal"
      className="w-[380px]"
      onValueChange={(value) => setActiveTab(value as "personal" | "business")}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="personal" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
          <UserCircle2Icon className="h-4 w-4 mr-1 text-current" /> Personal
        </TabsTrigger>
        <TabsTrigger value="business" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
          <Building2Icon className="h-4 w-4 mr-1 text-current" /> Business
        </TabsTrigger>
      </TabsList>
      <TabsContent value="personal">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex justify-center text-primary font-extrabold">Personal Login</CardTitle>
            <CardDescription className="flex justify-center">
              <small>Login to Lost n Found Account</small>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g 58408084" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                      <FormDescription className="text-xs">Phone number registered with</FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pin_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pin code *</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="••••"  {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-2">Login</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-between">
            <small>Forgot Password?</small>
            <Button className="text-xs" asChild variant="linkSecondary" size="xs">
              <Link href="/reset-pin"><RefreshCcwDotIcon/> Reset Pin</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="business">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex justify-center text-primary font-extrabold">Business Login</CardTitle>
            <CardDescription className="flex justify-center">
              <small>Login to Lost n Found Account</small>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g business@example.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                      <FormDescription className="text-xs">Email address registered with</FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password *</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="••••••••••••••••"  {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-2">Login</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-between">
            <Button className="text-xs" asChild variant="link" size="xs">
              <Link href="/createaccount">Create Account</Link>
            </Button>
            <Button className="text-xs" asChild variant="linkSecondary" size="xs">
              <Link href="/resetpassword"><RefreshCcwDotIcon/>Reset Password</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
