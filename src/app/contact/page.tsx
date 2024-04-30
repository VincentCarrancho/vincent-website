"use client";

import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/ui/defaultMotionDiv";
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
import { contactSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    values: {
      name,
      email,
      message,
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {};

  return (
    <div>
      <h1>Contact Me! ✉️</h1>
      <h2>
        <code>Under Construction 🚧 🚧 🚧</code>
      </h2>
      <div
        className="opacity-30 pointer-events-none border border-dashed rounded-2xl p-4"
        tabIndex={-1}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <MotionDiv scale={1.01}>
                      <Input
                        {...field}
                        placeholder="johndoe@gmail.com"
                        disabled
                      />
                    </MotionDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <MotionDiv scale={1.01}>
                      <Input
                        {...field}
                        placeholder="First Name, Last Name"
                        disabled
                      />
                    </MotionDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <MotionDiv scale={1.01}>
                      <Textarea
                        {...field}
                        placeholder="Your Message"
                        disabled
                      />
                    </MotionDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="space-x-2" disabled>
                <div>Send Message</div>
                <Send size={16} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
