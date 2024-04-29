import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function ResponseChatComponent() {
  return (
    <Card>
      <CardHeader className="font-bold py-4">Thinking very hard!</CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <div className="space-y-2 w-full ">
            <Skeleton className="w-full h-[24px]" />
            <Skeleton className="w-full h-[24px]" />
            <Skeleton className="w-full h-[24px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ResponseChatComponent;
