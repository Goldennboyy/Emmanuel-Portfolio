import { Projectprops } from "@/lib/interface";
import React from "react";
import ProjectItem from "./ProjectItem";
import work from "../public/Images/works-medsoc.png";
import tuto from "../public/Images/TutoReact.png";

function Projects() {
  return (
    /** Ajouter un project item pour la stib et probablement le rapport de stage ainsi */
    <section className="items-center justify-center h-auto max-w-3xl pt-12 mx-auto md:max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-teal-500">
        My projects
      </h1>

      {/* <ProjectItem
        image_url={work}
        title={"Web App - Eboarding"}
        description="During my internship at Medsoc, I had the goal to build a new eBoarding web application for doctors as a full-time developer. You can see in detail the development of the web application just below."
        technologies={["Angular", "Java", "Spring", "MySQL"]}
      /> */}
      {/* <hr className="mx-16 border-gray-400" /> */}
      <ProjectItem
        image_url={tuto}
        title={"Tutorial - Learning React"}
        description="This mini project allowed me to learn the basics of the React.js library. This application allows to get the data of each country through an API. It's a nice exercise to learn the basics of React"
        technologies={["Javascript", "React"]}
      />
    </section>
  );
}

export default Projects;
