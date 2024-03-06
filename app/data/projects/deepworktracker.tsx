import { Project } from "@/app/definitions";

const deepworktracker: Project = {
  name: "Deep Work Tracker",
  description: (
    <p>
      Un time tracker orienté autour du concept de deep work de Cal Newport,
      pour noter votre temps de concentration profonde sur une journée de
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
