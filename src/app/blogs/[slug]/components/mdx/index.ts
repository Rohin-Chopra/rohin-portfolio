import { type MDXProvider } from "@mdx-js/react";
import { MDXAnchor } from "./MDXAnchor";
import { MDXImage } from "./MDXImage";
import { MDXPre } from "./MDXPre";

export const mdxComponents: React.ComponentProps<
  typeof MDXProvider
>["components"] = {
  a: MDXAnchor,
  pre: MDXPre,
  img: MDXImage,
};
