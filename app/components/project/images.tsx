import Image from "next/image";

type ProjectImagesProps = {
  images: string[];
};

export const ProjectImages = ({ images }: ProjectImagesProps) => {
  if (images.length === 0) {
    return;
  }

  return (
    <>
      <Image
        src={images[0]}
        alt="Aperçu du projet"
        width="120"
        height="75"
      />
    </>
  );
};
