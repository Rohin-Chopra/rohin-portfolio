"use client";

import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  useState,
} from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export const Pre = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const child2 = children as ReactElement;

    navigator.clipboard.writeText(child2.props.children);
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  return (
    <pre className="relative" {...props}>
      <div
        className="absolute right-0 pl-2 pr-4 text-xl transition-all duration-300"
        onClick={handleClick}
      >
        {isActive ? (
          <FaCheck className="cursor-pointer text-green-400" />
        ) : (
          <FaCopy className="cursor-pointer hover:text-slate-400" />
        )}
      </div>
      {children}
    </pre>
  );
};
