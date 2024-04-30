import React from "react";
import ProjectCard from "./_project_component/projectcard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ProjectsPage() {
  return (
    <div>
      <h1>My Projects and Related Experience</h1>
      <h2>
        <code>Under Construction 🚧 🚧 🚧</code>
      </h2>
      <div className="pb-10">
        You can still ask about my projects{" "}
        <a href="/" className="underline underline-offset-4">
          here
        </a>{" "}
        in my AMA section!
      </div>
      <div className="opacity-30 pointer-events-none border border-dashed rounded-2xl p-4">
        <div>These are some of the projects I have worked on in the past. </div>
        <Accordion type="single" collapsible disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-0 p-0">
              <h1>2024</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ProjectCard
                title="STARS GPT"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
              <ProjectCard
                title="Arthas AI"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-0 p-0">
              <h1>2023</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ProjectCard
                title="STARS GPT"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
              <ProjectCard
                title="Arthas AI"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-0 p-0">
              <h1>2022</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ProjectCard
                title="STARS GPT"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
              <ProjectCard
                title="Arthas AI"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-0 p-0">
              <h1>2020-2021</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ProjectCard
                title="STARS GPT"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
              <ProjectCard
                title="Arthas AI"
                date_range={["02/2024", "04/2024"]}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, doloremque, molestiae sapiente eum, repudiandae iusto esse quae vero aspernatur nesciunt totam laboriosam? Nulla iure excepturi inventore? Vero beatae quae modi."
                link="https://stars-gpt-frontend-testing.onrender.com/"
                tech={[
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "FastAPI",
                  "Langchain",
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default ProjectsPage;
