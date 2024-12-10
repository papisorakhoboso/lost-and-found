import {
    Form,
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage,
    FormDescription
  } from "@/components/ui/form";
  import { useForm } from "react-hook-form";
  import { Card, CardContent } from "@/components/ui/card";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  import * as z from "zod";
  import { useState } from "react";
  
  // Schema with conditional validation
  const formSchema = z
    .object({
      authenticationMethod: z.enum(["email", "sms", "google_authenticator"], {
        required_error: "Please select an authentication method",
      }),
      email: z.string().email("Invalid email address").optional(),
      phone: z.string().min(6, "Phone number must be at least 6 characters long").optional(),
    })
    .refine(
      (data) =>
        (data.authenticationMethod === "email" && !!data.email) ||
        (data.authenticationMethod === "sms" && !!data.phone) ||
        data.authenticationMethod === "google_authenticator",
      {
        message: "Please provide the required field for the selected method",
        path: ["authenticationMethod"],
      }
    );
  
  export default function Security() {
    const [selectedMethod, setSelectedMethod] = useState<string | undefined>(undefined);
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        authenticationMethod: undefined,
        email: "",
        phone: "",
      },
    });
  
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
      console.log("Submitted Data:", data);
    };
  
    return (
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <Card>
            <CardContent className="mt-4">
              <div className="space-y-3">
                {/* Radio Group Field */}
                <FormField
                  control={form.control}
                  name="authenticationMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Two Factor Authentication *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onValueChange={(value) => {
                            field.onChange(value);
                            setSelectedMethod(value);
                          }}
                        >
                          <div className="space-y-4 text-gray-700">
                            {/* Email Option */}
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email">Email</Label>
                            </div>
                            {selectedMethod === "email" && (
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g. user@example.com"
                                        {...field}
                                        className="text-gray-700"
                                      />
                                    </FormControl>
                                    <FormDescription className="text-xs">
                                        Email where you want to receive the SMS code
                                    </FormDescription>
                                    <FormMessage className="text-xs" />
                                  </FormItem>
                                )}
                              />
                            )}
  
                            {/* SMS Option */}
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sms" id="sms" />
                              <Label htmlFor="sms">SMS</Label>
                            </div>
                            {selectedMethod === "sms" && (
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g. 1234567890"
                                        {...field}
                                        className="text-gray-700"
                                      />
                                    </FormControl>
                                    <FormDescription className="text-xs">
                                        Phone number where you want to receive the SMS code
                                    </FormDescription>
                                    <FormMessage className="text-xs" />
                                  </FormItem>
                                )}
                              />
                            )}
  
                            {/* Google Authenticator Option */}
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="google_authenticator"
                                id="google_authenticator" disabled
                              />
                              <Label htmlFor="google_authenticator" aria-disabled>Google Authenticator</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
  
                {/* Submit Button */}
                <Button type="submit">Enable 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    );
  }
  