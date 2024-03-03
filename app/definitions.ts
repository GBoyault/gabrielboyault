import { ReactElement } from "react";

export interface Link {
  title: string;
  url: string;
}

export interface IconLink extends Link {
  icon: ReactElement;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  description: ReactElement;
  links: Link[];
  technos: string[];
  images: ProjectImage[];
}
