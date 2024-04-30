"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import React from "react";

function SkillSection({
  skills,
}: {
  skills: {
    Name: string;
    Link: string;
    key: string;
  }[];
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill) => {
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.975 }}
            key={skill.key}
          >
            <Badge className="mx-1.5 my-1 cursor-pointer" variant={"outline"}>
              <a href={`${skill.Link}`}>{skill.Name}</a>
            </Badge>
          </motion.div>
        );
      })}
    </div>
  );
}

export default SkillSection;
