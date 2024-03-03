import { socials } from "@/app/data/socials";
import { IconLink } from "@/app/definitions";

export const Socials = () => {
  return (
    <div className="flex gap-2 md:gap-4 md:items-center">
      {socials.map((social) => (
        <Social key={social.url} {...social} />
      ))}
    </div>
  );
};

const Social = ({ title, url, icon }: IconLink) => {
  let attributes: {
    href: string;
    title: string;
    target?: string;
    rel?: string;
  } = {
    href: url,
    title
  };

  if (!url.includes("mailto:")) {
    attributes.target = "_blank";
    attributes.rel = "noopener noreferrer";
  }

  return <a {...attributes}>{icon}</a>;
};
