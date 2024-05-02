import { Textarea } from "@/components/ui/textarea";
import { CornerRightDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import AskMeAnything from "./_home_components/amaSection";
import PFP from "../../public/image-1-web.jpg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <div className="md:flex md:space-x-4 max-md:space-y-4">
          <div className="md:w-full">
            <Image
              src={PFP}
              alt="Picture of the author"
              className="border rounded-3xl"
            />
          </div>
          <div className="md:w-full">
            <Card className="md:h-full">
              <CardHeader className="mb-0 pb-0 pt-4">
                <h2 className="mt-0 pt-0 mb-0 ">About Me</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  I am Florida International University Computer Science Class
                  of 2024 graduate and I previously interned at Salesforce (
                  {`Summer '23'`}) and MetLife {`Summer '22'`} as a Software
                  Engineer Intern. I am experienced in full-stack, Frontend,
                  Backend, and Mobile Development.{" "}
                  <span className="font-bold italic">
                    Now I am a full-time Software Engineer at Salesforce.
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-2 w-full justify-center">
                  <Button variant={"outline"} size={"icon"}>
                    <a href="https://github.com/VincentCarrancho">
                      <Github size={16} />
                    </a>
                  </Button>
                  <Button variant={"outline"} size={"icon"}>
                    <a href="https://www.linkedin.com/in/vincentcarrancho/">
                      <Linkedin size={16} />
                    </a>
                  </Button>
                  <Button variant={"outline"}>
                    <div className="p-0 m-0">Resume</div>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex space-x-2">
              <h3 className="p-0 m-0">Ask me anything about me!</h3>
              <CornerRightDown />
            </div>
          </CardHeader>
          <CardContent>
            <AskMeAnything />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
