import { StaticImageData } from "next/image";

export interface NavItemsProps {
  label: string;
  page: string;
}

export interface Skillprops {
  skill_tool: string;
  type?: string = "database" || "language" || "framework";
}

export interface Projectprops {
  image_url: StaticImageData;
  title: string;
  technologies: string[];
  description: string;
}
