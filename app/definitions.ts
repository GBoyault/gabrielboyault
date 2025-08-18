import { ReactElement } from "react";

export interface Link {
  title: string;
  url: string;
}

export interface IconLink extends Link {
  icon: ReactElement<any>;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  description: ReactElement<any>;
  links: Link[];
  technos: string[];
  images: ProjectImage[];
  desktopOnly?: boolean
}
