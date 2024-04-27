"use client";

import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Info, Send, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { questionSchema } from "@/lib/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import ResponseChatComponent from "./response";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function AskMeAnything() {
  const [question, setQuestion] = useState<string>("");
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
    },
    values: {
      question: question,
    },
  });

  const exampleQuestions = [
    "Where did you last work?",
    "What is your favorite programming language?",
    "How many years of experience do you have?",
    "How many projects have you worked on?",
    "What is your preferred stack?",
    "What is your favorite framework?",
    "What is your favorite cloud provider?",
  ];

  const badgeExampleQuestions = exampleQuestions.map((question, index) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.975 }}
      key={question.replace(" ", "-")}
    >
      <Badge
        className="mx-1.5 my-1 cursor-pointer"
        variant={"outline"}
        onClick={() => setQuestion(question)}
      >
        {question}
      </Badge>
    </motion.div>
  ));

  const { refetch, data, error, isPending } = useQuery({
    queryKey: ["askQuestion"],
    enabled: false,
    queryFn: async (question) => {
      const req = await axios({
        method: "get",
        url: "/api/ai",
        data: {
          id: uuidv4(),
          question: "asda",
        },
      });
      if ((await req).status === 200) {
        console.log(req.data);
        return req.data;
      }
      if (req.status === 500) {
        console.log("Error");
        throw new Error("Internal Server Error");
      }
    },
  });

  const onQuestionSubmit = (data: z.infer<typeof questionSchema>) => {
    refetch();
  };

  return (
    <div>
      <Form {...form}>
        <form
          action=""
          className="space-y-2"
          onSubmit={form.handleSubmit(onQuestionSubmit)}
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea {...field} placeholder="Ask Here!" />
                </FormControl>
                <div className="flex flex-wrap justify-center">
                  {badgeExampleQuestions}
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-2">
            <Button variant={"ghost"} className="space-x-2">
              <Info size={16} />
            </Button>
            <Button className="space-x-2">
              <p>Send Question</p>
              <Send size={16} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AskMeAnything;
