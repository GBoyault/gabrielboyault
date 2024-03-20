import { Project } from "@/app/definitions";

const cottageparks: Project = {
  name: "Cottage Parks",
  description: (
    <>
      <p className="mb-3">
        Développement des fonctionnalités de réservation sur le site WordPress
        d'un groupe d'hôtellerie de plein air : recherche de disponibilités et
        tarifs en temps réel, filtrage de locatifs, carte dynamique.
        Développement de blocs Gutenberg sur-mesure.
      </p>
      <p>Travail réalisé au sein de l'agence Studio Plune.</p>
    </>
  ),
  links: [{ title: "Voir le site", url: "https://www.cottageparks.fr/" }],
  technos: ["React", "TypeScript", "Zod", "Leaflet", "WordPress", "Gutenberg"],
  images: [
    {
      src: "/cottageparks/main.png",
      alt: "Aperçu de Cottage Parks",
    },
    {
      src: "/cottageparks/map-desktop.webp",
      alt: "Proposition de campings par rapport aux critères utilisateur et aux disponibilités",
    },
    {
      src: "/cottageparks/filters-desktop.webp",
      alt: "Filtrage des locatifs",
    },
    {
      src: "/cottageparks/product-desktop.webp",
      alt: "Fiche produit avec données de réservation dynamiques",
    },
    {
      src: "/cottageparks/alternatives-desktop.webp",
      alt: "Contre-propositions en cas de séjour indisponible",
    },
  ],
};

export default cottageparks;
