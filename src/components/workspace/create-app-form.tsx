"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {useRouter} from "next/navigation";


// Validation schema for the form
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

interface CreateAppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateAppDialog({ open, onOpenChange }: CreateAppDialogProps) {
  const router = useRouter();

  // Initialize form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);

    // Close the dialog
    onOpenChange(false);

    // Navigate to another page
    router.push("/pages/workspace");
  }

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="flex items-center gap-2">
              <DialogTitle className="text-xl">Create an App</DialogTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="-mx-6 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="custom-app" {...field} />
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                              placeholder="Describe your app"
                              className="resize-none"
                              {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />
              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                >
                  Close
                </Button>
                <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
  );
}
