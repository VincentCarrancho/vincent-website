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
        url: "api/",
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
          className="space-y-2"
          onSubmit={form.handleSubmit(onQuestionSubmit)}
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <MotionDiv scale={1.01}>
                    <Textarea {...field} placeholder="Ask Here!" />
                  </MotionDiv>
                </FormControl>
                <div className="text-[10px] italic opacity-50">
                  * This feature is experimental and may produce incorrect
                  information. Please visit the rest of the website for more
                  information about me.
                </div>
                <div className="flex flex-wrap justify-center">
                  {badgeExampleQuestions}
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-2">
            <MotionDiv>
              <Button
                variant={"outline"}
                className="space-x-2"
                type="button"
                onClick={async () => {
                  await axios("/api", {
                    method: "get",
                  }).then((res) => {
                    console.log(res);
                  });
                }}
              >
                <Info size={16} />
              </Button>
            </MotionDiv>
            <MotionDiv>
              <Button className="space-x-2" type="submit" disabled={isFetching}>
                <p>Send Question</p>
                <Send size={16} />
              </Button>
            </MotionDiv>
          </div>
        </form>
      </Form>
      <div className="mt-8">
        {isFetching && <ResponseChatComponent />}
        {data && !isFetching && <ResponseCard text={data} />}
        {/* <ResponseChatComponent /> */}
      </div>
    </div>
  );
}

export default AskMeAnything;
