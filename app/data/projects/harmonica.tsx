import { Project } from "@/app/definitions";

const harmonica: Project = {
  name: "Harmonica Simulator",
  description: (
    <p>
      Un simulateur d'harmonica. Projet personnel pour explorer la synthèse
      sonore en Javascript.
      <br />
      Réalisé avec l'<strong>API Web Audio</strong>, sur le principe de la
      synthèse FM.
    </p>
  ),
  links: [
    {
      title: "Jouer",
      url: "https://harmonica.gabrielboyault.com/",
    },
    {
      title: "Github",
      url: "https://github.com/GBoyault/harmonica",
    },
  ],
  technos: ["Web Audio API", "Synthèse FM", "Vite", "TypeScript"],
  images: [
    {
      src: "/harmonica/main.png",
      alt: "Aperçu de l'application Harmonica",
    },
    {
      src: "/harmonica/main-screen.webp",
      alt: "On déplace l'harmonica avec la souris et on souffle ou aspire avec les touches du clavier.",
    },
  ],
  desktopOnly: true,
};

export default harmonica;
