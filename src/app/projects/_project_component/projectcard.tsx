import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, ExternalLink, Lock } from "lucide-react";
import React from "react";

function ProjectCard({
  children,
  href,
  name,
  locked,
}: {
  children?: React.ReactNode;
  href?: string;
  name?: string;
  locked: boolean;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={name + "accordion"}>
        <AccordionTrigger className="m-0 p-0" disabled={locked}>
          <h2 className="m-0 p-0">
            <code className={`flex space-x-4 m-0 p-0 items-center`}>
              {locked ? (
                <span className="opacity-30 ">{name}</span>
              ) : (
                <span>{name}</span>
              )}
              {locked && <Lock className="opacity-30 " />}
            </code>
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 underline underline-offset-4 italic"
            >
              <span className="font-bold">Link to work</span>
              <span>
                <ExternalLink size={16} />
              </span>
            </a>
          )}
          <div className="border-l-2 pl-6">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectCard;
