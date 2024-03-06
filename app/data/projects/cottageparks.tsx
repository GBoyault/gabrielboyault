import { Project } from "@/app/definitions";

const cottageparks: Project = {
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
};

export default cottageparks;
