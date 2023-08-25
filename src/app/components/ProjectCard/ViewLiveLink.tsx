import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { FiExternalLink } from "react-icons/fi";

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const ViewLiveLink = ({ href }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="mt-4 cursor-pointer rounded border-solid bg-primary px-4 py-2 text-white shadow"
  >
    View Live <FiExternalLink className="inline align-text-top" />
  </a>
);
