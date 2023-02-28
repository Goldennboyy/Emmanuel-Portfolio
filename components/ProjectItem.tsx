import { Projectprops } from "@/lib/interface";
import React from "react";
import Image from "next/image";

function ProjectItem({
  image_url,
  title,
  technologies,
  description,
  link,
}: Projectprops) {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12 space-x-2 md:my-20 md:space-x-4">
      <div className="space-x-32 md:flex ">
        <Image
          src={image_url}
          alt={"Image of the project"}
          width={250}
          height={180}
          className="items-center mx-auto rounded-lg shadow-xl"
        />
        <div className="items-center justify-center h-auto p-2 mx-auto mt-5 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold text-center text-teal-500 md:text-3xl">
            {title}
          </h1>
          <div className="flex flex-row items-center justify-center pt-5 space-x-4">
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
            <p className="text-xl font-semibold text-center text-gray-600 dark:text-white">
              {description}
            </p>

            {/* {link && (
              <a
                className="font-semibold text-gray-600 t-2 focus:text-teal-500 dark:text-white"
                download
                href={link}
              >
                Check my internship report
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
