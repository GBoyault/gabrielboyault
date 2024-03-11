import { Project } from "@/app/definitions";

const deepworktracker: Project = {
  name: "Deep Work Tracker",
  description: (
    <p>
      Un time tracker orienté autour du concept de deep work de{" "}
      <a
        href="https://calnewport.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-purple hover:decoration-purple-light underline-offset-8 hover:text-purple-light transition"
      >
        Cal Newport
      </a>
      , pour noter votre temps de concentration profonde sur une journée de
      travail et idéalement l'améliorer. L'écart entre ce qu'on pense faire en
      une journée et la réalité peut être surprenant !
    </p>
  ),
  links: [
    {
      title: "Voir le site",
      url: "https://deepworktracker.gabrielboyault.com/",
    },
    {
      title: "Github",
      url: "https://github.com/GBoyault/deepworktracker",
    },
  ],
  technos: ["React", "TypeScript", "Vite", "Zod", "Framer Motion"],
  images: [
    {
      src: "/deepworktracker/main.png",
      alt: "Aperçu de l'application Deep Work Tracker",
    },
    {
      src: "/deepworktracker/tracker-view.webp",
      alt: "Le tracker",
    },
    {
      src: "/deepworktracker/results.webp",
      alt: "Le bilan d'un journée",
    },
    {
      src: "/deepworktracker/edit-period.webp",
      alt: "Éditer une période",
    },
  ],
};

export default deepworktracker;
