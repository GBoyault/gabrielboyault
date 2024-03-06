import { Project } from "@/app/definitions";

const boggle: Project = {
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
      url: "https://boggle-two.vercel.app/",
    },
  ],
  technos: ["React", "JavaScript"],
  images: [
    {
      src: "/boggle/main.png",
      alt: "Aperçu de l'application Boggle",
    },
    {
      src: "/boggle/start-screen.webp",
      alt: "Écran d'accueil",
    },
    {
      src: "/boggle/results.webp",
      alt: "Découvrez tous les mots présents sur une grille",
    },
    {
      src: "/boggle/challenge.webp",
      alt: "Défiez d'autres joueurs",
    },
  ],
};

export default boggle;
