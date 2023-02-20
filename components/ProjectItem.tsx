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
          width={350}
          height={350}
          className="items-center mx-auto rounded-lg shadow-xl"
        />
        <div className="">
          <h1 className="text-3xl font-bold text-teal-500">{title}</h1>
          <div className="flex flex-row pt-5 space-x-4">
            {technologies.map((techno, index) => {
              return (
                <span
                  key={index}
                  className="p-2 font-bold border outline-none bg-slate-200/40"
                >
                  {techno}
                </span>
              );
            })}
          </div>
          <div className="mt-5">
            <p className="text-xl font-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
