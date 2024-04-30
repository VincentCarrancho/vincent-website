import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";
import SkillSection from "./_about_components/skillSection.tsx/skillsection";
import Image from "next/image";

function AboutPage() {
  const skills = {
    frontend: [
      {
        Name: "React",
        Link: "https://reactjs.org/",
        key: "about-react",
      },
      {
        Name: "Next.js",
        Link: "https://nextjs.org/",
        key: "about-nextjs",
      },
      {
        Name: "SwiftUI",
        Link: "https://developer.apple.com/xcode/swiftui/",
        key: "about-swiftui",
      },
      {
        Name: "Salesforce Lightning Design System (SLDS)",
        Link: "https://www.lightningdesignsystem.com/",
        key: "about-slds",
      },
      {
        Name: "Flutter",
        Link: "https://flutter.dev/",
        key: "about-flutter",
      },
      {
        Name: "ShadCN",
        Link: "https://shadcn.com/",
        key: "about-shadcn",
      },
    ],
    backend: [
      {
        Name: "PostgreSQL",
        Link: "https://www.postgresql.org/",
        key: "about-postgresql",
      },
      {
        Name: "Supabase",
        Link: "https://supabase.io/",
        key: "about-supabase",
      },
      // generate teh rest of the backend skills
      {
        Name: "MongoDB",
        Link: "https://www.mongodb.com/",
        key: "about-mongodb",
      },
      {
        Name: "Express.js",
        Link: "https://expressjs.com/",
        key: "about-expressjs",
      },
      {
        Name: "Springboot",
        Link: "https://spring.io/projects/spring-boot",
        key: "about-springboot",
      },
      {
        Name: "FastAPI",
        Link: "https://fastapi.tiangolo.com/",
        key: "about-fastapi",
      },
      {
        Name: "Back4App",
        Link: "https://www.back4app.com/",
        key: "about-back4app",
      },
      {
        Name: "Pinecone",
        Link: "https://www.pinecone.io/",
        key: "about-pinecone",
      },
      {
        Name: "Firebase",
        Link: "https://firebase.google.com/",
        key: "about-firebase",
      },
      {
        Name: "AWS",
        Link: "https://aws.amazon.com/",
        key: "about-aws",
      },
      {
        Name: "Azure",
        Link: "https://azure.microsoft.com/",
        key: "about-azure",
      },
    ],
  };

  return (
    <>
      <h1>About Me</h1>
      <div>I am Vincent! I am a </div>
      <Image src="" width={500} height={500} alt="Picture of the author" />
      <div
        id="section1"
        className="md:flex md:flex-col space-x-2 space-y-4 w-full"
      >
        <Card>
          <CardHeader className="p-4">
            <h2 className="m-0 p-0">Skills</h2>
          </CardHeader>
        </Card>
        <div className="flex flex-row space-x-4">
          <Card className="w-full">
            <CardHeader className="p-4">
              <h2 className="m-0">Frontend</h2>
            </CardHeader>
            <CardContent className="px-4">
              <SkillSection skills={skills.frontend} />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="p-4">
              <h2 className="m-0">Backend</h2>
            </CardHeader>
            <CardContent className="px-4">
              <SkillSection skills={skills.backend} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
