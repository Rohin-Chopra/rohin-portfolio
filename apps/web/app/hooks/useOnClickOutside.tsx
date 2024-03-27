import type { RefObject } from "react";
import { useEffect } from "react";

type Callback = (event?: MouseEvent) => void;

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: Callback
): void => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
