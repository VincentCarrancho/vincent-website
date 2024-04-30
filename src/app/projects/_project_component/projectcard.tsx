"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

import { ExternalLink } from "lucide-react";
import { string } from "zod";

type ProjectCardProps = {
  title: string;
  description: string;
  date_range: string[];
  link: string;
  tech: string[];
};

function ProjectCard({
  title,
  description,
  date_range,
  link,
  tech,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-row justify-between">
      <div>
        <CardHeader className="p-4 w-full">
          <div className="flex justify-between">
            <div className="flex">
              <h2 className="m-0 underline  underline-offset-4 pb-2">
                <a href={`${link}`}>{title}</a>
              </h2>
            </div>
            <div className="text-sm italic opacity-50">
              {date_range[0]} to {date_range[1]}
            </div>
          </div>

          <div>
            <div className="flex space-x-2">
              {tech.map((t, i) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.975 }}
                  key={t + `-${i}`}
                >
                  <Badge>{t}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </div>
    </Card>
  );
}

export default ProjectCard;
