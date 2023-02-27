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
      <div className="space-x-32 md:flex ">
        <Image
          src={image_url}
          alt={"Image of the project"}
          width={250}
          height={200}
          className="items-center mx-auto rounded-lg shadow-xl"
        />
        <div className="items-center justify-center h-auto p-2 mx-auto mt-5 border rounded-lg shadow-xl ">
          <h1 className="text-2xl font-bold text-center text-teal-500 md:text-3xl">
            {title}
          </h1>
          <div className="flex flex-row items-center justify-center pt-5 space-x-4">
            {technologies.map((techno, index) => {
              return (
                <span
                  key={index}
                  className="p-2 font-bold text-gray-600 border outline-none dark:text-white bg-slate-200/40"
                >
                  {techno}
                </span>
              );
            })}
          </div>
          <div className="mt-5">
            <p className="overflow-auto text-sm text-center text-gray-600 md:text-xl font-base dark:text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
