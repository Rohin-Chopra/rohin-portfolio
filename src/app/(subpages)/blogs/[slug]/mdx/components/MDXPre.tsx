"use client";

import type { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export const MDXPre = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    const child2 = children as ReactElement;
    if (!navigator.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    await navigator.clipboard.writeText(child2.props.children);
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  return (
    <pre
      className="relative border border-atomDark bg-atomLight dark:border-atomLight dark:bg-atomDark"
      {...props}
    >
      <div className="relative">
        <div
          className="absolute right-0 pl-2 pr-4 text-xl transition-all duration-300"
          onClick={handleClick}
        >
          <div>
            {isActive ? (
              <FaCheck className="cursor-pointer text-green-400" />
            ) : (
              <FaCopy className="cursor-pointer text-slate-600 hover:text-slate-400 dark:text-white" />
            )}
          </div>
        </div>
        {children}
      </div>
    </pre>
  );
};
