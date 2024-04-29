import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

function ResponseCard({ text }: { text: string }) {
  return (
    <Card>
      <CardHeader className="font-bold py-4">My Response</CardHeader>
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
