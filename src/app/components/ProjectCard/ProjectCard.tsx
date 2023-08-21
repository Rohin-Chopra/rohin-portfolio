import classNames from "classnames";
import Image from "next/image";
import type { ReactNode } from "react";
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
    className="mt-4 cursor-pointer rounded border-solid bg-primary px-4 py-2 text-white shadow"
  >
    View Live <FiExternalLink className="inline align-text-top" />
  </a>
);

const ProjectCard = ({
  name,
  description,
  url,
  imgUrl,
  tech,
  isReverse = false,
  className = "",
}: Props) => {
  return (
    <div className={`relative grid-cols-2 text-white md:grid ${className}`}>
      <div
        className={classNames({
          "hidden md:block h-96 w-full relative": true,
          "order-2": isReverse,
        })}
      >
        <Image src={imgUrl} alt={name} fill style={{ objectFit: "contain" }} />
      </div>
      <div className="rounded bg-darkGray px-6 py-4 shadow-lg shadow-primary transition-shadow md:rounded-none md:bg-transparent md:p-0 md:py-8 md:shadow-none">
        <div
          className={classNames({
            "md:text-right": !isReverse,
          })}
        >
          <p className="font-semibold opacity-80 md:mt-8  md:text-lg">
            Featured Project
          </p>
          <h3 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">{name}</h3>
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
          <div className="hidden justify-end md:flex ">
            <ViewLive href={url} />
          </div>
        </div>
        <div
          className={classNames({
            "mt-4": true,
            "md:ml-4": !isReverse,
            "md:ml-2": isReverse,
          })}
        >
          <h4 className="mb-2 text-lg font-semibold opacity-80">Tech Used:</h4>
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

export { ProjectCard };
