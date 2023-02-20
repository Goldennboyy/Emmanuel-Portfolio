import { StaticImageData } from "next/image";

export interface NavItemsProps {
  label: string;
  page: string;
}

export interface Skillprops {
  skill_tool: string;
}

export interface Projectprops {
  image_url: StaticImageData;
  title: string;
  technologies: string[];
  description: string;
}
