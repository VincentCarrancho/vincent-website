import { Textarea } from "@/components/ui/textarea";
import { CornerRightDown } from "lucide-react";
import Image from "next/image";
import AskMeAnything from "./_home_components/amaSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="">
      <div className="space-y-4">
        <div>
          <h1>Hello! 👋</h1>
          <h2>
            My Name is Vincent and I am currently Software Engineer at
            Salesforce with years of fullstack development experience.
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <p>Ask me anything! </p>
            <CornerRightDown />
          </div>
          <AskMeAnything />
        </div>
      </div>
    </main>
  );
}
