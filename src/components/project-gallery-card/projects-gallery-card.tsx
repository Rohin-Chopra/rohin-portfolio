import Image from "next/image";

type Props = {
  link: string;
  imgUrl: string;
  imgAlt: string;
};

export const ProjectGalleryCard = ({ imgAlt, imgUrl, link }: Props) => {
  return (
    <a
      className="transition-opacity duration-300 hover:opacity-50"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image src={imgUrl} alt={imgAlt} width={500} height={300} />
    </a>
  );
};
