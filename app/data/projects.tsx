import { Project } from "@/app/definitions";
import { url } from "inspector";

export const projects: Project[] = [
  {
    name: "Je lis des livres",
    description: (
      <p>
        Une application web pour suivre vos lectures au fil du temps. Anticipez
        vos futures lectures et retrouvez celles des années passées. Plus qu'un
        simple carnet de notes, <strong>connectez-vous</strong> avec vos amis
        pour échanger des idées.
      </p>
    ),
    links: [
      { title: "Voir le site", url: "https://jelisdeslivres.vercel.app/" },
      { title: "Github", url: "https://github.com/" },
    ],
    technos: ["Next.js", "TypeScript", "Tailwind CSS", "PostGreSQL"],
    images: ["/jelisdeslivres/main.png"],
  },
  {
    name: "Cottage Parks",
    description: (
      <>
        <p className="mb-3">
          Sur le site WordPress d'un groupe d'hôtellerie de plein air,
          développement des fonctionnalités de réservation : recherche de
          disponibilités et tarifs en temps réel, filtrage de locatifs, carte
          dynamique. Développement de blocs Gutenberg sur-mesure.
        </p>
        <p>Travail au sein de l'agence Studio Plune.</p>
      </>
    ),
    links: [{ title: "Voir le site", url: "https://www.cottageparks.fr/" }],
    technos: ["WordPress", "React", "TypeScript", "Gutenberg", "leaflet"],
    images: [],
  },
  {
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
        url: "https://gabrielboyault.com/deep-work-tracker/",
      },
      {
        title: "Github",
        url: "https://github.com/GBoyault/deepworktracker",
      },
    ],
    technos: ["React", "TypeScript", "Vite", "Zod"],
    images: [],
  },
  {
    name: "JB Foundry",
    description: (
      <>
        <p className="mb-3">
          Jean Boyault est typographe, j'avais réalisé son site il y a 5 ans
          pour présenter ses fonts.
        </p>
        <p>
          Cette refonte vise à explorer les possibilités de WordPress utilisé
          comme CMS headless avec React en front, pour proposer une meilleure
          expérience utilisateur à partir des même données.
        </p>
      </>
    ),
    links: [
      {
        title: "Voir le site",
        url: "https://jbfoundry-react.web.app/",
      },
      {
        title: "Github",
        url: "https://github.com/GBoyault/jbfoundry-react/",
      },
    ],
    technos: [
      "React",
      "React-Query",
      "React-Router",
      "TypeScript",
      "Zod",
      "WordPress API",
    ],
    images: [],
  },
  {
    name: "Boggle",
    description: (
      <p>
        Pour les amateur.rice.s de jeux de lettres, jouez au Boggle en solo,
        découvrez tous les mots disponibles sur une grille aléatoire et défiez
        d'autres joueurs sur les mêmes lettres que vous.
      </p>
    ),
    links: [
      {
        title: "Voir le site",
        url: "https://gabrielboyault.com/boggle/",
      },
    ],
    technos: ["React", "JavaScript"],
    images: [],
  },
];
