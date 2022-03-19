import classNames from "classnames";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  name: string;
  description: string;
  imgUrl: string;
  tech: ReactNode[];
  isReverse?: boolean;
  className?: string;
};

const FeaturedProjectCard = ({
  name,
  description,
  imgUrl,
  tech,
  isReverse = false,
  className = "",
}: Props) => {
  return (
    <div className={`grid grid-cols-2 relative text-white ${className}`}>
      <div
        className={classNames({
          "h-96 w-full relative": true,
          "order-2": isReverse,
        })}
      >
        <Image src={imgUrl} alt={name} layout="fill" objectFit="contain" />
      </div>
      <div className="relative">
        <div className={classNames({ "text-right": !isReverse })}>
          <p className="font-semibold opacity-80 mt-8 text-lg">
            Featured Project
          </p>
          <h3 className="font-bold text-2xl mb-4">{name}</h3>
        </div>
        <div
          className={classNames({
            "shadow-lg shadow-primary bg-darkGray rounded py-8 px-6 hover:opacity-80 transition-opacity":
              true,
            "-ml-16": !isReverse,
            "-mr-16": isReverse,
          })}
        >
          <p className="text-base">{description}</p>
        </div>
        <div className="mt-4 ml-2">
          <h5 className="opacity-80 font-semibold mb-2 text-lg">Tech Used:</h5>
          <div className="flex">
            {tech.map((t, i) => (
              <div className="mx-2" key={i}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
