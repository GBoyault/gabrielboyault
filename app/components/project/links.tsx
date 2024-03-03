import { Link as LinkType } from "@/app/definitions";
import { ArrowTopRight } from "../icons";

type LinksProps = {
  links: LinkType[];
};

export const ProjectLinks = ({ links }: LinksProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {links.map((link) => (
        <ProjectLink key={link.url} link={link} />
      ))}
    </div>
  );
};

type LinkProps = {
  link: LinkType;
};

const ProjectLink = ({ link }: LinkProps) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-xs md:text-sm font-semibold text-white border-b-2 border-purple pb-1 flex items-center gap-2 hover:border-purple-light transition"
    >
      {link.title}{" "}
      <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowTopRight />
      </span>
    </a>
  );
};
