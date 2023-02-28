"use client";

import { Skillprops } from "@/lib/interface";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Skills() {
  const skills_tools: Array<Skillprops> = [
    {
      skill_tool: "Java",
    },

    {
      skill_tool: "Python",
    },
    {
      skill_tool: "MySQL",
    },
    {
      skill_tool: "HTML",
    },
    {
      skill_tool: "CSS",
    },
    {
      skill_tool: "Tailwind CSS",
    },
    {
      skill_tool: "Javascript",
    },
    {
      skill_tool: "Typescript",
    },
    {
      skill_tool: "Git",
    },
    {
      skill_tool: "Firebase",
    },
    {
      skill_tool: "Sqlite",
    },
    {
      skill_tool: "Microsoft Azure",
    },
    {
      skill_tool: "Kotlin",
    },
    {
      skill_tool: "C/C++",
    },
    {
      skill_tool: "React",
    },
    {
      skill_tool: "Laravel",
    },
    {
      skill_tool: "NextJS",
    },
  ];

  return (
    <main className="flex-row max-w-3xl mx-auto md:max-w-8xl">
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
                <div className="h-20 pt-6 font-bold rounded-lg w-30 bg-slate-300/70">
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
