import Image from "next/image";
import { ProjectImage } from "@/app/definitions";
import { Fancybox } from "../ui/fancybox";

type ProjectImagesProps = {
  images: ProjectImage[];
};

export const ProjectImages = ({ images }: ProjectImagesProps) => {
  if (images.length === 0) {
    return;
  }

  if (images.length === 1) {
    return (
      <Image src={images[0].src} alt={images[0].alt} width="120" height="75" />
    );
  }

  return (
    <Fancybox>
      <a
        href={images[1].src}
        target="_blank"
        data-fancybox="gallery"
        data-caption={images[1].alt}
        className="group"
        title="Voir plus"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width="120"
          height="75"
          className="transition group-hover:brightness-75 rounded-md"
        />
      </a>
      {images.slice(2).map((image) => (
        <a
          key={image.src}
          href={image.src}
          target="_blank"
          data-fancybox="gallery"
          data-caption={image.alt}
        />
      ))}
    </Fancybox>
  );
};
