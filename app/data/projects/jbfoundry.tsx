import { Project } from "@/app/definitions";

const jbfoundry: Project = {
  name: "JB Foundry",
  description: (
    <>
      <p className="mb-3">
        Jean Boyault est typographe, j'avais réalisé son site en 2018 pour
        présenter ses fonts.
        <br />
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
  images: [
    {
      src: "/jbfoundry/main.png",
      alt: "Aperçu du site JB Foundry",
    },
    {
      src: "/jbfoundry/landing-page-desktop.webp",
      alt: "Landing page (version bureau)",
    },
    {
      src: "/jbfoundry/comments-mobile.webp",
      alt: "Les commentaires sont affichés dynamiquement, sans pagination ni rechargement de la page",
    },
  ],
};

export default jbfoundry;
