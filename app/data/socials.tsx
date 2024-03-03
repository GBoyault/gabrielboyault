import { IconLink } from "@/app/definitions";
import { Email, LinkedIn, Github } from "@/app/components/icons";

export const socials: IconLink[] = [
  {
    title: "E-mail",
    url: "mailto:boyault.gabriel@gmail.com",
    icon: <Email />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-boyault/",
    icon: <LinkedIn />,
  },
  {
    title: "Github",
    url: "https://github.com/gboyault/",
    icon: <Github />,
  },
];
