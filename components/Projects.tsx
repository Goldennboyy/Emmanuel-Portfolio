import { Projectprops } from "@/lib/interface";
import React from "react";
import ProjectItem from "./ProjectItem";
import tuto from "../public/Images/TutoReact.png";
import projetJava from "../public/Images/Capture d’écran du 2023-02-23 20-09-11.png";
import stage from "../public/Images/stage.png";

function Projects() {
  return (
    <section className="items-center justify-center max-w-3xl min-h-screen pt-12 mx-auto md:max-w-6xl">
      <h1 className="text-4xl font-bold text-center text-teal-500 md:text-5xl">
        My projects
      </h1>

      <ProjectItem
        image_url={stage}
        title={"Internship - Dashboarding"}
        description="The goal is to offer a dashboarding solution that will provide a simple and intelligent solution. So that we can see the data in real time so that we can make observations on the proper functioning of their IOT devices / machines. 
        "
        technologies={[
          "Python",
          "Azure",
          "Elasticsearch",
          "Kibana",
          "Docker",
          "Portainer",
        ]}
      />
      <ProjectItem
        image_url={tuto}
        title={"Tutorial - Learning React"}
        description="This mini project allowed me to learn the basics of the React.js library. This application allows to get the data of each country through an API. It's a nice exercise to learn the basics of React"
        technologies={["Javascript", "React"]}
      />
      <ProjectItem
        image_url={projetJava}
        title={"STIB - MIVB"}
        description="This project was done for a project during my CS cursus. The purpose of this project is to give the shortest path to reach to another
        destination"
        technologies={["Java", "JavaFx", "Sqlite"]}
      />
    </section>
  );
}

export default Projects;
