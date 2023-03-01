import { Projectprops } from "@/lib/interface";
import React from "react";
import Image from "next/image";

function ProjectItem({
  image_url,
  title,
  technologies,
  description,
}: Projectprops) {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12 space-x-2 md:my-20 md:space-x-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <Image
          src={image_url}
          alt={"Image of the project"}
          width={250}
          height={180}
          className="items-center mx-auto rounded-lg shadow-xl md:w-1/2 lg:w-2/5"
        />
        <div className="items-center justify-center h-auto p-4 mx-auto mt-5 border rounded-lg shadow-md border-zinc-600 md:w-1/2 lg:w-3/5">
          <h1 className="text-2xl font-bold text-center text-teal-500 md:text-3xl">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center pt-5 space-x-2 md:justify-center">
            {technologies.map((techno, index) => {
              return (
                <span
                  key={index}
                  className="p-2 font-bold text-gray-600 border outline-none bg-slate-200/70 dark:text-white"
                >
                  {techno}
                </span>
              );
            })}
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold text-center text-gray-600 dark:text-white md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
