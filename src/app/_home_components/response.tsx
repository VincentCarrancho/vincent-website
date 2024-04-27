import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function ResponseChatComponent() {
  return (
    <div>
      <div className="flex space-x-4">
        <div>
          <Skeleton className="w-[50px] h-full flex justify-center items-center">
            {/**Todo: add svg animations */}
            <Sparkle />
          </Skeleton>
        </div>
        <div className="space-y-2 w-full ">
          <Skeleton className="w-full h-[24px]" />
          <Skeleton className="w-full h-[24px]" />
          <Skeleton className="w-full h-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default ResponseChatComponent;
