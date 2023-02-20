import { Projectprops } from "@/lib/interface";
import React from "react";
import ProjectItem from "./ProjectItem";
import work from "../public/Images/works-medsoc.png";

function Projects() {
  return (
    <section className="items-center justify-center h-auto max-w-3xl pt-10 mx-auto md:max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-teal-500">
        My projects
      </h1>
      <ProjectItem
        image_url={work}
        title={"Web App - Eboarding"}
        description="During my internship at Medsoc, I had the goal to build a new eBoarding web application for doctors as a full-time developer. You can see in detail the development of the web application just below."
        technologies={["Angular", "Java", "Spring", "MySQL"]}
      />

      <ProjectItem
        image_url={work}
        title={"Web App - Eboarding"}
        description="During my internship at Medsoc, I had the goal to build a new eBoarding web application for doctors as a full-time developer. You can see in detail the development of the web application just below."
        technologies={["Angular", "Java", "Spring", "MySQL"]}
      />

      <ProjectItem
        image_url={work}
        title={"Web App - Eboarding"}
        description="During my internship at Medsoc, I had the goal to build a new eBoarding web application for doctors as a full-time developer. You can see in detail the development of the web application just below."
        technologies={["Angular", "Java", "Spring", "MySQL"]}
      />
    </section>
  );
}

export default Projects;
