"use client";

import { Skillprops } from "@/lib/interface";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Skills() {
  const skills_tools: Array<Skillprops> = [
    {
      skill_tool: "Java",
      type: "language",
    },

    {
      skill_tool: "Python",
      type: "language",
    },
    {
      skill_tool: "MySQL",
      type: "database",
    },
    {
      skill_tool: "HTML",
      type: "language",
    },
    {
      skill_tool: "CSS",
      type: "language",
    },
    {
      skill_tool: "Tailwind CSS",
      type: "language",
    },
    {
      skill_tool: "Javascript",
      type: "language",
    },
    {
      skill_tool: "Typescript",
      type: "language",
    },
    {
      skill_tool: "Git",
      type: "tools",
    },
    {
      skill_tool: "Firebase",
      type: "database",
    },
    {
      skill_tool: "Sqlite",
      type: "database",
    },
    {
      skill_tool: "postgreSQL",
      type: "database",
    },
    {
      skill_tool: "Microsoft Azure",
      type: "tools",
    },
    {
      skill_tool: "Kotlin",
      type: "language",
    },
    {
      skill_tool: "C/C++",
      type: "language",
    },
    {
      skill_tool: "React",
      type: "framework",
    },
    {
      skill_tool: "Laravel",
      type: "framework",
    },
    {
      skill_tool: "NextJS",
      type: "framework",
    },
  ];

  return (
    <main className="flex-row max-w-3xl pt-8 mx-auto md:max-w-8xl">
      <p className="text-3xl font-bold text-center text-teal-500">
        My Expertise
      </p>
      <div>
        <div className="grid items-center justify-center grid-cols-2 gap-0 pt-4 text-gray-600 dark:text-white md:grid-cols-4">
          {skills_tools.map((skill_tool, index) => {
            return (
              <div
                key={index}
                className="items-center justify-center p-4 text-center"
              >
                <div className="h-20 pt-6 font-bold rounded-lg w-30 bg-[#f4f0e9] dark:bg-slate-300/70">
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <BsCheckCircleFill />
                    <span>{skill_tool.skill_tool}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Skills;
