import { Textarea } from "@/components/ui/textarea";
import { CornerRightDown } from "lucide-react";
import Image from "next/image";
import AskMeAnything from "./_home_components/amaSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-4">
      <div>
        <h1>Hello! 👋</h1>
        <h1 className="font-black text-6xl sm:text-9xl mt-0 mb-0">
          {`I\'m`} <span className="text-primary">Vincent</span>.
        </h1>
        <h2 className="">
          <span>
            <code>Software Engineer from Miami 📍</code>
          </span>
        </h2>
        <div>
          I am Florida International University Computer Science Class of 2024
          graduate and I previously interned at Salesforce ({`Summer '23'`}) and
          MetLife {`Summer '22'`} as a Software Engineer Intern. I am
          experienced in full-stack, Frontend, Backend, and Mobile Development.{" "}
          <span className="font-bold italic">
            Now I am a full-time Software Engineer at Salesforce.
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-2">
          <p>Ask me anything about me!</p>
          <CornerRightDown />
        </div>
        <AskMeAnything />
      </div>
    </div>
  );
}
