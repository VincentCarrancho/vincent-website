"use client";

import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Divide, Info, Send, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { questionSchema } from "@/lib/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import ResponseChatComponent from "./response";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import MotionDiv from "@/components/ui/defaultMotionDiv";
import ResponseCard from "./responseCard";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

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
    "Give me a TL:DR about you.",
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

  const { refetch, data, error, isFetching, isPending, isLoading } = useQuery({
    queryKey: ["askQuestion"],
    enabled: false,
    queryFn: async (question) => {
      const req = await axios({
        method: "get",
        url: "/api",
        params: {
          query: form.getValues("question"),
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
    select(data) {
      return data["message"] as string;
    },
  });

  useEffect(() => {
    console.log(
      "isFetching",
      isFetching,
      "isPending",
      isPending,
      "isLoading",
      isLoading
    );
  }, [isFetching, isPending, isLoading]);

  const onQuestionSubmit = (data: z.infer<typeof questionSchema>) => {
    refetch();
  };

  return (
    <div>
      <Form {...form}>
        <form
          action=""
          className="space-y-2 w-full"
          onSubmit={form.handleSubmit(onQuestionSubmit)}
        >
          <div className="flex w-full space-x-4 items-center">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <MotionDiv scale={1.01}>
                      <Input {...field} placeholder="Ask Here!" />
                    </MotionDiv>
                  </FormControl>
                </FormItem>
              )}
            />
            <MotionDiv>
              <Button className="space-x-2" type="submit" disabled={isFetching}>
                <Send size={16} />
              </Button>
            </MotionDiv>
          </div>

          <div className="text-[10px] italic opacity-50">
            * This feature is experimental and may produce incorrect
            information. Please visit the rest of the website for more
            information about me.
          </div>
          <div className="mt-8 pb-8">
            {isFetching && (
              <div className="space-y-2">
                <Skeleton className="w-full h-[24px]" />
                <Skeleton className="w-full h-[24px]" />
                <Skeleton className="w-full h-[24px]" />
              </div>
            )}
            {data && !isFetching && (
              <blockquote className="mt-6 border-l-2 pl-6 ">
                <code className="font-black text-foreground">
                  Vincent: {'"'}
                </code>
                {data.split(" ").map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0.25, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 0.11,
                      delay: i / 15,
                    }}
                    key={i}
                    className="my-0"
                  >
                    {el + " "}
                  </motion.span>
                ))}
                <code className="font-black">{'"'}</code>
              </blockquote>
            )}
            {error && !data && (
              <code className="m-0 p-0">
                <h3 className="text-destructive p-0 m-0">
                  My brain is fried! Too much thinking{" "}
                  <span className="text-xs">
                    (something went wrong on the backend)
                  </span>
                </h3>
                <div>Please reload the page (CTRL + R) or (⌘ + R)</div>
              </code>
            )}
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="m-0 p-0">
                Suggested Questions
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap justify-center">
                  {badgeExampleQuestions}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-end space-x-2"></div>
        </form>
      </Form>
    </div>
  );
}

export default AskMeAnything;
