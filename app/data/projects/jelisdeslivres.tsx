import { Project } from "@/app/definitions";

const jelisdeslivres: Project = {
  name: "Je lis des livres",
  description: (
    <p>
      Une application web pour suivre vos lectures au fil du temps. Anticipez
      vos futures lectures et retrouvez celles des années passées. Plus qu'un
      simple carnet de notes, connectez-vous avec vos amis pour échanger des
      idées.
    </p>
  ),
  links: [
    { title: "Voir le site", url: "https://jelisdeslivres.vercel.app/" },
  ],
  technos: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PostGreSQL",
    "Vercel",
    "Figma",
  ],
  images: [
    {
      src: "/jelisdeslivres/main.png",
      alt: "Aperçu de l'application Je lis des livres",
    },
    {
      src: "/jelisdeslivres/landing-page-desktop.webp",
      alt: "Landing page (version bureau)",
    },
    {
      src: "/jelisdeslivres/readings-section-desktop.webp",
      alt: "Lectures enregistrées (version bureau)",
    },
    {
      src: "/jelisdeslivres/update-reading-mobile.webp",
      alt: "Éditer une lecture (version mobile)",
    },
    {
      src: "/jelisdeslivres/friends-search-desktop.webp",
      alt: "Rechercher des amis",
    },
  ],
};

export default jelisdeslivres;
