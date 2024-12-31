"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CircleXIcon, MessageCircleMoreIcon } from "lucide-react";

const formSchema = z.object({
  priority: z.enum(["minor", "moderate", "urgent"], {
    required_error: "Please select ticket priority",
  }),
  description: z.string(),
});

export default function CreateTicket() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const [showDragDrop, setShowDragDrop] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    // Filter valid image files
    const validImageFiles = acceptedFiles.filter((file) =>
      ["image/png", "image/jpeg"].includes(file.type)
    );
  
    if (validImageFiles.length < acceptedFiles.length) {
      alert("Only image files (PNG, JPG, JPEG) are allowed."); // Provide feedback for invalid files
    }
  
    setFiles((prevFiles) => [...prevFiles, ...validImageFiles]);
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
  });
  

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submitted Data:", data);
    console.log("Attached Files:", files);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
        {/* Priority Field */}
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center mb-2">
                <FormDescription>Please fill the form to report problem</FormDescription>
                <Button
                  type="button"
                  variant="outline"
                  size="xs"
                  className="text-sm px-2   border-green-600 border-2 text-green-600 hover:bg-green-600 hover:text-white"
                  disabled
                >
                  <MessageCircleMoreIcon/>Live Chat
                </Button>
              </div>
              <FormLabel>Priority *</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="minor" id="minor" />
                    <Label htmlFor="minor">Minor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent">Urgent</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe problem *</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="w-full h-32 border rounded-md p-2 resize-none"
                  placeholder="Enter your description here"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Checkbox to show/hide Drag-and-Drop */}
        <div className="items-top flex space-x-2">
          <Checkbox
            id="screenshot"
            checked={showDragDrop}
            onCheckedChange={(checked) => {
              setShowDragDrop(checked === true);
              if (!checked) setFiles([]); // Clear files when unchecked
            }}
          />
          <div className="grid items-center">
            <label
              htmlFor="screenshot"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Attach Screenshot
            </label>
          </div>
        </div>

        {/* Drag-and-Drop Area */}
        {showDragDrop && (
          <div
            {...getRootProps()}
            className={`border-dashed border-2 rounded-md p-4 mt-2 text-center cursor-pointer ${
              isDragActive ? "border-primary bg-gray-100" : "border-gray-400"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-gray-700">Drop the files here...</p>
            ) : (
              <p>Drag and drop your file here or click to upload.</p>
            )}
          </div>
        )}

        {/* Uploaded Files */}
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium">Uploaded Files:</h4>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between text-sm text-gray-600">
                  <span>{file.name}</span>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => removeFile(index)}
                  >
                    <CircleXIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" className="self-start">
          Submit
        </Button>
      </form>
    </Form>
  );
}
