import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";
import { ViewLiveLink } from "./ViewLiveLink";

type Props = {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
  tech: ReactNode[];
  isReverse?: boolean;
  className?: string;
};

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
    <div
      className={`relative grid-cols-2 dark:text-white md:grid ${className}`}
    >
      <div
        className={clsx({
          "hidden md:block h-96 w-full relative": true,
          "order-2": isReverse,
        })}
      >
        <Image src={imgUrl} alt={name} fill style={{ objectFit: "contain" }} />
      </div>
      <div className="rounded px-6 py-4 shadow-lg shadow-primary transition-shadow dark:bg-darkGray md:rounded-none md:bg-transparent md:p-0 md:py-8 md:shadow-none md:dark:bg-transparent">
        <div
          className={clsx({
            "md:text-right": !isReverse,
          })}
        >
          <p className="font-semibold opacity-80 md:mt-8  md:text-lg">
            Featured Project
          </p>
          <h3 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">{name}</h3>
        </div>
        <div
          className={clsx({
            "md:relative md:shadow-lg md:shadow-primary md:bg-slate-100 dark:bg-darkGray md:rounded md:py-4 md:px-6 md:transition-opacity":
              true,
            "md:-ml-16": !isReverse,
            "md:-mr-16": isReverse,
          })}
        >
          <p className="text-base opacity-80">{description}</p>
          <div className="hidden justify-end md:flex ">
            <ViewLiveLink href={url} />
          </div>
        </div>
        <div
          className={clsx({
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
          <ViewLiveLink href={url} />
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
