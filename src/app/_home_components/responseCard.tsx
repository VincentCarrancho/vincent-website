import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

function ResponseCard({ text }: { text: string }) {
  return (
    <Card>
      <CardHeader className="font-bold py-4">
        <div className="flex justify-between">
          <div>My Response</div>
          <Button variant={"ghost"} type="button">
            <X />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {text.split(" ").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.11,
              delay: i / 10,
            }}
            key={i}
            className="my-0"
          >
            {el}{" "}
          </motion.span>
        ))}
      </CardContent>
    </Card>
  );
}

export default ResponseCard;
