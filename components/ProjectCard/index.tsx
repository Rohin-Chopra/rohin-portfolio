import classNames from "classnames";
import Image from "next/image";
import { ReactNode } from "react";
import Button from "../Button";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
  tech: ReactNode[];
  isReverse?: boolean;
  className?: string;
};

type ViewLiveProps = {
  href: string;
};

const ViewLive = ({ href }: ViewLiveProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="bg-primary text-white px-4 py-2 cursor-pointer rounded border-solid shadow mt-4"
  >
    View Live <FiExternalLink className="inline align-text-top" />
  </a>
);

const FeaturedProjectCard = ({
  name,
  description,
  url,
  imgUrl,
  tech,
  isReverse = false,
  className = "",
}: Props) => {
  return (
    <div className={`md:grid grid-cols-2 relative text-white ${className}`}>
      <div
        className={classNames({
          "hidden md:block h-96 w-full relative": true,
          "order-2": isReverse,
        })}
      >
        <Image src={imgUrl} alt={name} layout="fill" objectFit="contain" />
      </div>
      <div className="shadow-lg md:shadow-none shadow-primary bg-darkGray md:bg-transparent rounded md:rounded-none py-4 md:py-8 px-6 md:p-0 transition-shadow">
        <div
          className={classNames({
            "md:text-right": !isReverse,
          })}
        >
          <p className="font-semibold opacity-80 md:mt-8  md:text-lg">
            Featured Project
          </p>
          <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-4">{name}</h3>
        </div>
        <div
          className={classNames({
            "md:relative md:shadow-lg md:shadow-primary md:bg-darkGray md:rounded md:py-4 md:px-6 md:transition-opacity":
              true,
            "md:-ml-16": !isReverse,
            "md:-mr-16": isReverse,
          })}
        >
          <p className="text-base opacity-80">{description}</p>
          <div className="hidden md:flex justify-end ">
            <ViewLive href={url} />
          </div>
        </div>
        <div className="mt-4 md:ml-2">
          <h5 className="opacity-80 font-semibold mb-2 text-lg">Tech Used:</h5>
          <div className="grid grid-cols-3 gap-4 md:flex">
            {tech.map((t, i) => (
              <div className="mx-2" key={i}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end md:hidden">
          <ViewLive href={url} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
